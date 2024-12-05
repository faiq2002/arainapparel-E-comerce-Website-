import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function SideCategory() {
  return (
    <Col className='col-3 px-3 d-none d-lg-block ' >
            <h5> MAIN CATEGORY </h5>
            <hr className='mt-4 mb-3 d-block '></hr>
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
            </Col>
  )
}
