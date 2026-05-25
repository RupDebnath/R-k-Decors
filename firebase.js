// 🔥 FIREBASE CONFIG (replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

// INIT
firebase.initializeApp(firebaseConfig);

// SERVICES
const auth = firebase.auth();
const db = firebase.firestore();