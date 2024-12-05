import React from 'react'
import Header from '../Components/Header/Header'
import Info from '../Components/Info/Info'
import BottomCategory from '../Components/BottomCategory/BottomCategory'
import Footer from '../Components/Footer/Footer'
import Rights from '../Components/Rights/Rights'
import { Container,Col,Row } from 'react-bootstrap'
import SideCategory from '../Components/sideCategory/SideCategory'

export default function PrivacyPolicy() {
  return (
    <>
    <Header />
    <Info/>
    <Container fluid className="bg-body-tertiary">
      <Container>
      <p className="  py-1 text-secondary ">
          Home / Privacy Policy
        </p>
      </Container>
       
      </Container>
      
      <Container className='mt-5 '>
        <Row>
            <SideCategory/>
            <Col className='col-12 col-lg-9 text-secondary'>
            <h3 className='fw-semibold mb-4 text-dark'>Privacy Policy</h3>
            <p className='mt-3'>
            This privacy policy sets out how Arain Apparel uses and protects any information that you give when you use this website.

Arain Apparel is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.

Arain Apparel may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.


<strong className='d-block mt-4'>Return or exchange an item</strong>
We may collect the following information:

<li className='mt-3'>name and job title</li>
<li> name and job title</li>
<li>contact information including email address</li>
<li>demographic information such as postcode, preferences and interests</li>
<li> other information relevant to customer surveys and/or offers</li>

<strong className='mt-4 d-block'>What we do with the information we gather</strong>
We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:

 <li className='mt-3'> Internal record keeping</li>
 <li>We may use the information to improve our products and services</li>
 <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided</li>
 <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests</li>
 

<strong className='mt-4 d-block '>Security</strong>
We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.

            </p>
            </Col>

           
        </Row>
      </Container>

    <BottomCategory name="PrivacyPolicy"/>
    <Footer name="PrivacyPolicy"/>
    <Rights/>

    </>  )
}


