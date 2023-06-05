import { render } from 'react-dom';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './shared/config/i18n/i18';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import React from 'react';

render(
  <ThemeProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ThemeProvider>,
  document.getElementById('root')
);
