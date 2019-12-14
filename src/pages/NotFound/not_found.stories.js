import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NotFound } from './NotFound';


storiesOf('NotFound Page', module)
  .add('default', () => <NotFound/>);