import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll, Link } from "react-scroll"; 

import {
  Nav,
  NavMenu, 
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const   Navbar = ({ toggle }) => { 
  const [scrollNav, setScrollNav] = useState(false);     
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav); 
  }, []);
  const toggleHome = () => {
        scroll.scrollToTop();  

  };
  function disabeled() {
    console.log(Boolean(window.localStorage.getItem("product")));
    return window.localStorage.getItem("product"); 
  } 
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "1em" }}>  
        <Nav scrollNav={scrollNav}>
          <NavLogo to="/" onClick={toggleHome}>
            <img
              className="w-56 h-44"
              src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/navlogo.svg" 
              alt="logo"
              width="80%"
            />
          </NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                HOME
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                TRAILER & LEASING
              </NavLinks>
            </NavItem>

            <NavItem>
              {disabeled() === "true" ? (
                <NavLinks>
                  <Link
                    to="Products"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    Products
                  </Link>
                </NavLinks>
              ) : (
                <NavLinks to="/products" onClick={toggleHome}>
                  TIRES & SERVICES
                </NavLinks>
              )}
            </NavItem>

            <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                PARTZ
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                CONTACT
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                NEWS & EVENTS
              </NavLinks>
            </NavItem>

            <MobileIcon onClick={toggle}>
              <FaBars color="#111" />
            </MobileIcon>
          </NavMenu>
          <NavBtn>
            <button className="text-white bg-yellow-bg w-80 h-16  font-semibold  rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow hover:shadow-yellow-shadowhover text-2xl flex items-center justify-center ">
              (604) 864 3100
            </button>
          </NavBtn>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar; 


