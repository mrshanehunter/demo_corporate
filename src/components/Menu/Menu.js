import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Logo from '../Logo';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/home" aria-label="home">
        <Logo />
      </a>
      <a href="/about" aria-label="about us">
        About us
      </a>
      <a href="/services" aria-label="services">
        Services
      </a>
      <a href="/shop" aria-label="shop">
        Products
      </a>
      <a href="/contact" aria-label="contact">
        Contact
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;