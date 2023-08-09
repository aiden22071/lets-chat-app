//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCCuOXSmiPU_D0wqnr_BgnwwOERnhN1KD8",
    authDomain: "kwitter-607f7.firebaseapp.com",
    databaseURL: "https://kwitter-607f7-default-rtdb.firebaseio.com",
    projectId: "kwitter-607f7",
    storageBucket: "kwitter-607f7.appspot.com",
    messagingSenderId: "212151050452",
    appId: "1:212151050452:web:1c874902f05a7a3f511b41"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code



//End code
    } });  }); }
getData();