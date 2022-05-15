import firebase from "firebase";
import { firebaseConfig } from "./config";

export  const app = firebase.initializeApp(firebaseConfig);