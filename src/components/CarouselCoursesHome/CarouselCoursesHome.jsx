import { Col, Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import coursesService from '../../services/courses.service'
import './CarouselCoursesHome.css'
import CourseCard from '../CourseCard/CourseCard'

const CarouselCoursesHome = () => {

    // const [course, setAllCourses] = useState([])
    // useEffect(() => loadCourses(), [])

    // const loadCourses = () => {
    //     coursesService
    //         .getAllCourses()
    //         .then(({ data }) => {
    //             setAllCourses(data)
    //         })
    //         .then(err => console.log(err))
    // }

    return (
        // <Container className="carousel-container-home">
        //     <h1>CAROUSEL COURSES</h1>
        // </Container>

        <Carousel variant="dark">
            <Carousel.Item className="carousel-item">
                <img src="../../../../img/carousel_5.png"></img>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img src="../../../../img/carousel_6.png"></img>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img src="../../../../img/carousel_7.png"></img>
            </Carousel.Item>

        </Carousel>



        // <Carousel variant="dark">
        //     <Carousel.Item className="carousel-item">

        //         <CourseCard {...course} />

        //         <Carousel.Caption>
        //             <h5>{course.title}</h5>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item className="carousel-item">

        //         <CourseCard {...course} />

        //         <Carousel.Caption>
        //             <h5>{course.title}</h5>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item className="carousel-item">

        //         <CourseCard {...course} />

        //         <Carousel.Caption>
        //             <h5>{course.title}</h5>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
    )

}

export default CarouselCoursesHome
