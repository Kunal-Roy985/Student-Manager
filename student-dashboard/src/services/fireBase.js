
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC2mTqgjIp5NQCFNTcYO8FQDTHbqPxoSn4",
  authDomain: "student-manager-a4b98.firebaseapp.com",
  projectId: "student-manager-a4b98",
  storageBucket: "student-manager-a4b98.firebasestorage.app",
  messagingSenderId: "888715497723",
  appId: "1:888715497723:web:bc218ca88e1110bd99a05e",
  measurementId: "G-1MDWEK0L3P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


