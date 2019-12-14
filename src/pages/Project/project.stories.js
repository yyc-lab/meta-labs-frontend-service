import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Project } from './Project';


storiesOf('Project Page', module)
  .add('default', () => <Project/>);