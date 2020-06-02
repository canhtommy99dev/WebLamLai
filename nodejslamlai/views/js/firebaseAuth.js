var firebaseConfig = {
    apiKey: "AIzaSyAZv4pJi5HHFHet61Jmmln9hxALCJDv_ec",
    authDomain: "mongcaifoodymcbyfanpage.firebaseapp.com",
    databaseURL: "https://mongcaifoodymcbyfanpage.firebaseio.com",
    projectId: "mongcaifoodymcbyfanpage",
    storageBucket: "mongcaifoodymcbyfanpage.appspot.com",
    messagingSenderId: "122111426704",
    appId: "1:122111426704:web:aa93b3749dab5a0e46d815",
    measurementId: "G-D2PGHB125N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });

  function appmmm(){
    alert("Hello! I am an alert box!");
  }
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  
  