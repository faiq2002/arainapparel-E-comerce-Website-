import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import Info from '../Components/Info/Info'
import { Col, Container,Row } from 'react-bootstrap'
import SideCategory from '../Components/sideCategory/SideCategory'
import BottomCategory from '../Components/BottomCategory/BottomCategory'
import Footer from '../Components/Footer/Footer'
import { useContext } from "react";
import { CartContext } from '../Context/Cart'

export default function OnlineInquiryyStatus() {
  let cartState=useContext(CartContext)

  useEffect(()=>{
    cartState.setCart(null)
  })
  return (
    <>
   <Header/>
   <Info/>
   <Container fluid className="bg-body-tertiary">
        <p className="px-5  py-1 text-secondary ">
          Home / Online Inquiry Status
        </p>
        </Container>
        <Container className='mt-5'>
            <Row>
                <SideCategory/>
                <Col className='col-auto'>
                <h3 className='fw-semibold mb-4'>Oline Inquiry Status</h3>
<p className='text-secondary'>Your inquiry has been submmited.
We will answer of your inquiry within next 2 working days.<br/>
Thank You.........</p>
                </Col>
            </Row>
        </Container>
        <BottomCategory/>
        <Footer/>




</>
  )
}
