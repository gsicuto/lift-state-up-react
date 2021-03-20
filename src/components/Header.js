import React from "react";

const Header = (props) => {
  return (
    <header style={headerStyle}>
      <h3>{props.children}</h3>
    </header>
  );
};

const headerStyle = {
  background: "#337",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
