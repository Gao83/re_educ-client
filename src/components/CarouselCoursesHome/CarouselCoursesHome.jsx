import { Col, Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import coursesService from '../../services/courses.service'
import './CarouselCoursesHome.css'
import CourseCard from '../CourseCard/CourseCard'

const CarouselCoursesHome = () => {



    return (
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
    )

}

export default CarouselCoursesHome
