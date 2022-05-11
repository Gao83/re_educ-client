import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import UserSignupPage from "../pages/UserSignupPage"
import UserLoginPage from "../pages/UserLoginPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/registro' element={<UserSignupPage />} />
            <Route path='/iniciar-sesion' element={<UserLoginPage />} />
        </Routes>
    )
}

export default AppRoutes