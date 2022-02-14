import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBo9WO_TIH1yT370SB2FrhIlPWe5E9ZA98",

  authDomain: "ecommerce-audiotech.firebaseapp.com",

  projectId: "ecommerce-audiotech",

  storageBucket: "ecommerce-audiotech.appspot.com",

  messagingSenderId: "182608813981",

  appId: "1:182608813981:web:1e233b524a2f95546fd974"

};

  const app=firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app;
  export const getFirestore = () => {return firebase.firestore(app)}; 


  