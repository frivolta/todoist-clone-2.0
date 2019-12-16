import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/index';

import { App } from './App';
import './assets/styles/main.scss';

const store = configureStore();

render(<App store={store} />, document.getElementById('root'));
