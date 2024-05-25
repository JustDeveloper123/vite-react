import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './src/assets/index.scss';

import App from './src/components/App.jsx';

const rootSelector = document.getElementById('root');
const root = ReactDOM.createRoot(rootSelector);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
