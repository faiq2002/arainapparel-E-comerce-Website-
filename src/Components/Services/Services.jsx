import React from 'react'
import "./Services.css"
import { Col, Container, Row } from 'react-bootstrap'
import delivery from "../../Data/Photos/delivery.png"
import lock from "../../Data/Photos/lock.png"
import arrow from "../../Data/Photos/arrow.png"
import headphone from "../../Data/Photos/headphone.png"

export default function Services() {
  return (
    <Container fluid className='mt-5'>
        <Row>
        <Col className='col-12 col-lg-3 col-md-6 cursor boldfontsize'>
        <Row>
            <Col className='col-auto col-lg-3'>
              <img src={delivery} style={{height:"3rem"}}  className='img-fluid' alt="" />
            </Col >

            <Col className=''>
            <bold className="text-primary boldfontsize fw-bold text-dark">FAST SHIPPING</bold>
            <p className='fw-light text-secondary fontsize'>Fast Shipping" detail="Cost Effective and Time Sensetive International Shipping Via DHL, FedEX, UPS, EMS and DPEX Express</p>
            </Col>
        </Row>
    </Col>

    <Col className='col-12 col-lg-3 col-md-6 cursor boldfontsize'>
        <Row>
            <Col className='col-auto '>
              <img src={headphone} style={{height:"3rem"}}  className='img-fluid' alt="" />
            </Col >

            <Col className=''>
            <bold className="text-primary boldfontsize fw-bold text-dark">24/7 SUPPORT</bold>
            
            <p className='fw-light text-secondary fontsize'>Feel Free to Contact Us 24/7 via <strong>email:</strong> araiapparel@gmail.com or <strong>WhatsApp:</strong> +92-327-9008806</p>
            </Col>
        </Row>
    </Col>

    <Col className='col-12 col-lg-3 col-md-6 cursor boldfontsize'>
        <Row>
            <Col className='col-auto'>
              <img src={arrow} style={{height:"3rem"}} className='img-fluid' alt="" />
            </Col >

            <Col className=''>
            <bold className="text-primary  text-dark boldfontsize fw-bold ">FULL CUSTOMIZED SAMPLES</bold>
            <p className='fw-light text-secondary fontsize'>We Will Ship Your Fully Customized Samples With in 7 Working Days</p>
            </Col>
        </Row>
    </Col>

    <Col className='col-12 col-lg-3 col-md-6 cursor boldfontsize'>
        <Row>
            <Col className='col-auto'>
              <img src={lock}  style={{height:"3rem"}} className='img-fluid' alt="" />
            </Col >

            <Col className=''>
            <bold className="text-primary boldfontsize fw-bold text-dark">100% SECURE PAYMENTS</bold>
            <p className='fw-light text-secondary fontsize'>We Use Secure Payment Methods Like Xoom, Paypal, Western Union &amp; Bank Wire Transfers</p>
            </Col>
        </Row>
    </Col>
        </Row>
    </Container>
  )
}
