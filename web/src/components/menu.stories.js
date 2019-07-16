import React from 'react';
import { storiesOf } from '@storybook/react';

import { Menu, MenuOption } from './menu';

storiesOf('Menu', module).add('default', () => (
  <Menu>
    <MenuOption>1</MenuOption>
    <MenuOption>1</MenuOption>
    <MenuOption>1</MenuOption>
    <MenuOption>1</MenuOption>
    <MenuOption>1</MenuOption>
  </Menu>
));
