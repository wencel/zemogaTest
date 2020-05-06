import React, { useState } from "react";
import {
  NavbarComponent,
  NavbarTitle,
  NavbarUl,
  NavbarLi,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import SearchButton from "../../Atoms/SearchButton/SearchButton.component";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavbarComponent>
      <NavbarUl>
        <NavbarLi noBackground>
          <Link to='/'>
            <NavbarTitle>Rule of Thumb.</NavbarTitle>
          </Link>
        </NavbarLi>
      </NavbarUl>
      <NavbarUl className='dropdownMenu' isOpen={showMenu}>
        <NavbarLi>
          <Link onClick={() => setShowMenu(false)} to='/past-trials'>
            Past Trials
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link onClick={() => setShowMenu(false)} to='/how-it-works'>
            How It Works
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link onClick={() => setShowMenu(false)} to='/login'>
            Log In / Sign Up
          </Link>
        </NavbarLi>
        <NavbarLi noBackground>
          <SearchButton></SearchButton>
        </NavbarLi>
      </NavbarUl>
      <NavbarUl className='hamburguerMenu'>
        <NavbarLi noBackground>
          <button onClick={() => setShowMenu(!showMenu)}>
            <img
              src='https://storage.googleapis.com/zemogatest/hamburguer.png'
              alt='hamburguer'
            />
          </button>
        </NavbarLi>
      </NavbarUl>
    </NavbarComponent>
  );
};

export default Navbar;
