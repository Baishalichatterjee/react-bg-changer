import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Assuming you have an App component in your project
import './index.css';  // If you have any global styles

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);