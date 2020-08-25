import React from "react";
import Container from "../Container";

const Layout = () => {
  return (
    <>
      <Container>
        <div style={{ padding: "1em" }}></div>
      </Container>
      <div
        style={{
          backgroundColor: "rgb(51, 76, 130)",
          height: "3em",
          flexShrink: "0",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "rgb(210, 76, 88)",
          height: "3em",
          flexShrink: "0",
        }}
      ></div>
      <div></div>
    </>
  );
};

export default Layout;
