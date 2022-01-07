import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat";
import { getDatabase } from "firebase/database";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const database = getDatabase();
export const auth = app.auth()
export const Context = createContext(null)

ReactDOM.render(
      <Context.Provider value={{auth, database}}>
              <App />
      </Context.Provider>,
  document.getElementById('root')
);

