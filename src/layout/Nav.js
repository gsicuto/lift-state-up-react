import React from "react";

const Nav = () => {
  return (
    <header style={headerStyle}>
      <ul style={{display:"flex", justifyContent: "space-around"}}>
        <li><a className= 'nav-link' href= '/'>Home</a></li>
        <li> <a className= 'nav-link'  href= '/todos'>Todo List</a></li>
        <li><a className= 'nav-link' href= '/about'>About</a></li>
      </ul>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Nav;
