import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Guide from './pages/Guide';
import Packages from './pages/Packages';
import Destiny from './pages/Destiny';
import Blog from './pages/Blog'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "guide",
    element: <Guide />,
  },
  {
    path: "packages",
    element: <Packages />,
  },
  {
    path: "destiny",
    element: <Destiny />,
  },
  {
    path: "blog",
    element: <Blog />,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


