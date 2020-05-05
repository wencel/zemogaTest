import React from "react";
import {
  NavbarComponent,
  NavbarTitle,
  NavbarUl,
  NavbarLi,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import SearchButton from "../../Atoms/SearchButton/SearchButton.component";

const Navbar = () => {
  return (
    <NavbarComponent>
      <NavbarUl>
        <NavbarLi noBackground>
          <Link to='/'>
            <NavbarTitle>Rule of Thumb.</NavbarTitle>
          </Link>
        </NavbarLi>
      </NavbarUl>
      <NavbarUl>
        <NavbarLi>
          <Link to='/past-trials'>Past Trials</Link>
        </NavbarLi>
        <NavbarLi>
          <Link to='/how-it-works'>How It Works</Link>
        </NavbarLi>
        <NavbarLi>
          <Link to='/login'>Log In / Sign Up</Link>
        </NavbarLi>
        <NavbarLi noBackground>
          <SearchButton></SearchButton>
        </NavbarLi>
      </NavbarUl>
    </NavbarComponent>
  );
};

export default Navbar;
