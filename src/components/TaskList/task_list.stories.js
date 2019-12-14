import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TaskList } from './TaskList';


storiesOf('Task List', module)
  .add('default', () => <TaskList/>);