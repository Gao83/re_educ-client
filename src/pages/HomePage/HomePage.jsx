import { Container, Col, Row, Button } from 'react-bootstrap'
import CarouselCoursesHome from '../../components/CarouselCoursesHome/CarouselCoursesHome'
import Hero from '../../components/Hero/Hero'
import RatingsTeachers from '../../components/RatingsTeacher/RatingsTeacher'

const HomePage = () => {

    return (
        <>
            <Container>
                <Hero />
            </Container>
            <Container>
                <CarouselCoursesHome />
            </Container>
            <Container>
                <RatingsTeachers/>
            </Container>
        </>
    )
}

export default HomePage