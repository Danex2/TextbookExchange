import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BKT,
  messagingSenderId: process.env.SENDER_ID
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
