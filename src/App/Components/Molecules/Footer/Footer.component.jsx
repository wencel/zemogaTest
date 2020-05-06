import React from "react";
import { FooterContainer, FooterUl, FooterLi } from "./Footer.styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterUl>
        <FooterLi>
          <Link to='/terms-and-conditions'>Terms and Conditions</Link>
        </FooterLi>
        <FooterLi>
          <Link to='/privacy'>Privacy Policy</Link>
        </FooterLi>
        <FooterLi>
          <Link to='/contact-us'>Contact Us</Link>
        </FooterLi>
      </FooterUl>
      <FooterUl>
        <FooterLi>
          <div>Follow us</div>
        </FooterLi>
        <FooterLi>
          <a
            href='http://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://storage.googleapis.com/zemogatest/facebook.png'
              alt='facebook'
            />
          </a>
        </FooterLi>
        <FooterLi>
          <a
            href='http://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://storage.googleapis.com/zemogatest/twitter.png'
              alt='twitter'
            />
          </a>
        </FooterLi>
      </FooterUl>
    </FooterContainer>
  );
};

export default Footer;
