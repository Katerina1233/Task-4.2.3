import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { mantineTheme } from './theme/mantineTheme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={mantineTheme}>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
);
