import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from 'axios'
import { useState } from "react"
import { Form, Button, Row, Col, Container, Modal } from "react-bootstrap"
import './CheckoutForm.css'
import paymentService from "../../services/payment.service";
import { useNavigate } from "react-router-dom";
import stripeService from "../../services/stripe.service";



const CheckoutForm = ({ _id, price }) => {

    const stripe = useStripe()
    const elements = useElements()
    const [paymentResult, setpaymentResult] = useState('')
    console.log(price)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),

        })


        if (!error) {
            console.log("Stripe 23 | token generated!", paymentMethod);

            try {
                const { id } = paymentMethod;
                const response = await stripeService.checkout(
                    {
                        id: id,
                        amount: price,
                    }

                );

                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful!");

                    paymentService
                        .createPaymentByCourse({ course: _id, amount: price })
                        .then(({ data }) => {
                            console.log('nuevo elemento creado', data)
                            navigate('/perfil')
                        })

                    setpaymentResult(response.data)

                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);

            }
        } else {
            console.log(error.message);
        }
    }
    return (

        <Container>

            <Row className="stripe">
                <Form onSubmit={handleSubmit}>
                    <Row>

                        <Col md={{ span: 5, offset: 1 }}>
                            <div className="card-input">

                                <Form>
                                    <p>Nombre y Apellidos</p>
                                    <input className="input" type="text" />
                                    <hr />
                                </Form>
                                <p>Número de tarjeta de crédito</p>
                                <br />
                                <div>
                                    <CardElement />
                                    <hr />
                                </div>


                            </div>
                        </Col>
                        <Col md={{ span: 5, offset: 1 }}>
                            <div className="paymentCard">
                                <div className="bodyCard">
                                    <h4>Resumen de Pago</h4>
                                    <br />
                                    <p>Precio Original: <span>{price / 100}€</span></p>

                                    <p> Descuento: <span> 0€</span></p>

                                    <p><strong>Total:  <span>{price / 100}€</span></strong></p>
                                    <hr />

                                    <h6>Este curso ofrece</h6>
                                    <ul>
                                        <li>Accesso de por vida</li>
                                        <li>Acceso en dispositivos móviles y TV</li>
                                    </ul>
                                    <Button id="btn-form" type="submit" >
                                        <strong>Comprar</strong>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </Form>
            </Row>


        </Container>

    )
}

export default CheckoutForm