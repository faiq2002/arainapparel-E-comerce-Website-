
import "./CSS/style.css"
import Header from '../Components/Header/Header'
import BottomCategory from '../Components/BottomCategory/BottomCategory'
import Info from '../Components/Info/Info'
import Footer from '../Components/Footer/Footer'
import Rights from '../Components/Rights/Rights'
import SideCategory from '../Components/sideCategory/SideCategory'
import { Container,Col,Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import { CartContext } from '../Context/Cart'
import { useForm } from "react-hook-form"
import {  useNavigate } from "react-router-dom"


export default function Inquiry() {
  let cartState = useContext(CartContext);
  
 

  

 
  
    
 

  const {
    register,
    handleSubmit,
    
    formState: { errors,isSubmitting,},
  } = useForm();
  const navigate = useNavigate();

 
  const form = useRef();
  
 
  async function onSubmit(data) {
    
  
   await new Promise(()=>{
    setTimeout(()=>{
      emailjs
        .sendForm('service_2syovea', 'template_1e67m7l', form.current, {
          publicKey:'E-d-OBhWX-M76ob0c',
        })
        .then(
          () => {
           
           navigate('/OnlineInquiryStatus');
           
          },
          (error) => {
            alert('FAILED...', error.text);
          },
  
          
        );
  
     },2000)
   })
  
    
        
   

      console.log(data)
  };

  return (
   <>
   <Header name="inquiry"/>
   <Info/>
   <Container fluid className="bg-body-tertiary ">
        <Container>
        <p className=" py-1 text-secondary ">
          Home / Online Inquiry
        </p>
        </Container>
      </Container>
      <Container className="mt-5">
        <Row>
            <SideCategory/>
            <Col className="col-12 col-lg-9">
            <h3 className='fw-semibold mb-4'>Online Inquiry</h3>
            <Col className='col-auto'>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>

            <InputGroup   className={`${cartState.cart===null?"d-none":"outline mb-3 "}`}>
        <InputGroup.Text className='text-secondary ' id="basic-addon1">Product Code</InputGroup.Text>
        <Form.Control
          placeholder="Product Code..."
          aria-label="productCode"
          name='productCode'
          value={cartState.cart}
          aria-describedby="basic-addon1"
          className="text-secondary outline"
          
         
        
        />
      </InputGroup>


            <InputGroup  size="sm" className={`outline ${errors.name?"red":"mb-3"}`} >
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control 
          placeholder="your name... (Compulsory)"
          name='name'
          aria-label="name"
          className={`outline ${errors.name?"red":""}`}
           {...register("name",{ required: true })}
           
        />
       
      </InputGroup>
      {errors.name && <span className="text-danger d-block p-0 mb-2 text-center d-block ">Enter your name</span>}

      <InputGroup  size="sm" className="mb-3 outline ">
        <InputGroup.Text className='' id="basic-addon1">City</InputGroup.Text>
        <Form.Control
          placeholder="your city..."
          aria-label="city"
          name='city'
          aria-describedby="basic-addon1"
           className='outline'
          
        />
      </InputGroup>

      <InputGroup  size="sm" className="mb-3 outline ">
        <InputGroup.Text className='' id="basic-addon1">State</InputGroup.Text>
        <Form.Control
          placeholder="your state..."
          aria-label="state"
          name='state'
          aria-describedby="basic-addon1"
          className='outline'
          
        />
      </InputGroup>

      <InputGroup  size="sm"className={`outline ${errors.company?"red":"mb-3"}`} >
        <InputGroup.Text className='' id="basic-addon1">Company</InputGroup.Text>
        <Form.Control
          placeholder="your company... (Compulsory)"
          aria-label="company"
          name='company'
          aria-describedby="basic-addon1"
          className={` ${errors.name?"red":"outline"}`}
           {...register("company",{ required: true })}
        />
      </InputGroup>
      {errors.company && <span className="text-danger d-block p-0 mb-2 text-center d-block ">Enter your company name </span>}
    
      <InputGroup  size="sm" className={`outline ${errors.country?"red":"mb-3"}`}>
        <InputGroup.Text className='' id="basic-addon1">Country</InputGroup.Text>
        <Form.Control
          placeholder="your country... (Compulsory)"
          aria-label="country"
          name='country'
          aria-describedby="basic-addon1"
          className={`outline ${errors.country?"red":""}`}
           {...register("country",{ required: true })}
          
        />
       
      </InputGroup>

      {errors.country && <span className="text-danger d-block p-0 mb-2 text-center d-block ">Enter correct E-mail</span>}
     

      <InputGroup  size="sm" className={`outline ${errors.email?"red":"mb-3"}`}>
        <InputGroup.Text className='' id="basic-addon1">Email</InputGroup.Text>
        <Form.Control
          placeholder="your email... (Compulsory)"
          aria-label="email"
          name='email'
          aria-describedby="basic-addon1"
          {...register("email",{pattern:{ value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}})}
          
          className={`outline ${errors.email?"red":""}`}
        />
      </InputGroup>
      {errors.email && <span className="text-danger d-block p-0 mb-2 text-center d-block ">Enter valid E-mail</span>}
          
      <InputGroup  size="sm" className={`outline ${errors.phone?"red":"mb-3"}`}>
        <InputGroup.Text className='' id="basic-addon1">Phone</InputGroup.Text>
        <Form.Control
          placeholder="your phone number... (Compulsory)"
          aria-label="phone"
          name='phone'
          aria-describedby="basic-addon1"
          {...register("phone",{ required: true })}
          className={` outline ${errors.phone?"red":""}`}
         
        />
      </InputGroup>
      {errors.phone && <span className="text-danger d-block p-0 mb-2 text-center d-block ">Enter your phone number</span>}
      

      <InputGroup  size="sm" className={`outline ${errors.address?"red":"mb-3"}`}>
        <InputGroup.Text className='' id="basic-addon1">Address</InputGroup.Text>
        <Form.Control
          placeholder="your address... (Compulsory)"
          aria-label="address"
          name='address'
          aria-describedby="basic-addon1"
          {...register("address",{ required: true })}
          className={`outline ${errors.address?"red":""}`}
         
        />
       
      </InputGroup>
      {errors.address && <span className="text-danger d-block p-0 mb-2 text-center d-block ">Enter Your Address</span>}
     

      <InputGroup>
        <InputGroup.Text>Message</InputGroup.Text>
        <Form.Control as="textarea" name='message' large aria-label="With textarea" />

       
      </InputGroup>
      <Col className='col-12'> <button disabled={isSubmitting} className={`btn  mt-5 float-end  ${isSubmitting? "btn-secondary ":"btn-primary"} `}>{isSubmitting?"Submitting...":"Submit"} </button></Col>
      
     </form>
            </Col>
            </Col>

        </Row>
      </Container>

   <BottomCategory/>
   <Footer/>
   <Rights/>
   </>
  )
}
