import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import RegistrationPage from "./Components/Pages/RegistrationPage";
import ProfilePage from "./Components/Pages/ProfilePage";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LoginPage/>} />
                <Route path={'/Register'} element={<RegistrationPage/>} />
                <Route path={'/user'} element={<ProfilePage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
