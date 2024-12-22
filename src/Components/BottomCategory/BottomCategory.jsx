import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./BottomCategory.css"

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function BottomCategory({name}) {
  return (
    <>
<Container className='px-4 d-lg-none   d-sm-block d-md-block mt-5'>
<Accordion className=''>
      <Accordion.Item  eventKey="0" className='bg-body-tertiary'>
        <Accordion.Header  className=''><h5 className=' '>Category</h5></Accordion.Header>
        <Accordion.Body>
        <ul className='none'>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='bg-body-tertiary'>
        <Accordion.Header><h5 className=' '>Site Links</h5></Accordion.Header>
        <Accordion.Body>
        <ul className='none'>
        <Link to={"/About"} className='none' >
            <li className={`list-group-item cursor  navlink py-1   ${name==="About"?"fw-semi-bold active":" fw-light text-secondary"}`} onClick={()=>window.scrollTo(0,0)}>About Us</li>
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
   
    </>
 
  )
}
