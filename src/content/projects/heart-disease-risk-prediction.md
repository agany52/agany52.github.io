---
title: Heart Disease Risk Prediction
category: Applied machine learning
shortSummary: A Random Forest classification workflow explored the tradeoff between false negatives and false positives by lowering the decision threshold to prioritize recall on a held-out test set.
executiveSummary: This exploratory machine-learning project studied the tradeoff between false negatives and false positives in heart-disease classification. After cleaning and exploring the data, a Random Forest classifier was trained and the decision threshold was adjusted to prioritize sensitivity. The project demonstrates threshold selection and metric tradeoffs; it is not clinical validation and should not be presented as a diagnostic tool.
question: How does changing the classification threshold affect recall and false negatives on the held-out test set?
scopeData: A public observational heart-disease dataset with 13 model features. Duplicate records identified during preparation were removed before model evaluation. The reported confusion matrix represents a held-out test set with 32 positive cases.
methodology:
  - Cleaned and explored the source data, including duplicate-record review.
  - Trained a Random Forest classifier using Python and scikit-learn.
  - Evaluated performance on a held-out test set rather than the training data.
  - Lowered the decision threshold from 0.5 to 0.3 to examine the sensitivity and precision tradeoff.
findings:
  - Accuracy alone did not capture the practical cost of false negatives.
  - Lowering the threshold increased recall from 75% to approximately 90% on the held-out test set.
  - At the 0.3 threshold, the test set contained 3 false negatives among 32 positive cases.
  - The recall gain came with additional false positives, illustrating the tradeoff between sensitivity and precision.
recommendationLabel: Decision relevance
recommendation: Use threshold selection as an explicit decision choice tied to error costs. Any clinical interpretation would require external validation, prospective testing, governance, and expert review beyond this exploratory project.
limitations:
  - Small held-out positive sample.
  - Observational data may include sampling and measurement bias.
  - No prospective or external validation.
  - No clinical deployment; the work is not a diagnostic tool or evidence of clinical validity.
tools:
  - Python
  - Pandas
  - scikit-learn
  - Random Forest
  - Streamlit prototype
featuredOrder: 2
codeUrl: https://github.com/agany52/Python-Machine-Learning-Projects/blob/main/Heart%20Disease%20Kaggle%20Dataset/Heart_Disease_Kaggle_Dataset_%2B_Mode.ipynb
codeLabel: View analysis notebook
secondaryUrl: https://github.com/agany52/heart-disease-predictor
secondaryLabel: View app repository
visuals:
  - key: heart-matrix
    alt: Confusion matrix at a 0.3 threshold showing 21 true negatives, 8 false positives, 3 false negatives, and 29 true positives.
    caption: Held-out test-set confusion matrix at the 0.3 threshold. These results demonstrate an evaluation tradeoff; they are not clinical validation.
---

