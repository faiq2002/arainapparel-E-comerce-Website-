import React from "react";

import "./ProductCard.css";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ProductCard({ value,arrival }) {
  return (
    <Card className="col-lg-3 col-6 col-md-4 border-0 position-relative cursor " onClick={()=>window.scrollTo(0,0)}>
      <Link to={`/${value.category}/${value.name}/${value.code}/info`} className="none">
      <Card.Img variant="top"  className="px-1 py-0" src={value.image} />

      <Card.Body>
        <strong className="d-block small text-secondary text-center py-2  " style={{letterSpacing:2}}>Arain Apparel</strong>
        <Card.Title className="text-center fw-semibold">
          {value.name}
        </Card.Title>

        <p className="text-center large ">{value.code}</p>
        <div
          className={`bg-primary text-light small px-2 py-1 border rounded d-inline position-absolute position ${
            arrival!== "New-Arrival" ? "display" : ""
          }`}
        >
          New
        </div>
      </Card.Body>
      </Link>
    </Card>
  );
}
