---
title: "Automated Value Investing Tool"
date: 2025-12-15
draft: false
image: "images/System-Architecture.png"
description: "A Python engine that automates fundamental analysis of S&P 500 stocks using Benjamin Graham's principles."
---

## Project Overview

### Context & Problem Statement
While there is no shortage of commercial stock screeners, I found them lacking in transparency and flexibility. I needed a tailored solution that would allow me to:
* **Customize dashboards** based on my specific Value Investing criteria.
* **Audit the calculations** of key performance indicators (ROE, ROCE, Free Cash Flow) to ensure they match my valuation models.
* **Automate qualitative analysis** using my own predefined AI prompts to mimic a specific investor persona.

### Proposed Solution
To address this, I built the **Value Investing Dashboard**, a self-hosted financial analysis platform designed to automate fundamental stock research.

The system aggregates real-time market data from **Yahoo Finance** and mines deep historical financial statements directly from the **SEC (EDGAR)** database.

Built on a hybrid **Python/Rust** architecture and containerized with **Docker**, the application features a **Streamlit** interface for interactive valuation (DCF, Piotroski F-Score) and integrates **Google Gemini AI** to generate comprehensive, Buffett-style investment theses.

> **The Goal:** Build a fully automated pipeline to screen 500+ stocks daily with full transparency on data and logic.

---

## Data & AI Strategy

### Data Source Selection: Yahoo Finance
I deliberately chose **Yahoo Finance** as the primary data source for three strategic reasons:

* **Cost-Efficiency:** It offers a robust, free access to financial data, allowing the project to scale without incurring high API subscription costs.
* **Scalability:** It covers a massive universe of global companies, not just the US market, allowing for broad screenings.
* **Stability & Low Maintenance:** The API structure is highly stable compared to web scraping. This ensures the pipeline remains reliable over time with minimal maintenance required on the codebase.

### AI Integration: Google Gemini
To go beyond simple numbers, I integrated **Google Gemini Pro** to perform automated qualitative analysis (sentiment analysis, risk assessment, and earnings call summarization).


#### Constraint: API Rate Limits

* **The Challenge:** The API imposes strict daily rate limits (approx. 20 requests/day), which created a bottleneck for processing 500+ stocks.
* **The Engineering Solution (Key Rotation):** I implemented a **Smart Failover System**. The Python script manages a pool of multiple API keys. When a key reaches its token limit (Error 429), the algorithm automatically catches the exception and switches to the next available key instantly.

#### Engineering Solution: Smart API Key Rotation

The system manages a pool of API keys and automatically rotates them when a key reaches its quota.



#### Code Highlight – Gemini Key Rotation

```python
def ask_gemini(prompt, api_keys):
    for key in api_keys:
        try:
            configure_genai(key)
            response = model.generate_content(prompt)
            return response.text
        except ResourceExhausted:
            print(f"Key {key[:5]}... exhausted. Switching to next key.")
            continue
    raise Exception("All API keys exhausted.")
```

## Infrastructure & Deployment

### Hosting Environment: Synology NAS

To ensure industrial-grade reliability, the entire pipeline is hosted on a **Synology NAS** (Network Attached Storage).

* **24/7 Automation:** The script is containerized and triggered automatically every morning via **Cron jobs**, running independently of my personal workstation.
* **Data Persistence:** Historical financial data is stored locally with **RAID redundancy**, ensuring data safety and preventing data gaps.
---

## Technical Architecture

### ETL Pipeline Overview


I designed a modular ETL (Extract, Transform, Load) architecture:

1.  **Extract:** Python scripts request data via the **Yahoo Finance API** & **SEC Data**.
2.  **Transform:** Data cleaning with **Pandas**.
3.  **Load:** Export results to **Excel** and **JSON** for the web dashboard.

### System Architecture Diagram

![System Architecture](/images/System-Architecture.png)

---

## Technology Stack

Building a financial analysis tool requires a balance between rapid prototyping and raw performance. I designed a hybrid architecture leveraging Python for logic/UI and Rust for heavy computation.

### Stack Overview

| Component          | Technology        | Role                         |
| ------------------ | ----------------- | ---------------------------- |
| Application Layer  | Python 3.11       | Core logic & orchestration   |
| Performance Engine | Rust              | High-performance SEC parsing |
| Frontend           | Streamlit         | Interactive dashboards       |
| Data Processing    | Pandas / NumPy    | Financial computations       |
| AI                 | Google Gemini 1.5 | Qualitative analysis         |
| Database           | PostgreSQL        | Historical persistence       |
| Infrastructure     | Docker / Synology | Deployment & hosting         |


### Application Layer: Python & Streamlit

Python serves as the backbone of the application.

* **Streamlit** for rapid UI development
* **Pandas / NumPy** for financial modeling
* **Plotly** for interactive visualizations
* **yfinance** for market data ingestion


### Performance Engine: Rust

Parsing SEC filings is CPU-intensive and latency-sensitive.

* Standalone CLI tool: `edgar_fetcher`
* Async networking with `reqwest` and `tokio`
* Strong typing and fast serialization with `serde`

#### Code Highlight – Python/Rust Bridge

```python
import subprocess
import json

def get_sec_data_rust(ticker):
    binary_path = "/usr/local/bin/edgar_fetcher"
    result = subprocess.run([binary_path, ticker], capture_output=True)
    return json.loads(result.stdout)
```

---

## Functional Overview

<!-- COMMENTAIRE : Regroupement de toutes les fonctionnalités utilisateur -->

### 1. Smart Search & Entity Resolution

* Ticker or company name input
* Fuzzy matching
* AI-based fallback for unresolved entities

![Search Example](/images/search-example.png)

### 2. Financial Health Dashboard

* Key ratios: P/E, ROCE, Debt/EBIT
* Piotroski F-Score (0–9)
* AI-generated company profile and moat analysis

### 3. Interactive Valuation (DCF)

* Scenario testing via sliders
* Real-time intrinsic value gauge
* Reverse DCF for implied growth rate

### 4. Deep Financial Analysis (SEC)

* Raw SEC financials
* SBC-adjusted Free Cash Flow
* Long-term trend visualizations

![Revenue Trends](/images/Visual-trends-1.png)
![FCF Trends](/images/Visual-trends-2.png)

### 5. AI Analyst & Sentiment Scoring

* News and transcript sentiment analysis
* Automated investment thesis generation
* Persona-based prompt structure

### 6. Archiving & Knowledge Base

* Auto-saved AI reports
* Historical comparison over time

---

**Code Highlight: The Python-Rust Bridge**

```python
# src/sec_provider.py

import subprocess
import json

def get_sec_data_rust(ticker):
    """
    Orchestrates the high-performance Rust binary from Python.
    It calls the compiled binary directly for max speed.
    """
    binary_path = "/usr/local/bin/edgar_fetcher"
    
    # Execute the Rust binary as a subprocess
    result = subprocess.run([binary_path, ticker], capture_output=True)
    
    # Parse the JSON output from Rust
    return json.loads(result.stdout)
```


## Functional Overview: From Ticker to Investment Thesis
The Value Investing Dashboard is designed to replicate the workflow of a professional equity analyst, automating the tedious data gathering process to focus on decision-making.

Here is a breakdown of the application's core capabilities.

1. Smart Search & Entity Resolution
The journey begins with a universal search bar.

Fuzzy Matching: Users can input a ticker symbol (AAPL) or a company name (Louis Vuitton).

AI Fallback: If the exact ticker isn't found in the standard database, the system queries the AI engine to resolve the correct symbol automatically, preventing "Ticker not found" errors.

**Smart Search using IA:**
![search-example](/images/search-example.png)

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
