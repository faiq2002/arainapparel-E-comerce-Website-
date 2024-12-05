import React from "react";
import Header from "../Components/Header/Header";
import Info from "../Components/Info/Info";
import { Container, Row } from "react-bootstrap";

import Footer from "../Components/Footer/Footer";
import Rights from "../Components/Rights/Rights";
import { useLocation } from "react-router-dom";
import allData from "../Data/allData";

import ProductCard  from"../Components/ProductCard/ProductCard";
import BottomCategory from "../Components/BottomCategory/BottomCategory";

export default function ProductsByName() {
  let uselocation = useLocation();
  let currentProduct = uselocation.pathname.split("/")[2];
  let currentCategory = uselocation.pathname.split("/")[1];

  let CurrentCategoryarray = allData.filter(
    (v) => v.category === currentCategory
  );

  let currentProductName= CurrentCategoryarray.filter((v)=>v.name===currentProduct);

  let currentProductNameResize=currentProductName.slice(0,12)

  return (
    <>
      <Header category={currentCategory} name={currentProduct} />
      <Info />
      <Container fluid className="bg-body-tertiary">
        <Container>
        <p className=" py-1 text-secondary ">
          Home / {currentCategory} / {currentProduct}
        </p>
        </Container>
      </Container>

      <Container className="mb-5">
        <h1 className="text-center  mb-3  ">
          {currentCategory} | {currentProduct}
        </h1>
        <div className="line m-auto mb-5 "></div>
        <Row className="">
          {
            currentProductNameResize.map((value,index)=>{
              return <ProductCard value={value} key={index} />
            })
          }
        </Row>
      </Container>

      
     <BottomCategory/>
      
      <Footer />
      <Rights />
    </>
  );
}
