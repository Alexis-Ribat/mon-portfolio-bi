---
title: "Automated Value Investing Tool"
date: 2025-12-15
draft: false
image: "images/System-Architecture.png"
description: "A Python engine that automates fundamental analysis of S&P 500 stocks using Benjamin Graham's principles."
---

Git of the project : https://github.com/Alexis-Ribat/value_investing/tree/6d7489f7c6c3b625f168d156296dbcf12308abda 
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

### Data Engineering Challenge: The Stock Split Distortion

While the Rust engine efficiently fetches raw data, I encountered a critical data integrity issue involving stock splits. Raw SEC filings report earnings based on the share count at the time of filing.

The Problem: For companies like Tesla or Apple, past stock splits (e.g., 4-for-1) caused historical EPS figures to appear artificially high compared to current prices. This skew heavily distorted multi-year ratio analysis and the Graham Number calculation.

The Solution: I implemented a normalization layer in Python. The system cross-references raw SEC data with Yahoo Finance's split history to calculate a cumulative adjustment factor. This ensures that historical EPS and share counts are "split-adjusted" before being fed into the valuation algorithms.

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

**Search Example:**
![Search Example](/images/search-example.png)

---
### 2. Financial Health Dashboard

* Key ratios: P/E, ROCE, Debt/EBIT
* Piotroski F-Score (0–9)
* AI-generated company profile and moat analysis

---
### 3. Interactive Valuation (DCF)

* Scenario testing via sliders
* Real-time intrinsic value gauge
* Reverse DCF for implied growth rate

**DCF:**
<a href="/images/DCF.png" data-fancybox="gallery" data-caption="DCF">
    <img src="/images/DCF.png" alt="DCF" width="60%" style="display: block; margin: 10px auto;">
</a>

---
### 4. Deep Financial Analysis (SEC)

* Raw SEC financials
* SBC-adjusted Free Cash Flow
* Long-term trend visualizations

**Visual Examples:**

<div style="display: flex; justify-content: center; gap: 20px; align-items: center; margin-top: 20px;">
<a href="/images/Visual-trends-1.png" data-fancybox="gallery" data-caption="Visual-trends-1" style="width: 48%;">
<img src="/images/Visual-trends-1.png" alt="Visual-trends-1" style="width: 100%; display: block; border-radius: 5px;">
</a>
<a href="/images/Visual-trends-2.png" data-fancybox="gallery" data-caption="Visual-trends-2" style="width: 48%;">
<img src="/images/Visual-trends-2.png" alt="Visual-trends-2" style="width: 100%; display: block; border-radius: 5px;">
</a>
</div>


---
### 5. AI Analyst & Sentiment Scoring

* News and transcript sentiment analysis
* Automated investment thesis generation
* Persona-based prompt structure

**AI Analyses:**
<div style="display: flex; justify-content: center; gap: 20px; align-items: center; margin-top: 20px;">
<a href="/images/AI Analyst 1.png" data-fancybox="gallery" data-caption="AI Analyst 1" style="width: 48%;">
<img src="/images/AI Analyst 1.png" alt="AI Analyst 1" style="width: 100%; display: block; border-radius: 5px;">
</a>
<a href="/images/AI Analyst 2.png" data-fancybox="gallery" data-caption="AI Analyst 2" style="width: 48%;">
<img src="/images/AI Analyst 2.png" alt="AI Analyst 2" style="width: 100%; display: block; border-radius: 5px;">
</a>
</div>

---
### 6. Archiving & Knowledge Base

* Auto-saved AI reports
* Historical comparison over time

**BDD:**
<a href="/images/BDD.png" data-fancybox="gallery" data-caption="BDD">
    <img src="/images/BDD.png" alt="BDD" width="85%" style="display: block; margin: 10px auto;">
</a>


---





