import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXkyAxY-RBhRdT-Kr70hxu_7VIy9eJPu8",
    authDomain: "euphemia-clothing-db.firebaseapp.com",
    projectId: "euphemia-clothing-db",
    storageBucket: "euphemia-clothing-db.appspot.com",
    messagingSenderId: "473337912950",
    appId: "1:473337912950:web:b7634f9a110c6d39654957"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => 
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); 
    console.log(userSnapshot);
    console.log(userSnapshot.exists()); // this is how we can check if it exists in the database

    // if user data does not 
    //create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date ();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    // if user data exists
    // return userDocRef if exists
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password);
}