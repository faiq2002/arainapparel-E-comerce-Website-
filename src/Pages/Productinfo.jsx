import React from "react";
import { useLocation } from "react-router-dom";
import allData from "../Data/allData";
import ProductInfoDisplay from "../Components/ProductInfoDisplay/ProductInfoDisplay";
import Header from "../Components/Header/Header";
import Info from "../Components/Info/Info";
import { Container, Row } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/ProductCard/ProductCard";
import BottomCategory from "../Components/BottomCategory/BottomCategory";
import Rights from "../Components/Rights/Rights";



export default function Productinfo() {
 

  let uselocation = useLocation();
  let currentProductCode = uselocation.pathname.split("/")[3];
  let currentProductcategory = uselocation.pathname.split("/")[1];
  let currentProductName = uselocation.pathname.split("/")[2];
  let currentProduct = allData.filter((v) => v.code === currentProductCode)[0];
  let relatedCurrentCategory=allData.filter((v) => v.category === currentProductcategory)
 
  
  let relatedcategory = relatedCurrentCategory.filter((v)=> v.name.includes(currentProductName));
  let relatedfilterProducts = relatedcategory.filter(
    (v) => v.code !== currentProductCode
  );
  let firstindex = Math.floor(Math.random() * 7);
  let lastindex = firstindex + 4;
  let resizeArray = relatedfilterProducts.slice(firstindex, lastindex);

  return (
    <>
      <Header />
      <Info />
      <Container fluid className="bg-body-tertiary">
        <Container>
        <p className="  py-1 text-secondary ">
          Home / {currentProductcategory} / {currentProductName} | {currentProductCode}
        </p>
        </Container>
      </Container>
      <ProductInfoDisplay currentProduct={currentProduct} />
      <Container className="margin-top">
        <h1 className="text-center  mb-3 ">Related Products</h1>
        <div className="line m-auto mb-5 "></div>
        <Row className="gy-3">
          {resizeArray.map((value, index) => {
            return <ProductCard value={value} name={currentProductName} key={index} />;
          })}
        </Row>
      </Container>
      <BottomCategory/>
      <Footer />
      <Rights/>
    </>
  );
}
