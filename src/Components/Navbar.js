import React from "react";
// import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import "./Navbar.css";

const Navbarr = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
         
          <NavLink className="links" to='/' >Home</NavLink>
        </li>
        <li>         
          <NavLink className="links" to='/about' >About</NavLink>
        </li>
        <li>         
          <NavLink className="links" to='/user/peter' >Peter Profile</NavLink>
        </li>
        <li>         
          <NavLink className="links" to='/user/ali' >Ali Profile</NavLink>
        </li>
        <li>         
          <NavLink className="links" to='/api' >Api</NavLink>
        </li>
        <li>
          <NavLink className="links" to='/drawer' >Delete-Method</NavLink>
        </li>
        <li>
         
          <NavLink className="links" to='/postmethod' >Post-Method</NavLink>
        </li>
        <li>
         
          <NavLink className="links" to='/posteddata' >Posted-data</NavLink>
        </li>
        <li>
         
          <NavLink className="links" to='/searchfilter' >Search Filter</NavLink>
        </li>
        <li>
         
          <NavLink className="links" to='/axios' >Axios</NavLink>
        </li>
        <li>
         
          <NavLink className="links" to='/contact' >Add Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbarr;
