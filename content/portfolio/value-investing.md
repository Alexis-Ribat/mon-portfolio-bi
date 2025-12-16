---
title: "Automated Value Investing Tool"
date: 2025-12-15
draft: false
image: "images/test.png" # L'image principale (vignette)
description: "A Python engine that automates fundamental analysis of S&P 500 stocks using Benjamin Graham's principles."
---

## 🚀 Project Overview
Value Investing Dashboard is a self-hosted financial analysis platform designed to automate fundamental stock research. 
Built on a hybrid Python/Rust architecture and containerized with Docker, it orchestrates data ingestion from Yahoo Finance and SEC EDGAR. 
The system features a Streamlit interface for interactive valuation (DCF, Piotroski F-Score) and integrates Google Gemini AI to generate comprehensive, Buffett-style investment theses and sentiment analysis.

**The Goal:** Build a fully automated pipeline to screen 500+ stocks daily.

---

## 🏗️ Technical Architecture

I designed a modular ETL (Extract, Transform, Load) architecture:

1.  **Extract:** Python scripts request data via the **Yahoo Finance API** & **SEC Data**.
2.  **Transform:** Data cleaning with **Pandas**.
3.  **Load:** Export results to **Excel** and **JSON** for the web dashboard.

**System Architecture:**
![FCF Trends](/images/value-investing-screen.png)

---
🛠️ The Tech Stack: A Hybrid Python-Rust Architecture
Building a financial analysis tool requires a balance between rapid prototyping for data science and raw performance for data ingestion. To achieve this, I designed a hybrid architecture that leverages the strengths of Python for logic and UI, and Rust for heavy computational tasks.

Here is a deep dive into the technologies powering the Value Investing Dashboard.

1. Application Layer: Python & Streamlit 🐍
The core of the application is built on Python 3.11, the lingua franca of financial data analysis.

Frontend Framework: I chose Streamlit for its ability to turn data scripts into shareable web apps in minutes. It allows me to focus on financial modeling rather than CSS or JavaScript.

Data Processing: Pandas and NumPy handle the vectorization of financial metrics (ROCE, CAGR, DCF modeling).

Visualization: Plotly provides interactive charts (gauges, time-series) that allow users to zoom into specific financial periods.

Data Sources: yfinance is used for real-time market data (prices, basic financials), acting as the first layer of the ETL pipeline.

2. The Performance Engine: Rust 🦀
Fetching and parsing gigabytes of institutional filings (10-K, 10-Q) from the SEC EDGAR database is CPU-intensive. Python struggled with latency here, so I offloaded this specific workload to Rust.

Custom Binary (edgar_fetcher): A standalone CLI tool written in Rust.

Concurrency: Leverages reqwest (async HTTP client) and tokio to handle network requests significantly faster than Python’s requests.

Type Safety: Uses serde for lightning-fast JSON serialization/deserialization, ensuring data integrity before it even reaches the Python layer.

Integration: The Python backend orchestrates the Rust binary via subprocess calls, creating a seamless bridge between the two languages.

3. Artificial Intelligence: Google Gemini 🧠
To automate the qualitative analysis (the "Warren Buffett" perspective), the system integrates Large Language Models (LLM).

Model: Google Gemini 1.5 Flash. Chosen for its large context window (essential for reading long financial transcripts) and low latency.

Prompt Engineering: I implemented a rigorous "Persona-based" prompting strategy. The system injects raw financial tables (computed in Python) into the prompt context, forcing the AI to ground its analysis in hard data rather than hallucinations.

Sentiment Analysis: The system scrapes news via BeautifulSoup and feeds headlines to the LLM to gauge market sentiment (Bullish/Bearish).

4. Persistence: PostgreSQL & SQLAlchemy 🐘
Financial data requires strict structure and integrity.

Database: PostgreSQL 15. It stores historical financial data, caching it to avoid hitting API rate limits. It also serves as the archive for every AI-generated report.

ORM: SQLAlchemy. It abstracts the SQL complexity, allowing me to manipulate database records using Python classes and objects.

Management: Adminer. A lightweight database management tool running in a sidecar container, allowing for quick manual inspection and SQL queries via a web interface.

5. Infrastructure: Docker & Synology NAS 🐳
The entire stack is designed to be "Write Once, Run Anywhere" (specifically, on a home server).

Containerization: A multi-stage Dockerfile handles the complexity of the hybrid build. It first compiles the Rust binary (using a Rust image), then copies the executable into a slim Python image. This results in a single, lightweight image containing both the Python app and the Rust engine.

Orchestration: Docker Compose defines the services (dashboard, db, adminer), networks, and persistent volumes.

Hardware: The stack runs 24/7 on a Synology NAS, providing a private, self-hosted environment without cloud subscription costs.


# src/sec_provider.py
def get_sec_data_rust(ticker):
    """Orchestrates the high-performance Rust binary from Python"""
    binary_path = "/usr/local/bin/edgar_fetcher"
    result = subprocess.run([binary_path, ticker], capture_output=True)
    return json.loads(result.stdout)


🚀 Functional Overview: From Ticker to Investment Thesis
The Value Investing Dashboard is designed to replicate the workflow of a professional equity analyst, automating the tedious data gathering process to focus on decision-making.

Here is a breakdown of the application's core capabilities.

1. Smart Search & Entity Resolution
The journey begins with a universal search bar.

Fuzzy Matching: Users can input a ticker symbol (AAPL) or a company name (Louis Vuitton).

AI Fallback: If the exact ticker isn't found in the standard database, the system queries the AI engine to resolve the correct symbol automatically, preventing "Ticker not found" errors.


Favorites: A sidebar offers quick access to a curated list of high-quality companies (Apple, LVMH, Novo Nordisk) for instant analysis.

2. The "Health Check" Dashboard
Upon selection, the application instantly computes a financial health scorecard based on Value Investing principles:

Key Metrics: Real-time display of P/E Ratio, ROCE (Return on Capital Employed), and Debt/EBIT leverage ratios.


Piotroski F-Score: An automated 0-9 scoring system that analyzes profitability, leverage, and operating efficiency trends to detect improving or deteriorating business fundamentals.

Company Profile: A strategic summary of the business, its sector, and its "Moat" (competitive advantage), translated and synthesized by AI.

3. Interactive Valuation Sandbox (DCF)
Unlike static financial websites, the dashboard features a dynamic Discounted Cash Flow (DCF) calculator.


Scenario Testing: Users can adjust key assumptions—Growth Rate, WACC (Discount Rate), and Terminal Growth—using interactive sliders.

Fair Value Gauge: A visual gauge updates in real-time, showing the intrinsic value vs. the current stock price.


Reverse DCF: The system calculates the "Implied Growth Rate," answering the critical question: "What growth is the market currently pricing in?".

4. Deep Dive Financials (Powered by Rust)
For granular analysis, the application provides raw, unaltered financial data sourced directly from SEC filings via the high-performance Rust engine.

SBC Adjustment: It calculates "True Free Cash Flow" by adjusting for Stock-Based Compensation (SBC), a crucial metric often hidden in standard reports.

Visual Trends: Interactive Plotly charts visualize the correlation between Revenue, Net Income, and Free Cash Flow over the last 5-10 years.

5. AI Analyst & Sentiment Scoring
The application integrates Google Gemini to act as a virtual research assistant.


Sentiment Analysis: The system scrapes recent news (via Google News) or processes earnings call transcripts to determine the current market sentiment (Bullish/Bearish).

Investment Thesis Generation: By clicking "Generate Report," the AI consumes all financial data and writes a comprehensive Markdown report. It follows a strict "Value Investor" persona structure defined in prompt.txt:

Business Model: How does it make money?

Moat Analysis: Is the competitive advantage durable?

Capital Allocation: Is management shareholder-friendly?


Risks: What could kill the business? 

6. Archiving & Knowledge Base
Analysis is never lost.

Auto-Save: Every generated AI report is automatically time-stamped and saved into the PostgreSQL database.

History: Users can revisit previous analyses to track how their thesis (and the company's fundamentals) has evolved over time.

![Revenue Trends](/images/Visual-trends-1.png)
![FCF Trends](/images/Visual-trends-2.png)

### 3. Detailed Financial Data (SEC & Yahoo)
Automatic extraction of key financial statements.

**Official SEC Data:**
![SEC Data Table](/images/SEC-data-1.png)
![Efficiency Ratios](/images/value-investing-screen.png)

**Yahoo Finance Data Source:**
![Yahoo Data](/images/yahoo-data.png)

### 4. Owner Earnings Calculation
Implementing Warren Buffett's approach to real valuation.

![True Owner Earnings](/images/SEC-data-2.png)
![Calculation Test](/images/test.png)