---
title: Sega Portfolio Analysis
category: Strategic analytics and business intelligence
shortSummary: Cleaned 1,402 Sega game records with Python, then used Power BI and DAX to compare platform mix and user-score variation. See platform and score visuals below.
executiveSummary: This independent BI case study cleans historical Sega release data in Python and models it in Power BI. The platform chart below makes release mix easy to scan; the score-trend image shows one Power BI view comparing PC and iOS user scores. Together they support a discussion of portfolio volatility and quality assurance, not a claim of commercial impact. This page provides screenshots and an analysis notebook, not a publicly hosted interactive Power BI report.
question: How did Sega's historical release mix change across platforms, and where did user reception appear most variable?
scopeData: More than 1,400 historical game records from the public Kaggle Sega Games dataset. The analysis grouped long-tail platforms, cleaned text fields, and modeled release counts and user scores for descriptive portfolio analysis.
methodology:
  - Used Pandas to clean developer, genre, platform, and score fields.
  - Grouped long-tail platform categories to make portfolio patterns interpretable.
  - Imported the cleaned output into Power BI for interactive reporting.
  - Used DAX measures to compare release mix and average user score over time.
findings:
  - The historical release mix shifted away from proprietary hardware toward PC and mobile platforms.
  - PC releases showed a high ceiling but greater user-score volatility.
  - Mobile reception appeared more consistently limited but less variable.
  - The evidence supports a portfolio-monitoring question, not a claim about realized commercial impact.
recommendationLabel: Recommended action
recommendation: Treat the PC portfolio as a higher-variance investment and prioritize strong pre-release quality assurance, project selection, and ongoing portfolio monitoring.
limitations:
  - Public historical data may be incomplete or inconsistently recorded across eras and platforms.
  - User scores can reflect self-selection, changing audience expectations, and uneven sample sizes.
  - Descriptive patterns do not isolate the causes of platform performance.
  - The project does not include costs, revenue, internal strategy, or measured results from implementing the recommendation.
tools:
  - Python
  - Pandas
  - Power BI
  - DAX
  - Kaggle data
featuredOrder: 4
codeUrl: https://github.com/agany52/Python-Machine-Learning-Projects/blob/main/Sega%20Games%20Database/Sega_Games_Database.ipynb
codeLabel: View analysis notebook
visuals:
  - key: sega-platform
    alt: Horizontal bar chart showing PC as the largest individual platform group, followed by iOS, Xbox 360, Wii, and PS3.
    caption: Publication-ready reconstruction of the notebook's final platform counts. The top eight platform groups are shown individually and the remaining 13 are combined.
  - key: sega-trend
    alt: Power BI line chart comparing average user scores over time for PC and iOS titles.
    caption: "Power BI report view: average user-score trends for PC and iOS help illustrate variation in this dataset. This is a static image; the interactive .pbix report is not publicly embedded."
---
