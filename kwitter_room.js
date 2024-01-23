
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDcjHKmAagsscduNxsGRXL7qZRlKGSzhUw",
      authDomain: "project2-2339e.firebaseapp.com",
      databaseURL: "https://project2-2339e-default-rtdb.firebaseio.com",
      projectId: "project2-2339e",
      storageBucket: "project2-2339e.appspot.com",
      messagingSenderId: "950591981908",
      appId: "1:950591981908:web:0a6fee4f1e900e2abda0c1",
      measurementId: "G-NKTMHTT8Z1"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
