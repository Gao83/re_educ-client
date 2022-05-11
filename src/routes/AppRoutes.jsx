import { Routes, Route } from "react-router-dom"
import NewCourse from "../pages/NewCourse/NewCourse"
import HomePage from "../pages/HomePage"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/cursos/crear" element={<NewCourse />} />



        </Routes>
    )
}

export default AppRoutes