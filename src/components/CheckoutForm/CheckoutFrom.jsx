import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from 'axios'
import { useState, useEffect } from "react"
import { Form, Button, Row, Col, Container, Modal } from "react-bootstrap"
import './CheckoutForm.css'
import paymentService from "../../services/payment.service";


const CheckoutForm = ({ _id, price }) => {

    const stripe = useStripe()
    const elements = useElements()
    const [paymentResult, setpaymentResult] = useState('')

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
                const response = await axios.post(
                    `http://localhost:3001/stripe/charge`,
                    {
                        amount: price,
                        id: id,
                    }
                );

                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful!");

                    paymentService
                        .createPaymentByCourse({ course: _id, amount: price })
                        .then(({ data }) => {
                            console.log('nuevo elemento creado', data)
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

                    <CardElement />
                    <Button type="submit" >
                        Buy
                    </Button>
                </Form>
            </Row>

        </Container>

    )
}

export default CheckoutForm