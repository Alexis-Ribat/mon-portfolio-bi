---
title: "Automated Value Investing Tool"
date: 2024-12-15
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