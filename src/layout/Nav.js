import React from "react";
import { NavLink } from "react-router-dom"

const Nav = (props) => {
  return (
    
    <header style={headerStyle}>
      <ul style={{display:"flex", justifyContent: "space-around"}}>
        <li><NavLink exact activeStyle={{color:'green'}} className= 'nav-link' to= '/'>Home</NavLink></li>
        {props.user ? (
        <>
          <li> <NavLink activeStyle={{color:'green'}} className= 'nav-link'  to= '/todos'>Todo List</NavLink></li>
          <li><NavLink activeStyle={{color:'green'}} className=  'nav-link' to= '/about'>About</NavLink>
          </li>
          <li><NavLink activeStyle={{color:'green'}} className=  'nav-link' to= '/logout'>Logout</NavLink>
          </li>
          </>
        ) : (
          <>
          <li> <NavLink activeStyle={{color:'green'}} className= 'nav-link'  to= '/login'>Login</NavLink></li>
          <li><NavLink activeStyle={{color:'green'}} className=  'nav-link' to= '/signup'>Signup</NavLink>
          </li>
          </>
        )
         }
        
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
