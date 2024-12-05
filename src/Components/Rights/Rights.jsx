import React from 'react'
import { Container,Row ,Col } from 'react-bootstrap'

import paypal from"../../Data/Photos/paypal (1).png";
import visa from"../../Data/Photos/visa.png";
import mastercard from "../../Data/Photos/mastercard.png"
import discover from "../../Data/Photos/icons8-discover-card-240.png"
import americanexpress from "../../Data/Photos/american-express.png"
import strip from "../../Data/Photos/strip1.png";
import { Link } from 'react-router-dom';

export default function Rights() {
  return (
    <Container fluid className='py-5 py-lg-4 d-flex justify-content-end'>
      <Row className='d-flex d-flex justify-content-end '>
        <Col className="col-lg-5  col-12    ">
        <p className='text-center text-secondary fw-light'>Copyright <span>&copy;</span> 2024-2026 <strong>Arain Apparel</strong> All Right Reserved. </p>
        </Col>
        <Col className='d-none d-lg-block col-3'>
        </Col>

        <Col className=" col-lg-4 col-md-8 col-10 m-auto ">
        <Link to={"/payment&ShippingMethods" }className="none" onClick={()=>window.scrollTo(0,0)} >
        <Row className=''>
          
          <Col className='col-2 '  >
          <img src={visa} className='img-fluid card cursor m-auto'  alt="" />
          </Col>

          <Col className='col-2 '  >
          <img src={paypal} className='img-fluid card cursor m-auto'  alt="" />
          </Col>

          <Col className='col-2 '  >
          <img src={mastercard} className='img-fluid card cursor m-auto'  alt="" />
          </Col>

          <Col className='col-2 '  >
          <img src={discover} className='img-fluid card cursor m-auto'  alt="" />
          </Col>

          <Col className='col-2 '  >
          <img src={americanexpress} className='img-fluid card cursor m-auto'  alt="" />
          </Col>

          <Col className='col-2 '  >
          <img src={strip} className='img-fluid card cursor m-auto'  alt="" />
          </Col>
        
        </Row>
        </Link>
        </Col>
      </Row>
        
    </Container>
  )
}
