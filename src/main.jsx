// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import global styles
import App from './App'; // Import the main App component

// Create a root and render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);