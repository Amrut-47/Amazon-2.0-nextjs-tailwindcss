import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCt1dXyo-Y_NutIkDuAe6t7aS8zxEtRwhc",
  authDomain: "clone-9ef60.firebaseapp.com",
  projectId: "clone-9ef60",
  storageBucket: "clone-9ef60.appspot.com",
  messagingSenderId: "915493862546",
  appId: "1:915493862546:web:f2f5b2d3bc86550d277a4b"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;