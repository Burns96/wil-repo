import firebase, { initializeApp }from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDQJlgdIdqOOimEroskll0Lto66ZjlOYuY",
    authDomain: "userlogin-d4d21.firebaseapp.com",
    databaseURL: "https://userlogin-d4d21-default-rtdb.firebaseio.com",
    projectId: "userlogin-d4d21",
    storageBucket: "userlogin-d4d21.appspot.com",
    messagingSenderId: "130246265627",
    appId: "1:130246265627:web:69b119608f7427a0f5e1be",
    measurementId: "G-0MXSPM94MK"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app