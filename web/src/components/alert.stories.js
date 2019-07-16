import React from 'react';
import { storiesOf } from '@storybook/react';

import { Alert, kinds } from './alert';

storiesOf('Alert', module).add('kinds', () => (
  <Alert kind={kinds.danger}>Text</Alert>
));
