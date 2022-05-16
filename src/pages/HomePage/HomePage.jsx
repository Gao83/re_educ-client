import { Container, Col, Row, Button } from 'react-bootstrap'
import CarouselCoursesHome from '../../components/CarouselCoursesHome/CarouselCoursesHome'
import RatingsTeachers from '../../components/RatingsTeacher/RatingsTeacher'
import './HomePage.css'


const HomePage = () => {

    return (
        <>
            <CarouselCoursesHome />
            <Container>
                <RatingsTeachers />
            </Container>
        </>
    )
}

export default HomePage