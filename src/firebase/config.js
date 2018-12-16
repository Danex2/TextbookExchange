import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";
import fb from "../firebase";

var config = {
  apiKey: fb.API_KEY,
  authDomain: fb.DOMAIN,
  databaseURL: fb.DB_URL,
  projectId: fb.projectId,
  storageBucket: fb.STORAGE_BKT,
  messagingSenderId: fb.SENDER_ID
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
