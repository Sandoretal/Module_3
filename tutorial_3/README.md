# 🧠 Real-World Data Coding for Neuroscientists (ReCoN)
# Tutorial 3

**MSc in Translational Neuroscience**  
**Department of Brain Sciences, Faculty of Medicine**  
**Imperial College London – Autumn 2025**

## 📚 Contributors
Cecilia Rodriguez, Katarzyna Zoltowska,  Marirena Bafaloukou, Anastasia Ilina, Rishideep Chatterjee,Sahar Rahbar, Cynthia Sandor

---

## 📊 Time-Series Data as Biological Signals
This submodule introduces **time-series analysis for neuroscience and biomedical data**. Students will learn to process, analyze, and extract meaningful features from physiological signals such as ECG and accelerometer data, developing skills in signal processing, feature extraction, and biomedical data analysis.

---

## 🎯 Learning Objectives
By the end of the notebook, you will be able to:
- Understand the fundamentals of time-series data in healthcare and neuroscience.  
- Process and clean physiological signals using various preprocessing techniques.  
- Apply signal processing methods including filtering, smoothing, and normalization.  
- Extract meaningful features from ECG and accelerometer data.  
- Analyze signals in both time and frequency domains.  
- Work with real-world biomedical datasets from PhysioNet and other clinical studies.  

---

## 📘 Contents

### **1. Introduction to Time-Series Data in Healthcare**
Overview of time-series datasets in biomedical research.  
- Challenges in time-series analysis for healthcare.  

### **2. ECG Data Analysis (Task 1)**
Complete feature extraction pipeline for heartbeat time-series data.  
- **Data Acquisition**: Loading ECG data from MIT-BIH Arrhythmia Database (PhysioNet).  
- **Data Checks**: Signal inspection, missing value detection, and quality assessment.  
- **Preprocessing**: Handling missing values using multiple imputation methods.  
- **Signal Cleaning**: Smoothing, normalization, and bandpass filtering.  
- **Beat Detection**: R-peak detection and segmentation algorithms.  
- **Feature Extraction**: RR intervals, heart rate variability, and amplitude features.  

### **3. Missing Data Handling**
Comprehensive approaches to dealing with missing values in time-series data.  
- **Dropping NaN Values**: Complete case analysis and its limitations.  
- **Mean/Median Imputation**: Simple replacement strategies.  
- **Forward Fill**: Last observation carried forward.  
- **Rolling Average**: Moving window imputation techniques.  
- **Advanced Methods**: Introduction to KNN and Random Imputation.  

### **4. Signal Preprocessing Techniques**
Essential signal processing methods for biomedical data.  
- **Smoothing/Denoising**: Moving average filters and convolution operations.  
- **Normalization/Scaling**: Z-score standardization and amplitude scaling.  
- **Bandpass Filtering**: Butterworth filters and frequency domain processing.  
- **Resampling/Downsampling**: Changing sampling rates and data reduction.  

### **5. Accelerometer Data Analysis (Task 2)**
Analysis of triaxial accelerometer data from Parkinson's Disease Smartwatch (PADS) dataset.  
- **Data Loading**: Working with multi-modal wearable sensor data.  
- **Data Exploration**: Understanding accelerometer signals and movement patterns.  
- **Preprocessing Pipeline**: Downsampling, filtering, and windowing techniques.  
- **3D Visualization**: Plotting movement trajectories in three-dimensional space.  

### **6. Windowing and Segmentation**
Temporal segmentation strategies for continuous signals.  
- **Fixed-Length Windows**: Creating overlapping time windows.  
- **Window Parameters**: Determining optimal window size and overlap.  
- **Task-Specific Segmentation**: Aligning windows with behavioral tasks.  

### **7. Time-Domain Feature Extraction**
Statistical features for characterizing signal properties.  
- **Basic Statistics**: Mean, median, standard deviation, variance.  
- **Distribution Features**: Interquartile range (IQR), RMS values.  
- **Amplitude Features**: Peak detection, magnitude calculations.  
- **Temporal Features**: Duration, intervals, and timing characteristics.  

### **8. Frequency-Domain Analysis**
Spectral analysis techniques for oscillatory signals.  
- **Power Spectral Density (PSD)**: Welch's method for frequency analysis.  
- **Peak Detection**: Identifying dominant frequencies and power.  
- **Spectral Features**: Total power, frequency bands, spectral moments.  
- **Tremor Analysis**: Frequency characteristics of pathological oscillations.  

### **9. Multi-Axis Signal Processing**
Combining information from multiple sensor channels.  
- **Spatial Analysis**: 3D movement visualisation and understanding.  
- **Vector Magnitude**: Calculating total acceleration magnitude.  
- **Cross-Axis Correlations**: Understanding relationships between axes.  

### **10. Feature Quality Analysis**
Evaluating and comparing extracted features.  
- **Correlation Analysis**: Understanding feature relationships.  
- **Statistical Comparisons**: Between-subject and between-task analysis.  
- **Visualization**: Comparative plots and correlation matrices.  
- **Feature Selection**: Identifying most informative features.  

## 🔗 Key Libraries and Tools
- **NumPy**: Numerical computing and array operations.  
- **Pandas**: Data manipulation and analysis.  
- **Matplotlib**: Data visualization and plotting.  
- **SciPy**: Signal processing and scientific computing.  
- **Seaborn**: Statistical data visualization.  

## ⚠️ Important Notes
This tutorial simplifies complex signal processing for educational purposes. Real-world biomedical signal analysis requires:
- Domain expertise in physiology and pathology.  
- Advanced signal processing techniques.  
- Careful consideration of clinical context.  
- Validation against ground truth measurements.  
- Justification when applying any of the imputation techniques, and knowledge of its consequences

