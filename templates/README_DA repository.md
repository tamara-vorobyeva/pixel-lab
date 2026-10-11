**📊 Analysis of GoFast Scooter Rental Service User Demographics and Financial Dynamics**

**📌 Business Case Overview**
* The client, GoFast scooter rental service, required an analysis of its customer base and ride patterns to evaluate the potential profitability of expanding its premium subscription model.

**🎯 Project Objectives**
* Analyze user demographics and scooter usage patterns across 8 different cities.
* Assess the financial benefits of the "ultra" paid subscription by comparing monthly subscriber and non-subscriber revenue.
* Test business hypotheses regarding ride duration, optimal scooter wear-and-tear, and the impact of promotional strategies.

**🔗 Quick Links**
🛠 **[View Data Cleaning, Analysis & Statistical Modeling Script in Python](src/analysis-scooter-clients-base.ipynb)** 

---
**🛠 Tech Stack**
* **Data Processing:** Python (pandas, numpy) utilized for data cleaning, deduplication, type optimization (e.g., downsizing to Int8/Int32 to save memory), and missing value handling.
* **Statistical Analysis:** Python (scipy.stats) applied for hypothesis testing and modeling normal distributions of ride durations.
* **Data Visualization:** Matplotlib, seaborn, and phik used to create correlation matrices and behavioral distributions.
---
**🔍 Research Approach**
* **Data Cleaning & Optimization:** Analyzed a dataset of 1,534 unique users and 18,068 rides, identifying 31 duplicates and filtering out ~0.5% anomalies (near-zero durations and distances).
* **Data Integration:** Merged user demographics, ride logs covering 364 days, and subscription pricing into a unified dataset for cohort analysis.
* **Financial & Statistical Modeling:** Calculated monthly revenue per user based on subscription tiers and modeled ride durations using normal distribution to evaluate promotional thresholds.

**💡 Key Findings**
* **Data Quality & Usage:** The user base has an average age of 24.9 years, completing rides with an average distance of 3,070.66 meters and a duration of 17.81 minutes.
* **Distribution Traits:** Mean and median values for distance and duration are highly aligned, indicating a near-normal distribution of ride metrics.
* **Usage Anomalies:** A missing date gap was identified (364 unique days instead of 365), and extreme outliers (rides under 1 minute or 1 meter) were isolated.

**🚀 Strategic Recommendations**
* Prioritize marketing campaigns toward converting free users to the "ultra" subscription, aiming to maximize monthly revenue based on duration trends.
* Implement the proposed discount for targeted time intervals (e.g., 20-30 minutes) to increase customer loyalty among the most active demographic.
* Introduce a critical distance surcharge past the 90th percentile threshold to mitigate excessive wear-and-tear costs from prolonged trips over the optimal 3,130 meters.
---
**📁 Repository Structure**
* `README.md` — Project overview and executive summary.
* `/data` — Anonymized merged data set formed out of original raw datasets (`users_go.csv`, `rides_go.csv`, `subscriptions_go.csv`).
* `/src` — Source code folder containing the Jupyter Notebook with Python analysis.

**🔢 Data Preview**
<div style="overflow-x: auto; max-width: 100%;">
  
|   user_id |   distance |   duration | date                | distance_group       | duration_group         | name   |   age | city   | subscription_type   | age_group            |   minute_price |   start_ride_price |   subscription_fee |   month |
|----------:|-----------:|-----------:|:--------------------|:---------------------|:-----------------------|:-------|------:|:-------|:--------------------|:---------------------|---------------:|-------------------:|-------------------:|--------:|
|         1 |    4409.92 |         25 | 2021-01-01 00:00:00 | Long (3000-4500 m)   | Long (20-30 minutes)   | кира   |    22 | тюмень | ultra               | Young people (18-35) |              6 |                  0 |                199 |       1 |
|         1 |    2617.59 |         15 | 2021-01-18 00:00:00 | Middle (1500-3000 m) | Middle (10-20 minutes) | кира   |    22 | тюмень | ultra               | Young people (18-35) |              6 |                  0 |                199 |       1 |
|         1 |     754.16 |          6 | 2021-04-20 00:00:00 | Short (1-1500 m)     | Short (1-10 minutes)   | кира   |    22 | тюмень | ultra               | Young people (18-35) |              6 |                  0 |                199 |       4 |
|         1 |    2694.78 |         18 | 2021-08-11 00:00:00 | Middle (1500-3000 m) | Middle (10-20 minutes) | кира   |    22 | тюмень | ultra               | Young people (18-35) |              6 |                  0 |                199 |       8 |
|         1 |    4028.69 |         26 | 2021-08-28 00:00:00 | Long (3000-4500 m)   | Long (20-30 minutes)   | кира   |    22 | тюмень | ultra  | Young people (18-35) |              6 |                  0 |                199 |       8 |


</div>
