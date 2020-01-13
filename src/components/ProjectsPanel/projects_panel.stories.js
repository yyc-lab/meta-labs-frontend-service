import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ProjectsPanel } from './ProjectsPanel';


storiesOf('ProjectsPanel', module)
  .add('default', () => <ProjectsPanel/>);