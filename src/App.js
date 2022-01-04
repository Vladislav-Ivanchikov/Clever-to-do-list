import Navbar from "./components/Navbar/Navbar";
import './App.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";
import FirebaseState from "./context/firebase/FirebaseState";
import AuthProvider from "./context/auth/AuthContext";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/Alert/Alert";


function App() {
    return (
        <AlertState>
            <AuthProvider>
                <FirebaseState>
                    <BrowserRouter>
                        <Alert/>
                        <Navbar/>
                        <AppRouter/>
                    </BrowserRouter>
                </FirebaseState>
            </AuthProvider>
        </AlertState>
    )
}

export default App;
