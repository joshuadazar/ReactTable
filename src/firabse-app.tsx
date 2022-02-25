import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

 export const app =  firebase.initializeApp({
    "projectId": "reactdatatable",
    "appId": "1:949051954393:web:8a1eaec847930858a59ac8",
    "storageBucket": "reactdatatable.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDVGkZLSlrbGh4UKQ6r7NDdk8mPY3cbhlE",
    "authDomain": "reactdatatable.firebaseapp.com",
    "messagingSenderId": "949051954393"
  });
