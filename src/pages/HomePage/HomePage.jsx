import { Container, Col, Row, Button } from 'react-bootstrap'
import CarouselCoursesHome from '../../components/CarouselCoursesHome/CarouselCoursesHome'
import Hero from '../../components/Hero/Hero'
// import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <>
            <Container>
                <Hero />
            </Container>
            <Container>
                <CarouselCoursesHome />
            </Container>
        </>
    )
}

export default HomePage