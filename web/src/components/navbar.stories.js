import React from 'react';
import { storiesOf } from '@storybook/react';

import { Navbar, NavbarBrand, NavbarItems, NavbarItem } from './navbar';

storiesOf('Navbar', module).add('default', () => (
  <Navbar>
    <NavbarBrand>BRAND</NavbarBrand>
    <NavbarItems>
      <NavbarItem>ITEM 1</NavbarItem>
      <NavbarItem>ITEM 2</NavbarItem>
      <NavbarItem>ITEM 3</NavbarItem>
      <NavbarItem>ITEM 4</NavbarItem>
      <NavbarItem>ITEM 5</NavbarItem>
    </NavbarItems>
  </Navbar>
));
