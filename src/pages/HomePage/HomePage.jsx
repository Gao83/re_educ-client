import { Container, Col, Row, Button } from 'react-bootstrap'
import CarouselCoursesHome from '../../components/CarouselCoursesHome/CarouselCoursesHome'
import { Link } from 'react-router-dom'
import './HomePage.css'



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

            <Link to='/cursos' > <CarouselCoursesHome /></Link>

            <div className="div-home"></div>
            <div className="home-second-box" >
                <Col md={{ span: 6 }} className="home-second-box-col">
                    <img src="./../img/brain_2.png"></img>
                </Col>
                <Col md={{ span: 6 }} className="home-second-box-col-2">
                    <img src="./../img/entrena1.png"></img>
                </Col>

                <Col md={{ span: 6 }} className="home-second-box-col-2">
                    <img src="./../img/entrena2.png"></img>
                </Col>
                <Col md={{ span: 6 }} className="home-second-box-col">
                    <img src="./../img/brain_1.png"></img>
                </Col>

                <Col md={{ span: 6 }} className="home-second-box-col">
                    <img src="./../img/brain3.png"></img>
                </Col>
                <Col md={{ span: 6 }} className="home-second-box-col-2">
                    <img src="./../img/entrena3.png"></img>
                </Col>


            </div>
            <div className="div-home"></div>

        </>
    )
}

export default HomePage