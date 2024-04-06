import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Register from './pages/auth/register.jsx';
import Login from './pages/auth/login.jsx';
import Dashboard from './pages/admin/dashboard.jsx';
import ProductIndex from './pages/admin/product/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/admin',
        element: <Dashboard />,
    },
    {
        path: '/admin/product',
        element: <ProductIndex />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
