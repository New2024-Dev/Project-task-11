import { Link } from "react-router-dom";
import "./Navbar.css"
import Logo from "/assets/Images/logo.svg"
import Avatar from "/assets/Images/image-avatar.png"
import Cart from "/assets/Images/icon-cart.svg"
import Bartoggle from "/assets/Images/icon-menu.svg"
import closeicon from "/assets/Images/icon-close.svg"
import React, { useState} from 'react';

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
<nav>
        
        <div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <img src={Bartoggle} />
        </button>
            <img src={Logo} />
          </div>

          <ul className={`menu ${isOpen ? "open" : ""}`}>
          <button className="close-menu" onClick={toggleMenu}>
            <img src={closeicon}/>
          </button>
          <li>
            <Link to="/">Collections</Link>
          </li>
          <li>
            <Link to="/Men">Men</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
         
          </ul>
          <div id="imgnavdiv">
            <img src={Cart} />
            <img id="avaimg" src={Avatar} />
          </div>
          
      </nav>
    )
}
export default Navbar