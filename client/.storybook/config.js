import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Theme from './../src/ui/theme';
import { withA11y } from '@storybook/addon-a11y';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';

const req = require.context('../src/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withA11y)
addDecorator(withThemesProvider([Theme]));

configure(loadStories, module);