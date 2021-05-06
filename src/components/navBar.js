import React from "react";

export default function NavBar(props) {
  const {theme} = props
  return (
    <nav
      style={{
        textDecoration: "none",
        cursor: "pointer",
        background: theme.cream,
      }}
    >
      <a
        href="/"
        style={{
          textDecoration: "none",
          cursor: "pointer",
          color: theme.green,
          fontSize: "3em",
          fontWeight: "bold",
          paddingLeft: "5%",
        }}
      >
        Shoppies
      </a>
    </nav>
  );
}
