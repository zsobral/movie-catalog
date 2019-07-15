import React from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  box-sizing: border-box;
`;

const StyledBrand = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const StyledItems = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledItem = styled.div`
  & + & {
    margin-left: 16px;
  }
`;

const Navbar = ({ children }) => {
  return <StyledNavbar>{children}</StyledNavbar>;
};

Navbar.propTypes = {
  children: PropTypes.node,
};

const NavbarBrand = ({ children }) => {
  return <StyledBrand>{children}</StyledBrand>;
};

NavbarBrand.propTypes = {
  children: PropTypes.node,
};

const NavbarItem = ({ children }) => {
  return <StyledItem>{children}</StyledItem>;
};

NavbarItem.propTypes = {
  children: PropTypes.node,
};

const NavbarItems = ({ children }) => {
  return <StyledItems>{children}</StyledItems>;
};

NavbarItems.propTypes = {
  children: PropTypes.node,
};

export { Navbar, NavbarBrand, NavbarItems, NavbarItem };
