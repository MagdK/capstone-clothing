import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDXkyAxY-RBhRdT-Kr70hxu_7VIy9eJPu8",
    authDomain: "euphemia-clothing-db.firebaseapp.com",
    projectId: "euphemia-clothing-db",
    storageBucket: "euphemia-clothing-db.appspot.com",
    messagingSenderId: "473337912950",
    appId: "1:473337912950:web:b7634f9a110c6d39654957"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);