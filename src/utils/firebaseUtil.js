import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
} from "firebase/firestore";

// Firebase Config Object
const firebaseConfig = {
  apiKey: "AIzaSyAE4UQTXv6FSTPwxYIxDP-pZSIMj8L6ncw",
  authDomain: "socialdev-1adc1.firebaseapp.com",
  projectId: "socialdev-1adc1",
  storageBucket: "socialdev-1adc1.appspot.com",
  messagingSenderId: "1020280954436",
  appId: "1:1020280954436:web:9e8d188a2c715ce9222611",
  measurementId: "G-0M1QD0MRC4"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

// Google Auth
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

// Google Sign In
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

// Add Initial Collections and Documents
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(db, collectionKey);

//   const batch = writeBatch(db);
//   objectsToAdd.forEach(obj => {
//     const newDocRef = doc(collectionRef, obj.title.toLowerCase());
//     batch.set(newDocRef, obj);
//   });

//   await batch.commit();
//   console.log('Collection and Documents added successfully!');
// };

// Get Documents from Firestore
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};
// Create User Profile Document
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

// Create User Profile with Email and Password
export const createUserEmailPassword = async (email, password) => {
  if (!email || !password) return;

  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return createUserDocumentFromAuth(user);
}

// Sign In with Email and Password
export const signInUserEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

// Sign Out
export const signOutUser = async () => await signOut(auth);

// Watch Auth State
export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);