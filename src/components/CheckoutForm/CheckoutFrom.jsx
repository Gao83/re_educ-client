import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from 'axios'
import { useState, useEffect } from "react"
import { Form, Button, Row, Col, Container, Modal } from "react-bootstrap"


const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),

        })
    }

    return <Form onSubmit={handleSubmit}>
        <CardElement />
        <Button>
            Buy
        </Button>
    </Form>
}

export default CheckoutForm