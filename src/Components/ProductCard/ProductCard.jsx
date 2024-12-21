import React from "react";

import "./ProductCard.css";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ProductCard({ value, name, arrival }) {
  return (
    <Card
      className="col-lg-3 col-6 col-md-4 border-0 position-relative cursor "
      onClick={() => window.scrollTo(0, 0)}
    >
      <Link
        to={`/${value.category}/${name === undefined ? value.name : name}/${
          value.code
        }/info`}
        className="none"
      >
        {value.image === undefined || value.image === null ? (
          <div
            class="spinner-border text-primary d-block m-auto "
            role="status"
          >
            <span class="visually-hidden d-block m-auto">Loading...</span>
          </div>
        ) : (
          <Card.Img
            variant="top"
            className="px-1 py-0"
            src={value.image}
            alt={value.name}
          />
        )}

        <Card.Body>
          <strong
            className="d-block small text-secondary text-center py-2  "
            style={{ letterSpacing: 2 }}
          >
            Arain Apparel
          </strong>
          <Card.Title className="text-center card-title-size">
            {value.name}
          </Card.Title>

          <p className="text-center large ">{value.code}</p>
          <div
            className={`bg-primary text-light small px-2 py-1 border rounded d-inline position-absolute position ${
              arrival !== "New-Arrival" ? "display" : ""
            }`}
          >
            New
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}
