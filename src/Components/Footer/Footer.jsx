import React from 'react'
import { Container,Col ,Row } from 'react-bootstrap'
import paypal from "../../Data/Photos/paypal.png"
import Western_union from "../../Data/Photos/western-union.png"
import bank_transfer from "../../Data/Photos/BankTransfer.png"
import moneygram from "../../Data/Photos/moneygram.png"
import { Link } from 'react-router-dom'


export default function Footer({name}) {
  return (
    <Container fluid className='margin-top py-5 bg-body-tertiary d-none d-lg-block '>
        <Row className='d-flex  gap-5'>
            <Col className='col-lg-auto  col-md-auto col-auto'>
            <ul className=''>
                <span className=' fs-5 '>Categories</span>
                <Link to={"/Men"} className='none'>
            <li className='list-group-item cursor mt-3 navlink py-1  fw-light text-secondary'onClick={()=>window.scrollTo(0,0)}>Men </li>
            </Link>

             <Link to={"/Women"} className='none'> 
                <li className='list-group-item cursor navlink py-1  fw-light text-secondary'onClick={()=>window.scrollTo(0,0)}>Women </li>
                </Link>

                <Link to={"/Sports-Wear"} className='none'>
                <li className='list-group-item cursor navlink py-1  fw-light text-secondary'onClick={()=>window.scrollTo(0,0)}>Sports-Wear </li>
                </Link>

                <Link to={"/Jackets"} className='none'>
                <li className='list-group-item cursor navlink py-1  fw-light text-secondary'onClick={()=>window.scrollTo(0,0)}>Jackets</li>
                </Link>
            </ul>

            </Col>

            <Col>
            
            <ul className='col-lg-auto col-md-auto col-auto'>
            
            
            <span className=' fs-5 '> Site Links</span>
            <Link to={"/About"} className='none' >
            <li className={`list-group-item cursor mt-3 navlink py-1   ${name==="About"?"fw-semi-bold active":" fw-light text-secondary"}`} onClick={()=>window.scrollTo(0,0)}>About Us</li>
                </Link>

                <Link to={"/Faq,s"} className='none'>
                <li   className={`list-group-item cursor  navlink py-1   ${name==="Faq,s"?"fw-semi-bold active":" fw-light text-secondary"}`}onClick={()=>window.scrollTo(0,0)}>FAQ,s</li>
                </Link>

                <Link to={"/Payment&ShippingMethods"} className='none'>
                <li  className={`list-group-item cursor  navlink py-1   ${name==="Shipping&PaymentMethod"?"fw-semi-bold active":" fw-light text-secondary"}`}onClick={()=>window.scrollTo(0,0)}>Shipping & Payment Methods</li>
                </Link>
                <Link to={"/PrivacyPolicy"} className='none
                '>
                <li  className={`list-group-item cursor  navlink py-1   ${name==="PrivacyPolicy"?"fw-semi-bold active":" fw-light text-secondary"}`}onClick={()=>window.scrollTo(0,0)}>Privacy Policy</li>
                </Link>
                <Link to={"/Contact"} className='none'>
                <li className={`list-group-item cursor  navlink py-1   ${name==="Contact"?"fw-semi-bold active":" fw-light text-secondary"}`}onClick={()=>window.scrollTo(0,0)}>Contact US</li>
                </Link>
            </ul>
            </Col>
            <Col className='d-none d-lg-block d-md-block  '>
            <span className=' fs-5 '>Payment Methods</span>
            <Row className='mt-3 gy-2'>
              
              <Col className=' '>
<img src={bank_transfer} className='img-fluid'  alt="" />
              </Col>
              <Col className='col-6  '>
<img src={paypal} className='img-fluid'   alt="" />
              </Col>
              <Col className='col-6  '>
<img src={Western_union} className='img-fluid'  alt="" />
              </Col>
              <Col className='col-6 '>
<img src={moneygram} className='img-fluid' alt="" />
              </Col>
            </Row>
            </Col>

           
            
        </Row>
       

       
    </Container>
  )
}
