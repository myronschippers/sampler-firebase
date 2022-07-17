# BaaS with Firebase

Spinning up a quick demo of [firebase](https://firebase.google.com/) for sampling their authentication and and storage. This repo will serve as demo and experimentation.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

1. Copy this code over to your project
1. Once finished click "Continue to console" button
1. In the comments of the script that was add there should be a `TODO` comment that says to add SDKs.
    - navigate in browser to [Firebase Available Libraries](https://firebase.google.com/docs/web/learn-more#libraries-cdn) and expand the **Available Firebase JS SDKs (from the CDN)** section
    - select the following SDK libraries...
    - Authentication for Web
    - Firestore
    - Cloud Storage for Wed

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
