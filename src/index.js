import React, {createContext} from 'react';
import {createRoot} from 'react-dom/client';
import {initializeApp} from "firebase/app"
import { getDatabase } from "firebase/database";
import App from './App';
import {getAuth} from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyCkbKLkKSpNvHYODlqM79l6R3xycQBy2Ac",
    authDomain: "level1intership.firebaseapp.com",
    projectId: "level1intership",
    storageBucket: "level1intership.appspot.com",
    messagingSenderId: "447286992029",
    appId: "1:447286992029:web:3a1e669c4d810b794c0874"
})
export const database = getDatabase(app);
export const auth = getAuth(app)
export const Context = createContext(null)

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
      <Context.Provider value={{auth, database}}>
              <App />
      </Context.Provider>,
);

