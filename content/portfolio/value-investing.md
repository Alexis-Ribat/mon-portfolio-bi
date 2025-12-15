---
title: "Automated Value Investing Tool"
date: 2025-12-15
draft: false
image: "images/test.png" # L'image principale (vignette)
description: "A Python engine that automates fundamental analysis of S&P 500 stocks using Benjamin Graham's principles."
---

## 🚀 Project Overview
Fundamental analysis requires processing vast amounts of financial data to find undervalued companies. Doing this manually for hundreds of companies is impossible.

**The Goal:** Build a fully automated pipeline to screen 500+ stocks daily.

---

## 🏗️ Technical Architecture

I designed a modular ETL (Extract, Transform, Load) architecture:

1.  **Extract:** Python scripts request data via the **Yahoo Finance API** & **SEC Data**.
2.  **Transform:** Data cleaning with **Pandas**.
3.  **Load:** Export results to **Excel** and **JSON** for the web dashboard.

---

## 💻 Core Features & Code

### The Graham Number Logic
I vectorized the operation using Pandas for performance optimization.

```python
def calculate_graham_metrics(df):
    # Vectorized calculation for speed
    df['Graham_Number'] = np.sqrt(22.5 * df['eps'] * df['book_value'])
    return df
```

---

## 📊 Results & Impact

The script generates a clean dataset allowing me to filter opportunities instantly.

![Search Interface](/images/search-example.png)
*(Quick search feature to filter stocks by ticker or criteria)*

* **Performance:** Analyzes the full S&P 500 in under **45 seconds**.
* **Automation:** Saves approximately **10 hours of manual work** per week.
* **Accuracy:** Removes human error from ratio calculations.

---

## 📸 Project Gallery

Here is a detailed look at the dashboard and data analysis capabilities.

### 1. Strategic Dashboard
A complete overview of valuation and business models.

![Main Dashboard](/images/stock-presentation.png)
![Navigation Tabs](/images/signets.png)

### 2. Visual Trends (Growth Analysis)
Automated charts to visualize revenue and income over the last decade.

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