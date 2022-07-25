import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJe89DwjUIWMp3-B8TC52rTabMy3BR-Kk",
  authDomain: "community-c8155.firebaseapp.com",
  projectId: "community-c8155",
  storageBucket: "community-c8155.appspot.com",
  messagingSenderId: "496724906424",
  appId: "1:496724906424:web:cc5ccc9686344363d5bf4d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;


