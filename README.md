# URL-Shortener

A simple URL shortener application built with React and JSON Server. This app allows users to shorten URLs, store them temporarily in a local database, and retrieve them when needed. It is a great project for reinforcing core React concepts and managing state with a mock backend.

## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/MannThakar/URL-Shortener.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd URL-Shortener
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```

## Running JSON Server
The application uses JSON Server as a mock backend to store shortened URLs temporarily. Run JSON Server in a separate terminal for managing the URL data.

1. **Navigate to the project directory** (if you are not already there):
    ```bash
    cd URL-Shortener
    ```
2. **Start JSON Server**:
    ```bash
    json-server --watch db.json --port 8000
    ```
    This will start JSON Server at `http://localhost:8000`, where `db.json` acts as the mock database.

## Usage
1. **Start the development server**:
    ```bash
    npm run dev
    ```
2. **Access the application**:
   Open your browser and go to `http://localhost:5173`.
