import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This applies Tailwind styles
import './debug.css';   // this will outline the page in red


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
