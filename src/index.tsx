import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { MyComponent } from './App';
import { createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




root.render(
  <App />
);
// root.render(<MyComponent />);