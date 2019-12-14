import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dashboard } from './Dashboard';


storiesOf('Dashboard Page', module)
  .add('default', () => <Dashboard/>);