import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import RegistrationPage from "./Components/Pages/RegistrationPage";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LoginPage/>} />
                <Route path={'/Register'} element={<RegistrationPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
