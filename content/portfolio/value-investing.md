---
title: "Outil d'Analyse Value Investing"
date: 2024-12-15
draft: false
image: "images/test.png" # L'image principale du projet
description: "Un outil complet pour détecter les opportunités boursières."
---

## 🎯 Le Problème
Je voulais automatiser l'analyse fondamentale des entreprises cotées en bourse, un processus qui prend habituellement des heures sur Excel.

## 🛠 La Solution Technique
J'ai développé un script **Python** autonome qui utilise :
* **API Yahoo Finance** pour récupérer les bilans comptables.
* **Pandas** pour le nettoyage et la structuration des données.
* **Excel Writer** pour générer un rapport lisible chaque matin.

## 💻 Extrait de Code (Logique du tri)
```python
def calculate_graham_number(eps, book_value):
    return (22.5 * eps * book_value) ** 0.5