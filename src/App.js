import React from "react";
import styled from "styled-components";
import NavBar from "./components/navBar";
import Search from "./components/search";

export default function App() {
  const theme = {
    green: "#008060",
    cream: "#FFFBBD",
    fawn: "#E6AA68",
  };
  return (
    <AppStyle>
      <NavBar theme={theme} />
      <Search theme={theme} />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  body {
    font-family: "Raleway", "Helvetica Neue", Arial, sans-serif;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 400;
    box-sizing: border-box;
  }
`;
