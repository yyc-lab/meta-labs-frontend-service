import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/__stories__', true, /\.stories\.js$/), module);
