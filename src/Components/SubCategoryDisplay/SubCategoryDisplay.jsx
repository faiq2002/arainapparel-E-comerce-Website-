import React from 'react'
import ".//SubCategoryDisplay.css"
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'



export default function SubCategoryDisplay({value}) {
  return (
  <>
  <Col
  
       className=' zoom col-12 cursor col-md-6 col-lg-3  border border-3  position-relative p-3' onClick={()=>window.scrollTo(0,0)} >
        <Link to={`/${value.category}/${value.name}` } className="none">
      <img src={value.image} className='img-fluid  '  alt={value.name} />
      <div style={{opacity:0.9}} className='  text-center bg-light   cursor p-3 col-10 position-absolute mid  '>  {value.name}</div>
      </Link>
      </Col>  

    </>
  )
}
