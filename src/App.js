import Navbar from "./components/header/Navbar";
import './App.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/router/AppRouter";
import FirebaseState from "./context/firebase/FirebaseState";

function App() {
    return (
        <FirebaseState>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </FirebaseState>
    )
}

export default App;
