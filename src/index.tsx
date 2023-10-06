import { render } from 'react-dom';
import { App } from './app/App';
import './shared/config/i18n/i18';
import React from 'react';
import Provider from './components/Providers';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
