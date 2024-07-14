// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvfSVhTsk0bGt8WY_MPt5_WrdU5pfIgCs",
  authDomain: "car-doctor-client-a1fbd.firebaseapp.com",
  projectId: "car-doctor-client-a1fbd",
  storageBucket: "car-doctor-client-a1fbd.appspot.com",
  messagingSenderId: "443435886741",
  appId: "1:443435886741:web:bc49e327082c27dd4c539c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;