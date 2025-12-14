---
title: "Outil d'Analyse Value Investing (Python)"
date: 2024-12-15
draft: false
tags: ["Python", "Finance", "API", "Data Analysis"]
weight: 20
# Si le dépôt est public, mettez le lien ici. Sinon, effacez ces lignes 'cover' :
cover:
    image: "images/value-investing-screen.png" # On verra comment ajouter l'image après
    alt: "Capture d'écran de l'outil"
    caption: "Interface de l'analyseur"
---

## 📅 Contexte
Passionné par la bourse, je voulais automatiser la recherche d'entreprises sous-évaluées selon les principes de Benjamin Graham et Warren Buffett.

## 🛠 La Solution Technique
J'ai développé un script **Python** qui :
1.  Se connecte à une API financière (ex: Yahoo Finance / Alpha Vantage).
2.  Récupère les bilans comptables de 500+ entreprises.
3.  Calcule les ratios clés (PER, PEG, Dette/EBITDA).
4.  Génère un score de "qualité" pour chaque action.

*(Si le code est privé, expliquez pourquoi ou montrez un extrait ici)*
> *Note : Ce projet est hébergé sur un dépôt privé car il contient des clés API personnelles / algorithmes propriétaires.*

## 📊 Résultats
L'outil génère un fichier Excel/CSV chaque matin avec le Top 10 des opportunités d'achat.