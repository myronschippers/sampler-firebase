// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {} from 'firebase/auth';
import {} from 'firebase/firestore';
import {} from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2vUpU-4w7ExNuP5sr_AHTBH20k6fiRVI',
  authDomain: 'sampler-box.firebaseapp.com',
  projectId: 'sampler-box',
  storageBucket: 'sampler-box.appspot.com',
  messagingSenderId: '139546217173',
  appId: '1:139546217173:web:574e70e5c70d2a6bc6305c',
  measurementId: 'G-S2MWHVWCBE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
