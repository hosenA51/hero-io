import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import axios from 'axios';
import Apps from './components/Apps';
import ErrorPage from './components/ErrorPage';
import AppDetails from './components/AppDetails';
import Installation from './components/Installation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: async () => {
          const res = await axios.get("apps.json");
          return res.data;
        }
      },
      {
        path: "/apps",
        element: <Apps />,
        loader: async () => {
          const res = await axios.get("apps.json");
          return res.data;
        }
      },
      {
        path: "/app-details/:id",
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await axios.get("apps.json");
          const apps = res.data.find((app) => app.id === parseInt(params.id))
          return apps;
        }
      },
      {
        path: "/installation",
        element: <Installation />,
        loader: async () => {
          await new Promise((res) => setTimeout(res, 500));
          return null;
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
