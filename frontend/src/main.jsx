import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './UserContext';  // Import UserProvider

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>  {/* Wrap App with UserProvider */}
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
