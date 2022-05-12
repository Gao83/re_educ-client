import { Routes, Route } from "react-router-dom"
import NewCourse from "../pages/NewCourse/NewCourse"
import HomePage from "../pages/HomePage/HomePage"
import UserSignupPage from "../pages/UserSignupPage/UserSignupPage"
import UserSignupDetailsPage from "../pages/UsersignupDetailsPage/UserSignupDetailsPage"
import UserLoginPage from "../pages/UserLoginPage/UserLoginPage"
import StudentProfile from "../pages/StudentProfile/StudentProfile"
<<<<<<< HEAD
import CoursePage from "../pages/CoursesPage/CoursePage"
import Ratings from "../pages/RatingsPage/ratings.page"
=======
import CoursePage from "../pages/CoursesPage/CoursesPage"
import CourseDetailsPage from "../pages/CourseDetailsPage/CourseDetailsPage"
>>>>>>> f6c32494a3a8b400a3f59df1e42f02d9d77cdf62


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cursos/crear" element={<NewCourse />} />
            <Route path='/registro' element={<UserSignupPage />} />
            <Route path='/registro-detalles' element={<UserSignupDetailsPage />} />
            <Route path='/iniciar-sesion' element={<UserLoginPage />} />
            <Route path='/perfil' element={<StudentProfile/>}/>  
            <Route path='/cursos' element={<CoursePage />} />
<<<<<<< HEAD
            <Route path='/ratings' element={<Ratings />} />


=======
            <Route path="/cursos/:course_id" element={<CourseDetailsPage />} />
>>>>>>> f6c32494a3a8b400a3f59df1e42f02d9d77cdf62

        </Routes>
    )
}

export default AppRoutes