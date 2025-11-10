import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

// Create a container element for the React app instead of relying on one in the HTML
const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

// Mount the app to the dynamically created element
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
