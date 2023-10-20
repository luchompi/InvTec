import AuthLayout from "../AuthLayout.jsx";
import Login from "../components/Login.jsx";

const authRoutes = [
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login
            }
        ]
    }
]

export default authRoutes