
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmTBB1KIWN0Nzdx2O0nkZxpahFNW_ch88",
  authDomain: "kwitter-3a794.firebaseapp.com",
  projectId: "kwitter-3a794",
  storageBucket: "kwitter-3a794.appspot.com",
  messagingSenderId: "779311559344",
  appId: "1:779311559344:web:090c654a5c250b30d90175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
