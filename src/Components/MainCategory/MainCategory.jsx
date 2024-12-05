import React from 'react'
import "./MainCategory.css"
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function MainCategory({Data}) {
  return (

 
            <Col className='col-12  col-lg-6 col-md-6 one background position-relative  ' onClick={()=>window.scrollTo(0,0)}>
            <Link to={`/${Data.category}`} className='none'>
            <img src={Data.image}  className="img-fluid" alt="" />
            <div  className='  text-center  rounded  cursor  col-auto px-4  position-absolute mid py-3 fw-semibold bg '>  {Data.category}</div>
          </Link>
            </Col>
           

        
  )
}
