import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Projects } from './Projects';


storiesOf('Projects Page', module)
  .add('default', () => <Projects/>);