import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyDuRRWqVMoTBV0kvRly9TMw24uBUWji0XU",
   authDomain: "opportunet-33088.firebaseapp.com",
   projectId: "opportunet-33088",
   storageBucket: "opportunet-33088.appspot.com",
   messagingSenderId: "16557109111",
   appId: "1:16557109111:web:755b510f36870ae564bb72"
 };

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
