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
 
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user_name=localStorage.getItem("user_name");
document.getElementById("User_Name").innerHTML="Welcome "+user_name;

function Add_Room(){
   room_name=document.getElementById("room_name").value;  
   firebase.database().ref("/").child(room_name).update({
         });

     localStorage.setItem("room_name",room_name);
     
     window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name-"+room_name);
      row="<div clas='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_Names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();
  

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location="kwitter_page.html";
}