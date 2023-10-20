import {createBrowserRouter} from 'react-router-dom';
import App from "../apps/App.jsx";
import Home from "../apps/Home/Home.jsx";
import authRoutes from "../apps/Auth/services/auth.routes.js";

const Root =createBrowserRouter([
    {
        path: '/',
        Component:App,
        children:[
            {
                path:'/',
                Component:Home
            },
            ...Array.from(authRoutes)
        ]
    }
])

export default Root