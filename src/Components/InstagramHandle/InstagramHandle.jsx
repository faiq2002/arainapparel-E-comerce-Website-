import React from "react";
import { Container } from "react-bootstrap";
import "./InstagramHandle.css";

export default function InstagramHandle() {
  return (
    <Container  fluid className="margin-top">
      <h3 className="text-center  ">
        <a href="https://www.instagram.com/invites/contact/?igsh=1i02ntbntxnb2&utm_content=tm433bk"
        target="blank"
        className="text-primary cursor follow">@ Follow Us </a> On
        Instagram
      </h3>
    </Container>
  );
}
