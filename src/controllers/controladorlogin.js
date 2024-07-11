
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAaUMbSKxQif8zI4fIq-S-4gGHK_EWexog",
    authDomain: "loginsuradualafhr.firebaseapp.com",
    projectId: "loginsuradualafhr",
    storageBucket: "loginsuradualafhr.appspot.com",
    messagingSenderId: "64939587338",
    appId: "1:64939587338:web:af5a5fb72d868a72506cf3",
    measurementId: "G-L910KV24YE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app)
  const analytics = getAnalytics(app);
// rutina para detectar clic en el boton de google
let botonLogin=document.getElementById("ingresoGmail")

botonLogin.addEventListener("click",function(){
    const auth = getAuth();
    const provider=new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location.href="../../index.html"
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage)
  });
})