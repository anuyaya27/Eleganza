# Eleganza

Eleganza is a mobile application designed to enhance user experiences through seamless integration of Android and Python components.

## Inspiration
My CS major friends that think wearing the same hoodie everyday is okay, because "fashion and styling is time consuming".

## Tech Stack

- **Java (Android)**: Used to build the mobile front-end. It handles user interactions, displays recommendations, and collects inputs from the user.
- **Python**: Powers the backend logic, including data analysis and AI-driven insights. It interacts with the database and processes user data.
- **Google Cloud SQL**: A managed relational database that stores user profiles, wardrobe data, outfit history, and system-generated suggestions.
- **Cloud SQL Proxy**: Bridges the secure connection between the local environment and Google Cloud SQL.

### Integration Workflow

1. The user interacts with the Android app built in Java.
2. The app sends/receives data to/from the backend via Python scripts.
3. The Python backend connects securely to Google Cloud SQL using the Cloud SQL Proxy.
4. Outfit recommendations and other user-specific data are retrieved or updated in the database and displayed on the app.

## Features

- **Android Application**: The `app` directory contains the Android application source code, developed in Java, providing the user interface and core functionalities.

- **Python Backend**: The `data` directory includes Python scripts that handle data processing and backend logic, facilitating communication between the app and cloud services.

- **Cloud SQL Integration**: The repository includes `cloud_sql_proxy` and `cloud_sql_proxy_win.exe`, enabling secure connections to Google Cloud SQL databases for data storage and retrieval.

## Getting Started

### Prerequisites

- Android Studio installed on your development machine
- Python 3.x installed
- Access to a Google Cloud SQL instance

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/anuyaya27/Eleganza.git
   cd Eleganza
   ```

2. **Set Up the Android App**:

   - Open the `app` directory in Android Studio.
   - Build and run the project on an emulator or physical device.

3. **Configure the Python Backend**:

   - Navigate to the `data` directory.
   - Install required Python packages:

     ```bash
     pip install -r requirements.txt
     ```

   - Run the backend scripts as needed:

     ```bash
     python script_name.py
     ```

4. **Set Up Cloud SQL Proxy**:

   - Use the provided `cloud_sql_proxy` (for Unix) or `cloud_sql_proxy_win.exe` (for Windows) to establish a connection to your Google Cloud SQL instance.
   - Follow Google’s official guide to configure and run the proxy:
     [Cloud SQL Proxy Documentation](https://cloud.google.com/sql/docs/mysql/sql-proxy)

     
