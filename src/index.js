import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import UpdateProfileProvider from './contexts/updateProfileContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UpdateProfileProvider>
      <App />
    </UpdateProfileProvider>
  </BrowserRouter>
);