import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import axios from 'axios';
import Apps from './components/Apps';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: async () => {
          const res = await axios.get("/apps.json");
          return res.data;
        }
      },
      {
        path: "/apps",
        element: <Apps />,
        loader: async () => {
          const res = await axios.get("/apps.json");
          return res.data;
        }
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
