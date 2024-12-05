import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { useContext } from "react";
import { CartContext } from '../../Context/Cart';
import { Link } from 'react-router-dom';


export default function ProductInfoDisplay({currentProduct}) {

    let cartState = useContext(CartContext);
    
    const addProductCode =()=>{
        cartState.setCart(currentProduct.code)
        
    }

  return (
    <Container className='fontsize'>
        <Row>
            <Col className='col-12 col-lg-6 m-auto'>
<img src={currentProduct.image} className="img-fluid px-4 py-0 m-auto cursor"alt="" />
            </Col>
            <Col className='col-12 col-lg-6 pl-2 pt-2 mt-5'>
            <h2 className='fw-bold'>
                {currentProduct.name}
            </h2>
            <span className='text-primary fs-4  mb-3 d-block'>{currentProduct.code}</span>
            <p className='text-secondary cursor'><bold className="fw-semibold text-dark">CUSTOM MOCKUP DESIGN:</bold> 2-3 Working Hours</p>
            <p className='text-secondary cursor'><bold className="fw-semibold text-dark">CUSTOM SAMPLE TIME:</bold> 7 Working Days</p>
            <p className='text-secondary cursor'><bold className="fw-semibold text-dark">SIZES:</bold> All Sizes Are Available</p>
            <h3 className='mt-3'>
                Discription:
            </h3>
            <p className='text-secondary cursor'>
                {currentProduct.details}
            </p>
            <h5 className='mt-3'>Fabric:</h5>
            <p className='text-secondary cursor'>{currentProduct.fabric}</p>
            <Link to={"/OnlineInquiry"} className='none' onClick={()=>window.scrollTo(0,0)}>
            <button className='btn btn-danger mt-3' onClick={addProductCode}>SEND ONLINE INQUIRY</button>
</Link>
            </Col>
        </Row>
    </Container>
  )
}
