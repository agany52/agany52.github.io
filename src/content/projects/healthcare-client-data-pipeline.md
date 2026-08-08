---
title: Healthcare Client Data Intake & Quality Pipeline
category: Healthcare data engineering
shortSummary: Built a SQL Server ETL workflow that ingests differently formatted healthcare encounter data, validates and standardizes records, logs data-quality failures, prevents duplicates, loads a shared production model, and reconciles source-to-production row counts.
executiveSummary: This hands-on portfolio project simulates encounter-data intake from three fictional hospital clients. Client-specific SQL Server procedures preserve each raw format, validate and standardize acceptable records, route failures to an audit schema, and load a shared production model. The included synthetic run reconciles all 24 source rows into 14 clean production encounters and 10 documented rejections.
question: How can differently formatted client encounter files be loaded into one reliable model while preserving source data, documenting quality failures, preventing duplicates, and proving row-count completeness?
scopeData: Synthetic encounter records from three fictional hospitals. Madison General supplies 8 rows using YYYY-MM-DD dates; Lakeshore Medical Center supplies 6 rows with alternate fields, MM/DD/YYYY dates, and currency symbols; Prairie Valley Health supplies 10 rows using YYYY/MM/DD dates and includes invalid and duplicate examples. No real hospitals, patients, or protected health information are represented.
methodology:
  - Preserved each client submission in client-specific raw tables before applying transformations.
  - Applied source-aware validation with TRY_CONVERT and explicit checks for dates, patient IDs, charges, diagnoses, providers, and duplicate encounters.
  - Logged rejected records and their original values to audit.Validation_Error while standardizing valid rows into staging.Encounter.
  - Loaded only new encounters into production using DISTINCT, NOT EXISTS, unique constraints, and client-plus-encounter keys for idempotency.
  - Orchestrated the workflow with a master stored procedure using TRY/CATCH, THROW, SCOPE_IDENTITY, run-status logging, and per-client reconciliation.
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
    caption: "All three fictional client loads reconcile: 24 raw rows equal 14 production rows plus 10 rejected rows."
  - key: healthcare-validation
    alt: SQL Server validation error results listing rejected synthetic encounters and their data-quality issues.
    caption: Rejected records retain client and encounter context, error classifications, messages, and original source values for troubleshooting.
  - key: healthcare-run-history
    alt: SQL Server pipeline run history showing a completed successful ETL run.
    caption: Pipeline run auditing records start and end times, completion status, and failure notes when exceptions occur.
  - key: healthcare-production
    alt: SQL Server production encounter query showing the final standardized synthetic healthcare dataset.
    caption: The final shared production model contains 14 clean, standardized encounter records across the three fictional clients.
---
