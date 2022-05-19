import { Button } from "react-bootstrap"
import "./CardOneCourse.css"
import { Link } from 'react-router-dom'


const CardOneCourse = ({ _id, courseImg, price, duration }) => {

const realPrice = price/100
    
    return (

        <div className="cardText" >

            <img src={courseImg} alt="imagen de curso" />
            <div className="bodyCard">
                <h2>{realPrice}€</h2>
                <hr />
                <Link to={`/${_id}/stripe`}>
                    <Button className="btn-dark" id="btn-buy">Comprar Curso</Button>
                </Link>
                <h6>Este curso ofrece</h6>
                <ul>
                    <li>{duration}</li>
                    <li>Accesso de por vida</li>
                    <li>Acceso en dispositivos móviles y TV</li>
                </ul>
            </div>

        </div>

    )

}
export default CardOneCourse