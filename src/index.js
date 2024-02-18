import React from 'react'
import ReactDOM from 'react-dom/client'
import Album from './Album';
import Pic from './Pic';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Album />,
    },
    {
        path: "pic/:picId",
        element: <Pic />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)