# Installation and Setup Instructions

## Setup React App

1. From terminal navigate to where you want to store your application locally
1. In terminal run:
    ```bash
    npx create-react-app my-firebase-project
    ```
1. Strip out what is not needed
    - remove `src/App.css`
    - in `src/App.js` remove `import './App.css';`
1. Personally I like keeping the `index.css` as my base stylesheet.
    - rename `index.css` to `base.css`
    - in `src/index.js` update `import './index.css';` to `import './base.css';`
1. Move `src/App.js` to a `components` directory
    - in `src/App.js` remove `import logo from './logo.svg';` and 
    - move `src/App.js` to `src/components/App.js`
    - in `src/index.js` update `import App from './App';` to `import App from './components/app/App';`
1. Create Header component
    - create file `src/components/header/Header.module.css`
    ```css
    .appHeader {
      display: flex;
      justify-content: start;
      align-items: center;
    }

    .appHeader > * + * {
      margin: 0 0 8px 0;
    }

    .appHeaderLogo {
      width: 40px;
      max-width: 100%;
    }

    ```
    - move `src/logo.svg` to `src/components/header/logo.svg`
    - create file `src/components/header/Header.js`
    ```javascript
    import logo from './logo.svg';
    import HeaderStyles from './Header.module.css';

    function Header() {
      return (
        <header className={HeaderStyles.appHeader}>
          <img src={logo} alt="logo" className={HeaderStyles.appHeaderLogo} />
          <h1>Firebase Sampler</h1>
        </header>
      );
    };

    export default Header;

    ```
1. Create Footer component
    - create file `src/components/footer/Footer.module.css`
    ```css
    .appFooter {
      padding: 10px;
    }

    ```
    - create file `src/components/footer/Footer.js`
    ```javascript
    import FooterStyles from './Footer.module.css';

    function Footer() {
      return <div className={FooterStyles.appFooter}>React demo for Firebase</div>;
    }

    export default Footer;

    ```
1. add the `Header` and `Footer` components to the `src/components/app/App.js`
    ```javascript
    import Header from '../header/Header';
    import Footer from '../footer/Footer';

    function App() {
      return (
        <div className="App">
          <Header />
          <div>Body Content</div>
          <Footer />
        </div>
      );
    }

    export default App;

    ```

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
1. Going to be using some firebase tools so run:
    ```bash
    npm install -g firebase-tools
    ```
1. To login to firebase through the commandline run:
    ```bash
    firebase login
    ```
