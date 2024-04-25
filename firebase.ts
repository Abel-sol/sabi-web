import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY as string,
  authDomain: "sabi-web-66bb6.firebaseapp.com",
  projectId: "sabi-web-66bb6",
  storageBucket: "sabi-web-66bb6.appspot.com",
  messagingSenderId: "421254285238",
  appId: process.env.FIREBASE_CONFIG_APP_ID as string,
  measurementId: "G-K45H3XHYM3"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db };

