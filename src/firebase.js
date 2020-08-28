import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1qWOF6dmw5DB5laGTPxD9xs_micJJxNk",
  authDomain: "facebook-clone-84512.firebaseapp.com",
  databaseURL: "https://facebook-clone-84512.firebaseio.com",
  projectId: "facebook-clone-84512",
  storageBucket: "facebook-clone-84512.appspot.com",
  messagingSenderId: "37511340947",
  appId: "1:37511340947:web:980714233c15ad72a07e66",
  measurementId: "G-WBGLTZXEWD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth =firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;