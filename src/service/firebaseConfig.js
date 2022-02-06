// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9fCkueU82IMNIgjeAJvvXSUqakiYXfNI",
    authDomain: "her-and-she.firebaseapp.com",
    projectId: "her-and-she",
    storageBucket: "her-and-she.appspot.com",
    messagingSenderId: "33089185454",
    appId: "1:33089185454:web:aee4d3ecccabd0a8eb2f3f"
};

//Passing the firebase config data into the initializeApp.auth function and exporting it
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Google sign in function
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


//Logout function
const logout = () => {
    signOut(auth);
};

export { app, auth, googleProvider, signInWithGoogle, logout };