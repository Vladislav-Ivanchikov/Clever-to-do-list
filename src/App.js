import Navbar from "./components/header/Navbar";
import './App.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/router/AppRouter";
import FirebaseState from "./context/firebase/FirebaseState";
import AuthProvider from "./context/auth/AuthContext";

function App() {
    return (
        <AuthProvider>
            <FirebaseState>
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                </BrowserRouter>
            </FirebaseState>
        </AuthProvider>
    )
}

export default App;
