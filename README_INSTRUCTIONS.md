# Installation and Setup Instructions

## Setup Firebase

### Create Firebase Project

1. Login with Google account credentials
1. Navigate to the [firbase console](https://console.firebase.google.com/)
1. Click the "Create a project" button
    - fill in all appropriate information for your new firebase project
1. Once you are prompted that your project is ready you can click the continue button and you will be taken to your project page.

### Create Firebase App

1. From the appropriate project page in Firebase
1. Under the "Get started by adding Firebase to your app" heading
    <img src="./assets/firebase-app-create.png" alt="Get started by adding Firebase to your app" />
    - click the Web App button
    <img src="./assets/firebase-app-web-btn.png" alt="Firebase Web App Button" />
1. Fill in the App nickname (there can be multiple apps under a single project)
1. Click "Register app" button
1. Add Firebase SDK section comes up with some code to place in your web app
    - Because this project is bootstrapped with [Create React App](), select the **Use npm** option instead of the **Use a `<script>` tag** option
1. From project directory run:
    ```bash
    npm install firebase
    ```
1. Going to be using some firebase tools so run:
    ```bash
    npm install -g firebase-tools
    ```
1. Create a new file for firebase config file at the root of the project in `src/firebase-config.js`
1. Copy the import code given to you and then paste it into the new `firebase-config.js` file
    - code should look comething like this
    ```javascript
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "...",
      authDomain: "...",
      projectId: "...",
      storageBucket: "...",
      messagingSenderId: "...",
      appId: "...",
      measurementId: "..."
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    ```
1. Once finished click "Continue to console" button
1. In the comments of the script that was add there should be a `TODO` comment that says to add SDKs.
    - navigate in browser to [Firebase Available Libraries](https://firebase.google.com/docs/web/setup#available-libraries)
    - select the `imports` for the following SDK libraries...
    - Authentication for Web
    - Firestore
    - Cloud Storage for Wed
