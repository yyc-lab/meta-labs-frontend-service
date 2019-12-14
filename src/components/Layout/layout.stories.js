import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Layout } from './Layout';


storiesOf('Layout', module)
  .add('default', () => <Layout/>);