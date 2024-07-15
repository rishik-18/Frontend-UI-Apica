import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from './pages/Orders';

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Dashboard />},
        { path: "orders", element: <Orders />}
    ]);

    return element;
};

export default ProjectRoutes;