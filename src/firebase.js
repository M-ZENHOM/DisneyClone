import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQVrJNHaS8yGxipfEvAx_U5WDvzUpsEzg",
  authDomain: "disney-auth-485e5.firebaseapp.com",
  projectId: "disney-auth-485e5",
  storageBucket: "disney-auth-485e5.appspot.com",
  messagingSenderId: "944959059589",
  appId: "1:944959059589:web:01be585235c77e12601bec",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
