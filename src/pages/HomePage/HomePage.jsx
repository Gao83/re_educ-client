import { Container, Col, Row, Button } from 'react-bootstrap'
import CarouselCoursesHome from '../../components/CarouselCoursesHome/CarouselCoursesHome'
import './HomePage.css'
import CourseCard from '../../components/CourseCard/CourseCard'



const HomePage = () => {

    return (
        <>

            <div className="box-home">
                <Container>
                    <Row>
                        <Col md={{ span: 6 }} className="col-box-home">
                            <img src='./../img/cursos.png'></img>
                        </Col>
                        <Col md={{ span: 6 }} className="col-box-home-2">
                            <img src='./../img/re_educ_oc.gif'></img>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="div-home"></div>
            <CarouselCoursesHome />
            <div className="div-home"></div>

        </>
    )
}

export default HomePage