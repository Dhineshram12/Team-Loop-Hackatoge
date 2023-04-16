import firebase from 'firebase/compat/app';
const firebaseConfig = {
  apiKey: "AIzaSyC-0m1m3KBasWkNchXkUQIj7A9i9oPyUp0",
  authDomain: "food-app-43427.firebaseapp.com",
  projectId: "food-app-43427",
  storageBucket: "food-app-43427.appspot.com",
  messagingSenderId: "552582482348",
  appId: "1:552582482348:web:14f774960bbf40154a1209"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
