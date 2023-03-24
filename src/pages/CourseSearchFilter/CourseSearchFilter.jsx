import { Container, Row, Card, Col } from "react-bootstrap"
import coursesService from "../../services/courses.service"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import CourseCard from "../../components/CourseCard/CourseCard"
import Loader from "../../components/Loader/Loader"
import '../CoursesFilteredByCategory/CoursesFilteredByCategory.css'




const CourseSearchFilter = () => {

    const location = useLocation();
    const searchParms = new URLSearchParams(location.search);
    const query = searchParms.get('q')

    const [searchFilterCourses, SetSearchFilterCourses] = useState([])

    useEffect(() => loadCoursesSearcFilter(), [query]
    )


    const loadCoursesSearcFilter = () => {
        coursesService
            .filterBySearch(query)
            .then(({ data }) => {
                SetSearchFilterCourses(data)
            })
            .catch(err => console.log(err))
    }

    return (
        searchFilterCourses
            ?
            <Container className="container-category-courses">

                {
                    searchFilterCourses.length === 0 ?
                        <h3 className="result_search">No existen resultados</h3> :
                        <h3 className="result_search">Resultado de búsqueda</h3>
         
               } 


                {
                    searchFilterCourses.map(courses => {
                        return (
                            <Col>
                                <>
                                    <CourseCard {...courses} />
                                    <hr></hr>
                                    <br></br>
                                </>
                            </Col>
                        )
                    })
                }

            </Container>
            :
            <Loader />

    )
}
export default CourseSearchFilter