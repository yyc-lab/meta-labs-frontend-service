import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NewProject } from './NewProject';


storiesOf('New Project Page', module)
  .add('default', () => <NewProject/>);