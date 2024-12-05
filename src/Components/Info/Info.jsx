import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../Data/Photos/Logo (2).png';
import Image from 'react-bootstrap/Image';
import "./Info.css"
import { Link } from 'react-router-dom';
import whatsapp from "../../Data/Photos/whatsapp.png"

export default function Info() {
  return (

    <Container className='info py-2  '>
    <Row className='d-flex justify-content-between'>
      
      <Col   className=''>
      <Link to={"/"} className='none'>
      <Image src={logo} className='image'  fluid/>
      </Link>

      </Col>

      
     
      <Col   className='d-flex flex-column align-items-center justify-content-end m-auto col-auto'>
      <h1 className='py-0 my-1'>+92-327-9008806</h1>
      <a href='https://wa.me/message/6T74I2A2IUKQP1' target='blank' className='none textHover'>
      <p className='text-primary py-y textHover'><img src={whatsapp } style={{height:20}}  className='img-fluid mx-1' alt="" />  24/7 Customer Support</p>
      </a>
      </Col>

     
     

    
   

    
     
    </Row>
  </Container>
      
    
  )
}
