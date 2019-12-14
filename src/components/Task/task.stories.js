import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Task } from './Task';


storiesOf('Task', module)
  .add('default', () => <Task/>);