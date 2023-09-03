import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cqnf from './components/cqnf/Cqnf.tsx';

const router = createBrowserRouter([
  {
    path: '/GDesign/',
    element: <App />,
    children: [
      {
        path: '/GDesign/',
        element: <h1>Home</h1>
      },
      {
        path: '/GDesign/ce-que-nous-faisons',
        element: <Cqnf />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
