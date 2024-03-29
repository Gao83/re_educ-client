import { Routes, Route } from "react-router-dom"
import NewCourse from "../pages/NewCourse/NewCourse"
import HomePage from "../pages/HomePage/HomePage"
import UserSignupPage from "../pages/UserSignupPage/UserSignupPage"
import UserSignupDetailsPage from "../pages/UsersignupDetailsPage/UserSignupDetailsPage"
import UserLoginPage from "../pages/UserLoginPage/UserLoginPage"
import Profile from "../pages/Profile/Profile"
import EditStudentPage from "../pages/EditStudentPage/EditStudentPage"
import CoursePage from "../pages/CoursesPage/CoursesPage"
import CourseDetailsPage from "../pages/CourseDetailsPage/CourseDetailsPage"
import CoursesFilteredByCategory from "../pages/CoursesFilteredByCategory/CoursesFilteredByCategory"
import TeacherProfile from "../pages/TeacherProfile/TeacherProfile"
import CourseMedia from "../pages/CourseMedia/CourseMedia"
import StripeContainer from "../components/StripeContainer/StripeContainer"
import CourseSearchFilter from "../pages/CourseSearchFilter/CourseSearchFilter"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cursos/crear" element={<NewCourse />} />
            <Route path='/registro' element={<UserSignupPage />} />
            <Route path='/registro-detalles' element={<UserSignupDetailsPage />} />
            <Route path='/iniciar-sesion' element={<UserLoginPage />} />
            <Route path='/perfil' element={<Profile />} />
            <Route path='/perfil/editar/:id' element={<EditStudentPage />} />
            <Route path='/cursos' element={<CoursePage />} />
            <Route path="/cursos/:course_id" element={<CourseDetailsPage />} />
            <Route path="/cursos/:course_id/media" element={<CourseMedia />} />
            <Route path="/cursos/filtro/:category" element={<CoursesFilteredByCategory />} />
            <Route path='/:course_id/stripe' element={<StripeContainer />} />
            <Route path='/perfil/:id' element={<TeacherProfile />} />
            <Route path='/:notes_id/delete' element={<TeacherProfile />} />
            <Route path='/search' element={<CourseSearchFilter />} />

        </Routes>
    )
}

export default AppRoutes