import React from 'react'
import Header from '../Components/Header/Header'
import Info from '../Components/Info/Info'
import BottomCategory from '../Components/BottomCategory/BottomCategory'
import Footer from '../Components/Footer/Footer'
import Rights from '../Components/Rights/Rights'
import { Container,Col,Row } from 'react-bootstrap'
import SideCategory from '../Components/sideCategory/SideCategory'

export default function About() {
  return (
    <>
    <Header name="about" />
    <Info/>
    <Container fluid className="bg-body-tertiary">
        <Container>
        <p className="  py-1 text-secondary ">
          Home / About Us
        </p>
        </Container>
      </Container>
      
      <Container className='mt-5 '>
        <Row>
            <SideCategory/>
            <Col className='col-12 col-lg-9 text-secondary'>
            <h3 className='fw-semibold mb-4 text-dark'>About Us</h3>
            <p>
            <h4 className='mt-5 text-dark'>Introduction</h4>
Arain Apparel, would like to introduce ourselves as one of the leading manufacture and exporter of all kind of Sports wears, Gym Wears, Urban Street Wears, Yoga Wears, Fitness Wears and more. Manufacturing company was established in the year 2008 in Sialkot, the "export city" of Pakistan, Sialkot is famous for its sports and fitness wears businesses.

Now, Arain Apparel become leading quality products manufacturing company with its commitments of excellence. Arain Apparel appreciates your continued loyalty and we are confident that we have the best products in the industry based on our customer's support and positive feedback.

<h4 className='mt-5 text-dark'>Product Samples</h4>
The Company provides some of free samples to its regular customers which is able to invariably be given current orders, else the client can have to be compelled to acquire the shipping. The new patrons pay the sample value further as shipping.

<h4 className='mt-5 text-dark'>Development</h4>
Arain Apparel continues to explore diverse products with quality designs. Our Design team or merchandisers help the buyers with the development of new samples and fabrics. Different types of embroideries/Print that can be done in Pakistan.

<h4 className='mt-5 text-dark'>Printing & Sublimation</h4>
We have put in latest instrumentation for sublimation on our team apparels & T/Polo shirts. It makes our costs best & quality peerless. Except for sublimation we tend to conjointly do heat transfer, screen printing & embroidery within our industrial plant.

<h4 className='mt-5 text-dark'>Assurance of Quality</h4>
Responsible for sample analysis and time and motion studies, Checking all the new samples and size sets, conducting: Pilot run / in lines / middle review / Final Inspections. Arain Apparel is a company that provides its customers with high-quality fitness products.

<h4 className='mt-5 text-dark'>Child Labor Policy</h4>
Our child labor policy is our position on using minors and aims to confirm that our company, its subsidiaries and everybody we’re connected with follows the law and cares for children’s interests.

As a company, we wish to try to to business in a very legal, moral manner adding worth to society and also the setting rather than doing damage. We wish to create positive that our organization doesn’t participate in children’s exploitation and conjointly helps finish it to the most effective of our ability. We guarantee 100% satisfaction to our customers. Today, we continue to work with innovation that will make our fitness products look and fit even better, as per the specifications of our valued customers.

            </p>
            </Col>

           
        </Row>
      </Container>

    <BottomCategory name="About"/>
    <Footer name="About"/>
    <Rights/>

    </>  )
}

