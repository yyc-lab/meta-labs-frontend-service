import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LoginPage } from './LoginPage';


storiesOf('Login Page', module)
  .add('default', () => <LoginPage/>);