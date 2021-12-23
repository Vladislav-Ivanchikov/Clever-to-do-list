import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCkbKLkKSpNvHYODlqM79l6R3xycQBy2Ac",
    authDomain: "level1intership.firebaseapp.com",
    projectId: "level1intership",
    storageBucket: "level1intership.appspot.com",
    messagingSenderId: "447286992029",
    appId: "1:447286992029:web:3a1e669c4d810b794c0874"
})

export const auth = app.auth()
export const Context = createContext(null)


ReactDOM.render(
      <Context.Provider value={{auth}}>
          <App />
      </Context.Provider>,
  document.getElementById('root')
);

