import { Routes, Route } from "react-router-dom"
import NewCourse from "../pages/NewCourse/NewCourse"
import HomePage from "../pages/HomePage/HomePage"
import UserSignupPage from "../pages/UserSignupPage/UserSignupPage"
import UserSignupDetailsPage from "../pages/UsersignupDetailsPage/UserSignupDetailsPage"
import UserLoginPage from "../pages/UserLoginPage/UserLoginPage"
import StudentProfile from "../pages/StudentProfile/StudentProfile"
import EditStudentPage from "../pages/EditStudentPage/EditStudentPage"
import CoursePage from "../pages/CoursesPage/CoursesPage"
import CourseDetailsPage from "../pages/CourseDetailsPage/CourseDetailsPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cursos/crear" element={<NewCourse />} />
            <Route path='/registro' element={<UserSignupPage />} />
            <Route path='/registro-detalles' element={<UserSignupDetailsPage />} />
            <Route path='/iniciar-sesion' element={<UserLoginPage />} />
            <Route path='/perfil' element={<StudentProfile />} />  
            <Route path='/perfil/editar/:id' element={<EditStudentPage />} />
            <Route path='/cursos' element={<CoursePage />} />
            <Route path="/cursos/:course_id" element={<CourseDetailsPage />} />

        </Routes>
    )
}

export default AppRoutes