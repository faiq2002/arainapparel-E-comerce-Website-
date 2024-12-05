import React from "react";
import Header from "../Components/Header/Header";
import Info from "../Components/Info/Info";
import { CartContext } from "../Context/Cart";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import BottomCategory from "../Components/BottomCategory/BottomCategory";
import Rights from "../Components/Rights/Rights";
import Footer from "../Components/Footer/Footer";
import allData from "../Data/allData";
import ProductCard from "../Components/ProductCard/ProductCard";

export default function SearchResult() {
  let searchState = useContext(CartContext);
  let temp = searchState.submitSearch;

  searchState.setSubmitSearch("");

  const filteredData = allData.filter((item) => {
    const searchChars = temp.split(""); // Split searchText into characters
    const itemLower = item.name.toLowerCase(); // Convert item to lowercase
    return searchChars.every((char) => itemLower.includes(char)); // Check if every character exists in item
  });

  return (
    <>
      <Header />
      <Info />
      <Container fluid className="bg-body-tertiary">
        <Container>
        <p className="  py-1 text-secondary ">Home / Search For Result</p>
        </Container>
      </Container>
      <Container className="mt-5">
        <Container>
          <h1 className="fw-semibold mb-3 text-center">Search For "{temp}"</h1>
          <div className="line m-auto mb-5 "></div>
          <Row>
            {filteredData.length === 0 ? (
              <p className="text-secondary text-center">
                Sorry, we couldn't find any products matching your search.
                Please try a different keyword or explore our categories for
                more options!
              </p>
            ) : temp === "" ? (
              <p className="text-secondary text-center">
                Please enter a keyword in the search field before searching.{" "}
              </p>
            ) : allData.filter((v) => v.name.toLocaleLowerCase().includes(temp))
                .length === 0 ? (
              filteredData.map((value, index) => {
                return <ProductCard value={value} key={index} />;
              })
            ) : (
              allData
                .filter((v) => v.name.toLocaleLowerCase().includes(temp))
                .map((value, index) => {
                  return <ProductCard value={value} key={index} />;
                })
            )}
          </Row>
        </Container>
      </Container>
      <BottomCategory />
      <Footer />
      <Rights />
    </>
  );
}
