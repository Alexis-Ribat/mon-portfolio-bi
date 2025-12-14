---
title: "Analyse d'Impact d'une Campagne Marketing (SQL et Power BI)"
date: 2024-12-14
draft: false  # Assurez-vous que ceci est bien à 'false'
tags: ["SQL", "PowerBI", "Modélisation", "Marketing", "ETL"]
weight: 10 # Place cet article en haut de la liste
---

## 1. La Problématique et l'Objectif
L'équipe Marketing souhaitait évaluer avec précision le retour sur investissement (ROI) de sa dernière campagne multi-canal, en se focalisant sur les données de conversion non centralisées.

## 2. Mon Rôle : Du nettoyage à la modélisation

### A. Phase Data Engineering (Nettoyage et Transformation)
J'ai utilisé un script Python (ou un outil d'ETL) pour harmoniser les identifiants clients et standardiser les horodatages des différentes sources (CRM, logs web, base de données transactionnelle).

### B. Modélisation Sémantique
J'ai conçu un modèle en étoile  avec une table de faits (`Fact_Conversions`) et des tables de dimensions (`Dim_Canal`, `Dim_Date`, `Dim_Produit`) pour garantir la rapidité des requêtes et la clarté de l'analyse.

*(Optionnel : Insérez ici un extrait de code SQL de la vue principale)*
```sql
SELECT
    c.ChannelName,
    COUNT(f.ConversionID) AS TotalConversions,
    SUM(f.Revenue) AS TotalRevenue
FROM
    Fact_Conversions f
JOIN
    Dim_Canal c ON f.ChannelKey = c.ChannelKey
GROUP BY 1
ORDER BY 3 DESC;