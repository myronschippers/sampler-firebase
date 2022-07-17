# BaaS with Firebase

Spinning up a quick demo of [firebase](https://firebase.google.com/) for sampling their authentication and and storage. This repo will serve as demo and experimentation.

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
    - If practicing with a JS framework bundling with npm select the **Use npm** option or select the **Use a `<script>` tag** option
1. Copy this code over to your project
1. Once finished click "Continue to console" button
1. In the comments of the script that was add there should be a `TODO` comment that says to add SDKs.
    - use the link provided and select the SDKs desired...
    - Authentication for Web
    - Firestore
