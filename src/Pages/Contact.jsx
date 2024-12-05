import React from 'react'
import Header from '../Components/Header/Header'
import Info from '../Components/Info/Info'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Components/Footer/Footer'
import BottomCategory from '../Components/BottomCategory/BottomCategory'
import SideCategory from '../Components/sideCategory/SideCategory'
import Rights from '../Components/Rights/Rights'

export default function Contact() {
  return (
   <>
   <Header name="contact"/>
   <Info/>
   <Container fluid className="bg-body-tertiary">
       <Container>
       <p className="  py-1 text-secondary ">
          Home / Contact Us
        </p>
       </Container>
      </Container>
    
    <Container className=' mt-5'>
        <Row>
            <SideCategory/>
            <Col className='col-lg-4 col-5 '>
            <h3 className='fw-semibold mb-4'>Contact Us</h3>
            <strong className='d-block mt-3  text-secondary '>Address:</strong>
            <span className='d-block text-secondary '>Arain Apparel, Factory Area Near Gol Canteen </span>
            <span className='d-lock text-secondary'>Sialkot 5310 Pakistan</span>

            <strong className='d-block mt-3  text-secondary '>Email:</strong>
            <span className='d-block text-secondary cursor navlink '>arainapparel@gmail.com</span>

            <strong className='d-block mt-3  text-secondary '>WhatsApp:</strong>
            <span className='d-block text-secondary '>+92-327-9008806</span>

            <strong className='d-block mt-3  text-secondary '>Instagram:</strong>
            <span className='d-block text-secondary'>arain-apparel</span>

            </Col>
            <Col className='col-lg-5 col-7'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.4725628069923!2d74.51371267395211!3d32.48679649876409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eebfa74c2e0cf%3A0xf20a69450b41fa89!2sGol%20Canteen%2C%20S.I.E.%20Skt!5e0!3m2!1sen!2s!4v1732194213803!5m2!1sen!2s" className='map' allowfullscreen="" loading="lazy" title='map' referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>

           
        </Row>
    </Container>
    <BottomCategory name="Contact" />
    
    <Footer name="Contact"/>
    <Rights/>
    </>
  )
}
