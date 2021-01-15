import Rebase from "re-base";
import firebase from 'firebase/app';
import 'firebase/database'


// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCpGZBbDf3qZAc1fZtYSkbgpV5cR-jxtOw",
//     authDomain: "chatbox-app-e5f28.firebaseapp.com",
//     databaseURL: "https://chatbox-app-e5f28-default-rtdb.firebaseio.com",
// })

// const base = Rebase.createClass(firebase.database())

// export { App }

// export default base

const app = firebase.initializeApp({
    apiKey: "AIzaSyCpGZBbDf3qZAc1fZtYSkbgpV5cR-jxtOw",
    authDomain: "chatbox-app-e5f28.firebaseapp.com",
    databaseURL: "https://chatbox-app-e5f28-default-rtdb.firebaseio.com",
    projectId: "chatbox-app-e5f28",
    storageBucket: "chatbox-app-e5f28.appspot.com",
    messagingSenderId: "278006208388",
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export { app }

export default base

// export default {
//     apiKey: "AIzaSyCpGZBbDf3qZAc1fZtYSkbgpV5cR-jxtOw",
//     authDomain: "chatbox-app-e5f28.firebaseapp.com",
//     databaseURL: "https://chatbox-app-e5f28-default-rtdb.firebaseio.com",
// }