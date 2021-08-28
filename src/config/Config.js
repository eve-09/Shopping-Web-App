import {firebase} from "@firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyALtYUm7S_FtgrzGIyTeO1d8jT7k9JgQ28",
    authDomain: "shopping-app-4c4ca.firebaseapp.com",
    projectId: "shopping-app-4c4ca",
    storageBucket: "shopping-app-4c4ca.appspot.com",
    messagingSenderId: "138788630077",
    appId: "1:138788630077:web:97d02a69ee73a4508ac454",
    measurementId: "G-1ZP3V12MQ9"
  };

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true});
// const auth = firebase.auth();
// const storage = firebase.storage();

// eslint-disable-next-line import/no-anonymous-default-export
export default db;
