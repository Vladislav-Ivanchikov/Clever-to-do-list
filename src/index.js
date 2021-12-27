import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getDatabase } from "firebase/database";
import app from "./api/FirebaseInit";


export const database = getDatabase();
export const auth = app.auth()
export const Context = createContext(null)


ReactDOM.render(
      <Context.Provider value={{auth, database}}>
              <App />
      </Context.Provider>,
  document.getElementById('root')
);

