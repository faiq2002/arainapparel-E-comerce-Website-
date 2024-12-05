import React from 'react'
import Header from '../Components/Header/Header'
import Info from '../Components/Info/Info'
import BottomCategory from '../Components/BottomCategory/BottomCategory'
import Footer from '../Components/Footer/Footer'
import Rights from '../Components/Rights/Rights'
import { Container,Col,Row } from 'react-bootstrap'
import SideCategory from '../Components/sideCategory/SideCategory'
import paymentandshippingmethods  from"../Data/Photos/paymentAndShippung.jpg";

export default function PaymentAndShipping() {
  return (
    <>
    <Header  />
    <Info/>
    <Container fluid className="bg-body-tertiary">
      <Container>
      <p className="  py-1 text-secondary ">
          Home / Payment & Shipping Methods
        </p>
      </Container>
      </Container>
      
      <Container className='mt-5 '>
        <Row>
            <SideCategory/>
            <Col className='col-12 col-lg-9 text-secondary'>
            <h3 className='fw-semibold mb-5 text-dark'>Payment & Shipping Methods</h3>
            <Col className='col-auto mt-4'>
            <img src={paymentandshippingmethods} className='img-fluid' alt="" />
            </Col>
           
            </Col>

           
        </Row>
      </Container>

    <BottomCategory name="Shipping&PaymentMethod"/>
    <Footer name="Shipping&PaymentMethod"/>
    <Rights/>

    </>  )
}


