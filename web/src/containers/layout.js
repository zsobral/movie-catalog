import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { useUser } from '../contexts/user-context';
import {
  Layout as LayoutWrapper,
  LayoutHeader,
  LayoutBody,
} from '../components/layout';
import {
  Navbar,
  NavbarBrand,
  NavbarItems,
  NavbarItem,
} from '../components/navbar';

const Layout = ({ children, history }) => {
  const [{ token }, { logout }] = useUser();

  return (
    <LayoutWrapper>
      <LayoutHeader>
        <Navbar>
          <NavbarBrand>
            <Link to="/">Movie Catalog</Link>
          </NavbarBrand>
          {token && (
            <NavbarItems>
              <NavbarItem
                role="button"
                onClick={() => {
                  history.push('/');
                  logout();
                }}
              >
                Logout
              </NavbarItem>
            </NavbarItems>
          )}
        </Navbar>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
    </LayoutWrapper>
  );
};

export default withRouter(Layout);
