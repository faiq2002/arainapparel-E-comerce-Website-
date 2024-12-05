import React from "react";
import Header from "../Components/Header/Header";
import Info from "../Components/Info/Info";
import Slider from "../Components/Slider/Slider";
import MainCategory from "../Components/MainCategory/MainCategory";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../Components/ProductCard/ProductCard";
import NewArrival from "../Data/NewArrival";
import FeaturedProducts from "../Data/FeaturedProducts";
import InstagramHandle from "../Components/InstagramHandle/InstagramHandle";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";
import Rights from "../Components/Rights/Rights";
import MainCategoryArray from "../Data/MainCategoryArray";
import "../Pages/CSS/style.css"
import BottomCategory from "../Components/BottomCategory/BottomCategory";


export default function Home() {

  let first_index=Math.floor(Math.random()*18);
  let last_index=first_index+12;

  let resize_NewArrival=NewArrival.slice(first_index,last_index);
  let resize_FeaturedProducts=FeaturedProducts.slice(first_index,last_index);

  return (
    <div>
      <Header name="home" />
      <Info />
      <Slider />
      <Container fluid className="mt-5">
      
      <h1 className="text-center  mb-3  ">Categories</h1>
        <div className="line m-auto mb-5 "></div>
        <Row className="gy-3">
        

          {
            MainCategoryArray.map((value,index)=>{
              return <MainCategory Data={value} key={index}/>
            })
          }
          
          
        </Row>

     
      </Container>

      <Container  className="margin-top">
        <h1 className="text-center  mb-3 ">New Arrivals</h1>
        <div className="line m-auto mb-5 "></div>
        <Row className="gy-3">
          {resize_NewArrival.map((value, index) => {
            return <ProductCard value={value} key={index} arrival="New-Arrival" />;
          })}
        </Row>
      </Container>

      <Container className="margin-top">
        <h1 className="text-center  mb-3  ">Featured Products</h1>
        <div className="line m-auto mb-5 "></div>
        <Row className="gy-3">
          {resize_FeaturedProducts.map((value, index) => {
            return <ProductCard value={value} key={index} />;
          })}
        </Row>
      </Container>
      <InstagramHandle />

      <Services />
      <BottomCategory/>
      <Footer />
      <Rights/>
    </div>
  );
}
