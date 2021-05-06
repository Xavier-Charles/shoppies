import React from "react";
import styled from "styled-components";

export default function Search(props) {
    const { theme } = props;
  return (
    <SearchStyle theme={theme}>
        <h1>Nominate your Favourite movies for the Shoppies 2021!</h1>
      <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search for stuff</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          autofocus
          required
        />
        <button type="submit">Search</button>
      </form>
    </SearchStyle>
  );
}

//? adapted from Liam - https://codepen.io/liamj/pen/vYYLGZj?editors=1100
const SearchStyle = styled.div`
  font-family: "Kaushan Script", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    position: relative;
    width: 30rem;
    background: #57bd84;
    border-radius: 0.7rem;
  }
  input,
  button {
    height: 5rem;
    font-family: "Raleway", "Helvetica Neue", Arial, sans-serif;
    border: 0;
    color: #2f2f2f;
    font-size: 1.8rem;
  }

  input[type="search"] {
    outline: 0;
    width: 100%;
    background: #fff;
    padding: 0 1.6rem;
    border-radius: 0.7rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }

  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 8rem;
    font-weight: bold;
    background: #57bd84;
    border-radius: 0 0.7rem 0.7rem 0;
  }

  input:not(:-moz-placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 8rem);
  }

  input:not(:-ms-input-placeholder) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 8rem);
  }

  input:not(:placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 8rem);
  }
  input:not(:-moz-placeholder-shown) + button {
    display: block;
  }
  input:not(:-ms-input-placeholder) + button {
    display: block;
  }
  input:not(:placeholder-shown) + button {
    display: block;
  }

  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
`;
