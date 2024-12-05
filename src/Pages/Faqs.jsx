import React from 'react'
import Header from '../Components/Header/Header'
import Info from '../Components/Info/Info'
import BottomCategory from '../Components/BottomCategory/BottomCategory'
import Footer from '../Components/Footer/Footer'
import Rights from '../Components/Rights/Rights'
import { Container,Col,Row } from 'react-bootstrap'
import SideCategory from '../Components/sideCategory/SideCategory'

export default function Faqs() {
  return (
    <>
    <Header  />
    <Info/>
    <Container fluid className="bg-body-tertiary">
        <Container>
        <p className="  py-1 text-secondary ">
          Home / FAQ,s
        </p>
        </Container>
      </Container>
      
      <Container className='mt-5 '>
        <Row>
            <SideCategory/>
            <Col className='col-12 col-lg-9 text-secondary'>
            <h3 className='fw-semibold mb-4 text-dark'>FAQ,s</h3>
            <p>
           <strong className='d-block mt-4' > Q1. What is your terms of packing?</strong>
A: Generally, we pack our goods in pp bags and cartons. If you have other requests, We can pack the goods in your branded boxes after getting your authorization letters.

<strong className='d-block mt-4'>Q2. What is your terms of payment?</strong>
A: T/T 30% as deposit and 70% before delivery. We'll show you the photos of the products and packages before you pay the balance.

<strong className='mt-4 d-block'>Q3. What is your terms of delivery?</strong>
A: EXW, FOB, CASH and so on.

<strong className='d-block mt-4'>Q4. How about your delivery time?</strong>
A: Generally, it will take 30 to 60 days after receiving your advance payment. The specific delivery time on the items and the quantity of your order.

<strong className='mt-4 d-block'>Q5. Can you produce according to the samples?</strong>
A: Yes, we can produce by your samples or technical drawings. We can build the molds.

<strong className='mt-4 d-block'>Q6. What is your sample policy?</strong>
A: We can supply the sample if we have ready parts in stock, but the customers have to pay the sample courier cost.

<strong className='mt-4 d-block'>Q7. Do you test all your goods before delivery?</strong>
A: Yes, we have 100% test before delivery.



            </p>
            </Col>

           
        </Row>
      </Container>

    <BottomCategory name="Faq,s"/>
    <Footer name="Faq,s"/>
    <Rights/>

    </>  )
}


