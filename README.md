# 🧠 Real-world Data Coding for Neuroscientists (ReCoN)

### MSc in Translational Neuroscience  
### Department of Brain Sciences, Faculty of Medicine  
### Imperial College London  
### Autumn 2025  

---

## 🧩 Tutorials Overview

**Tutorial 1:** Introduction to Python  
**Tutorial 2:** Statistics and Electronic Healthcare Records  
**Tutorial 3:** Time Series Data Feature Engineering  
**Tutorial 4:** Introduction to Machine Learning  

---

# Module 3 — Digital Health Data Science Foundations

Welcome to **Module 3** of the *Real-world Data Coding for Neuroscientists (ReCoN)* course at Imperial College London.  
This module introduces the foundations of data handling, visualization, and reproducible workflows in Python.  
The course is **hands-on**, and students are expected to come prepared with a working Python setup.

**Course Lead:** Dr. Cynthia Sandor  
**Primary support:** Microsoft Teams (“Module 3  Introduction to Computational Methods for the Brain Sciences"  — General channel) — *please post questions here rather than emailing.*  
**Email (admin or confidential matters only):** [c.sandor@imperial.ac.uk](mailto:c.sandor@imperial.ac.uk)

---

## 🧠 Overview

This workshop is designed for **true beginners**, with no prior coding experience required.  
By the start of the course, you should be able to:
- Open a Jupyter notebook and run Python code.  
- Load and explore a CSV dataset.  
- Create a simple plot using `matplotlib` or `pandas`.

Please follow the pre-course checklist below carefully — completing it ensures you can participate fully on **Day 1**.

---

# 🧩 Pre-Course Instructions (Required)

## Audience  
**True beginners welcome.**

## Goal before Day 1  
Be able to:  
- Open a notebook and run Python code.  
- Load a CSV file.  
- Make a simple plot — all on your own laptop.  

---

## ✅ Pre-Course Checklist

### 1. Create Accounts
- **GitHub** – for notebooks & datasets.  
- **Microsoft Teams** – for course Q&A.  

---

### 2. Complete the Short Online Prep
- **Imperial’s _Introduction to Python for Researchers_**  
  *(Complete at least the Install/Setup and Basics units.)*  
- **Optional but recommended:**  
  [_Department of Computing Python Programming materials_](https://python.pages.doc.ic.ac.uk/) (Basics & Pandas).  

---

### 3. Install Locally (Default Path)
- Python **3.10+** (via conda or [python.org](https://www.python.org/downloads/))  
- **VS Code** + the Python extension  
- **Jupyter** (via `pip install jupyter` or `conda install jupyter`)  

---

### 4. Set Up a Clean Environment (see `environments.ipynb`)

#### Option A: Conda (Recommended for beginners)
```bash
# Create environment with Python 3.10
conda create -n m3 python=3.10 -y

# Activate the environment
conda activate m3

# Install all required packages
pip install -r requirements.txt

# Manual installation
pip install pandas matplotlib seaborn numpy jupyter scikit-learn
```

**Note:** Your terminal prompt will show `(m3)` when the environment is active.

#### Option B: venv (Built-in Python)
```bash
# Create environment
python -m venv m3

# Activate the environment
# Windows (Command Prompt): m3\Scripts\activate.bat
# Windows (PowerShell): m3\Scripts\Activate.ps1
# macOS/Linux: source m3/bin/activate

# Install all required packages
pip install -r requirements.txt

# Manual installation
pip install pandas matplotlib seaborn numpy jupyter scikit-learn
```

#### Setting Up Jupyter with Your Environment
After installing packages, register your environment as a Jupyter kernel:

**For conda:**
```bash
python -m ipykernel install --user --name=m3 --display-name "Python (m3)"
```

**For venv:**
```bash
python -m ipykernel install --user --name=m3 --display-name "Python (m3)"
```

This allows you to select the **Python (m3)** kernel in Jupyter notebooks.

---

### 5. Download the “Test Notebook” & `demo.csv`
- Download these from GitHub (main directory)  
- Save them locally (e.g., `~/m3/`).  

---

### 6. Run the Test Notebook (Must Pass)
You can also create your own test notebook: Open VS Code → Command Palette → “Jupyter: Create New Blank Notebook” 
→ select the **m3 kernel** → run:

(or you can simply open the downloaded test notebook)

```python
import sys, pandas as pd, matplotlib, sklearn
print("Python OK:", sys.version)
print("pandas:", pd.__version__)
print("matplotlib:", matplotlib.__version__)

import matplotlib.pyplot as plt
import numpy as np
s = pd.Series(np.random.randn(200)).cumsum()
s.plot(title="Pre-course sanity check")
plt.show()
```

---

### 7. CSV Sanity Check
Again, you can create a small CSV file yourself, named `demo.csv` with columns (or you can download the one shared by us):
```
id,age,sex,score
1,45,M,3
2,37,F,4
3,52,M,2
4,29,F,5
5,61,M,3
```
(4–5 rows of dummy data)

Note: Keep the test notebook and the `demo.csv` file in the same folder.

Then in your notebook, run:
```python
df = pd.read_csv("demo.csv")
display(df.head())
df['score'].hist()
```

---

### 8. Confirm Readiness (Required to Attend)
- Upload a **screenshot** of your plot output + package versions to the [short form](https://imperial.eu.qualtrics.com/jfe/form/SV_0ILjNX1PUugFEPk) (also sent in the course email).  
- **Deadline:** 1 week before Day 1.  

---

### 9. If Local Install Fails → Use Colab (Fallback)
- You may use our mirrored **Google Colab** notebook (https://colab.research.google.com/).  
- Still complete Steps 6–8 inside Colab and submit your screenshot.  

---

### 10. Join the Teams Q&A
- Join the **“Module 3 — Install Help”** channel.  
- Post installation questions (include OS + screenshots).  
- Optional **live troubleshooting hour** will run the week before Day 1.  

---

## 💻 Minimum Laptop Requirements
- **OS:** Windows 10/11, macOS 12+, or Ubuntu 20.04+  
- **Disk/RAM:** ≥10 GB free, ≥8 GB RAM recommended  
- **Admin rights:** Helpful but not required (non-admin alternatives available)  
- **Windows note:** WSL not required — use native install if possible.  

---

## 📦 Required Python Packages

The course requires the following packages (see `requirements.txt`):

### Core Data Science Libraries
- `pandas==2.3.3` — Data manipulation and analysis
- `numpy==2.3.3` — Numerical computing and arrays
- `scipy==1.16.2` — Scientific computing and advanced mathematics

### Machine Learning
- `scikit-learn==1.7.2` — Machine learning algorithms and tools
- `imbalanced-learn==0.14.0` — Handling imbalanced datasets

### Visualization
- `matplotlib==3.10.6` — Basic plotting and visualization
- `seaborn==0.13.2` — Statistical data visualization
- `plotly==6.3.1` — Interactive plots and dashboards

### Statistical Analysis
- `statsmodels==0.14.5` — Statistical modeling and hypothesis testing
- `statannotations==0.7.1` — Statistical annotations for plots

### Dimensionality Reduction
- `umap-learn==0.5.9.post2` — Uniform Manifold Approximation and Projection

### Domain-Specific (Biomedical)
- `wfdb==4.3.0` — Waveform database tools for physiological signals

### Jupyter Notebook Environment
- `ipykernel==6.30.1` — IPython kernel for Jupyter
- `nbformat==5.10.4` — Jupyter notebook format tools

---


## 📦 What We’ll Provide (by Email/GitHub)
- Links to the pre-course online materials  
- The Test Notebook and a tiny `demo.csv`  
- A starter `requirements.txt` (same packages as above)  
- Links to the Colab versions of notebooks (fallback)  
- Invite to the Teams Q&A channel  

---

## 🚀 What You’ll Be Able to Do on Day 1
- Open and run notebooks in VS Code  
- Import Python packages  
- Load a CSV file with pandas and make a simple plot  
- Save results to file  

---

## ⚙️ Policy
Students who haven’t submitted the **readiness screenshot (Step 8)**  
will be asked to join the **troubleshooting session** rather than the coding workshop,  
to keep the class running smoothly.  

---

*© Imperial College London – MSc in Translational Neuroscience, Department of Brain Sciences (2025)*  
