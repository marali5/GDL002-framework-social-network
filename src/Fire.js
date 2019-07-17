import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBktZlrYIoYc0QZirswQ70GlFldNGshjMI",
    authDomain: "react-redsocial-3ca32.firebaseapp.com",
    databaseURL: "https://react-redsocial-3ca32.firebaseio.com",
    projectId: "react-redsocial-3ca32",
    storageBucket: "react-redsocial-3ca32.appspot.com",
    messagingSenderId: "996459976640",
    appId: "1:996459976640:web:74f93152e1a1f244"
  };
  const fire = firebase.initializeApp(config);
  
  export default fire;
