---
title: Healthcare Client Data Intake & Quality Pipeline
category: Healthcare data engineering
shortSummary: SQL Server portfolio ETL: 24 synthetic encounter records from three fictional clients, 14 accepted, 10 logged rejections, and passing source-to-output reconciliation checks.
executiveSummary: Three fictional hospital clients submit encounter data in different formats. This independent SQL Server portfolio pipeline keeps the originals, validates and standardizes records, logs failures, and loads valid encounters into a shared model. The demonstrated run reconciles every source row—24 input records become 14 accepted encounters plus 10 documented rejections. Screenshots below show the reconciliation, rejected rows, run audit, and resulting production table.
question: How can differently formatted client encounter files be loaded into one reliable model while preserving source data, documenting quality failures, preventing duplicates, and proving row-count completeness?
scopeData: Synthetic encounter records from three fictional hospitals. Madison General supplies 8 rows using YYYY-MM-DD dates; Lakeshore Medical Center supplies 6 rows with alternate fields, MM/DD/YYYY dates, and currency symbols; Prairie Valley Health supplies 10 rows using YYYY/MM/DD dates and includes invalid and duplicate examples. No real hospitals, patients, or protected health information are represented.
methodology:
  - Ingested the three fictional client submissions into separate raw tables to preserve original values, including their different date and currency formats.
  - Validated dates, patient IDs, charges, diagnoses, providers, and duplicate encounters; used TRY_CONVERT to safely handle malformed source values.
  - Logged rejected records and their original values to audit.Validation_Error while standardizing valid rows into staging.Encounter.
  - Loaded valid, new encounters using DISTINCT, NOT EXISTS, uniqueness constraints, and client-plus-encounter identifiers to prevent duplicates on repeated loads.
  - Coordinated the run through a master stored procedure with error handling, run logging, and client-level checks that accepted plus rejected counts equal source counts.
findings:
  - Madison General reconciled 8 raw rows into 5 production encounters and 3 rejected records.
  - Lakeshore Medical Center reconciled 6 raw rows into 4 production encounters and 2 rejected records.
  - Prairie Valley Health reconciled 10 raw rows into 5 production encounters and 5 rejected records, including a duplicate encounter.
  - All three client checks passed, producing 14 clean encounters from 24 synthetic source rows with 10 traceable rejections.
recommendationLabel: Engineering relevance
recommendation: Use schema separation, database-enforced uniqueness, explicit reject logging, and reconciliation as complementary controls when building repeatable multi-client intake pipelines.
limitations:
  - This is a personal portfolio project, not professional production experience.
  - All organizations, patient identifiers, encounters, and records are fictional and synthetic.
  - The workflow demonstrates a local SQL Server batch pattern rather than a deployed, scheduled, or cloud-hosted pipeline.
  - The sample is intentionally small and designed to exercise known validation scenarios rather than represent real-world healthcare distributions.
tools:
  - SQL Server
  - T-SQL
  - ETL
  - Data Quality
  - Stored Procedures
featuredOrder: 1
codeUrl: https://github.com/agany52/Healthcare-DataOps-ETL
codeLabel: View on GitHub
visuals:
  - key: healthcare-reconciliation
    alt: SQL Server reconciliation results showing PASS status for Madison General Hospital, Lakeshore Medical Center, and Prairie Valley Health.
    caption: "Start here: all three fictional clients pass reconciliation. For each client, accepted encounters plus logged rejects account for every raw input row (24 = 14 + 10 overall)."
  - key: healthcare-validation
    alt: SQL Server validation error results listing rejected synthetic encounters and their data-quality issues.
    caption: "Data quality: invalid or duplicate encounters are excluded from the clean output and logged with their source values, client context, and rejection reasons for review."
  - key: healthcare-run-history
    alt: SQL Server pipeline run history showing a completed successful ETL run.
    caption: "Repeatability: run history captures start and finish times, status, and errors so a failed or completed batch can be investigated."
  - key: healthcare-production
    alt: SQL Server production encounter query showing the final standardized synthetic healthcare dataset.
    caption: "Result: one standardized table contains 14 accepted synthetic encounters from the three different source formats."
---
