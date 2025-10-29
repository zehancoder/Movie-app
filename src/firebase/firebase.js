import { initializeApp } from "firebase/app";



import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAt0QbpYmIjWsCGiOL_GSGjmmFxk2mcOZE",
  authDomain: "moviehunting-12.firebaseapp.com",
  databaseURL: "https://moviehunting-12-default-rtdb.firebaseio.com",
  projectId: "moviehunting-12",
  storageBucket: "moviehunting-12.firebasestorage.app",
  messagingSenderId: "17081493391",
  appId: "1:17081493391:web:7a1604cc307c85a1c40dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider()

const signUp = async (name, email, password, setSignUpMsg) => {
  
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    setSignUpMsg("Successfuly SignUP")
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    if(error.code === "auth/email-already-in-use"){
      setSignUpMsg("This user is already exist");
    }else{
      setSignUpMsg("Enter valid E-mail or Password")
    }
    
  }
};


const signUpLoginWithGoogle = async (setSignUpMsg) => {
  try {
    await signInWithPopup(auth, googleProvider)
    setSignUpMsg("Google Authentication Success")
  } catch (error) {
    setSignUpMsg("Please try again")
  }
}

const Login = async (email, password,setSignUpMsg) => {
  try {
   
    await signInWithEmailAndPassword(auth, email, password);
    
     setSignUpMsg("Successfuly Login")
  } catch (error) {
    
   setSignUpMsg("Login Failed");
  }
};

const Logout = async () => {
  signOut(auth);
};

export { auth, db, signUp, Login, Logout, signUpLoginWithGoogle };