# My React Native App

This is a simple React Native app that displays a list of users and their details. Follow the instructions below to set up and run the app.

## Prerequisites

-   Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
-   Ensure you have React Native CLI installed. You can install it by running:

    ```sh
    npm install -g react-native-cli
    ```

-   Make sure you have an Android or iOS emulator running. For Android, you can use Android Studio. For iOS, you can use Xcode.

## Frontend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the React Native development server:

    ```sh
    npx react-native start
    ```

4. In a separate terminal window, run the following command to start the app on your emulator:
    ```sh
    npx react-native run-android
    ```
    or for iOS:
    ```sh
    npx react-native run-ios
    ```

## Backend Setup

1. Navigate to the backend directory:

    ```sh
    cd backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the backend server:

    ```sh
    node server.js
    ```

    The backend server will be accessible at:

    - `http://192.168.1.6:3000`
    - `http://127.0.0.1:3000`
    - `https://192.168.1.6:3000`

## Notes

-   Ensure that the backend server is running before starting the frontend app to fetch the user data correctly.
-   If you encounter any issues, make sure your emulator is properly set up and running.

```

```
