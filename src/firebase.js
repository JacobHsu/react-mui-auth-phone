import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtSbUgaWYse0OKoSa3HTMt-P-sOoGdPUs",
  authDomain: "test-firebase-2e72e.firebaseapp.com",
  databaseURL: "https://test-firebase-2e72e.firebaseio.com",
  projectId: "test-firebase-2e72e",
  storageBucket: "test-firebase-2e72e.appspot.com",
  messagingSenderId: "606893224220",
  appId: "1:606893224220:web:d051642611ae4e256c4ad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
