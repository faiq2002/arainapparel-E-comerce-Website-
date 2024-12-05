import React from "react";
import Header from "../Components/Header/Header";
import Info from "../Components/Info/Info";
import { Container, Row } from "react-bootstrap";
import SubCategoryDisplay from "../Components/SubCategoryDisplay/SubCategoryDisplay";
import CategoryArray from "../Data/CategoryArray";
import "../Pages/CSS/style.css";
import Footer from "../Components/Footer/Footer";
import Rights from "../Components/Rights/Rights";
import { useLocation } from "react-router-dom";
import BottomCategory from "../Components/BottomCategory/BottomCategory";

export default function Category() {
  let uselocation = useLocation();
  let currentCategory = uselocation.pathname.split("/")[1];
  
  
  

  let CurrentCategoryarray = CategoryArray.filter(
    (v) => v.category === currentCategory
  );


  return (
    <>
      <Header />
      <Info />
      <Container fluid className="bg-body-tertiary">
        <Container>
        <p className="  py-1 text-secondary ">
          Home / {currentCategory} 
        </p>
        </Container>
      </Container>

      <Container className="mb-5">
        <h1 className="text-center  mb-3  ">{currentCategory}</h1>
        <div className="line m-auto mb-5 "></div>
        <Row className="">
          {CurrentCategoryarray.map((value, index) => {
            return <SubCategoryDisplay value={value} key={index} />;
          })}
        </Row>
      </Container>
      <BottomCategory name={currentCategory}/>
      <Footer name={currentCategory}  />
      <Rights />
    </>
  );
}
