//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAB6AaAAeXnXgyJIVXvp3WloBTiDqDDG3c",
    authDomain: "let-s-chat-web-app-8683d.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-8683d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-8683d",
    storageBucket: "let-s-chat-web-app-8683d.appspot.com",
    messagingSenderId: "199874264146",
    appId: "1:199874264146:web:a26076e59c1a0a9d30338b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
