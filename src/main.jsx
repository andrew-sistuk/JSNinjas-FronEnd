import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'modern-normalize';
import './index.css';

import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { appState } from 'myRedux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
