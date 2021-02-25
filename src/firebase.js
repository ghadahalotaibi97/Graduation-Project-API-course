import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDw0k56sq7Ajl1KIa4P6yRe7uMbEebOBQA",
    authDomain: "app1-8f01f.firebaseapp.com",
    databaseURL: "https://app1-8f01f-default-rtdb.firebaseio.com",
    projectId: "app1-8f01f",
    storageBucket: "app1-8f01f.appspot.com",
    messagingSenderId: "996937349731",
    appId: "1:996937349731:web:566331141fa7d987699656"
};

firebase.initializeApp(firebaseConfig);

export default firebase