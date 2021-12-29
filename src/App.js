import Navbar from "./components/Navbar/Navbar";
import './App.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";
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
