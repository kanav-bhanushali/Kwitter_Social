var firebaseConfig = {
      apiKey: "AIzaSyBX-1KoJrkCrfj61MI1PdF0_r6OIO539rk",
      authDomain: "real-kwitter-d7488.firebaseapp.com",
      databaseURL: "https://real-kwitter-d7488-default-rtdb.firebaseio.com",
      projectId: "real-kwitter-d7488",
      storageBucket: "real-kwitter-d7488.appspot.com",
      messagingSenderId: "786265199432",
      appId: "1:786265199432:web:725ec3763ca1c415e7997d",
      measurementId: "G-K0VR4T8TSY"
    };
    
    
   firebase.initializeApp(firebaseConfig);
   
   var user_name=localStorage.getItem("user_name");
   var room_name=localStorage.getItem("room_name");

   function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
u_name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
