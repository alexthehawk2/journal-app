import { createBrowserRouter } from "react-router-dom";

import About from "../components/About";
import ErrorPage from "../components/Error";
import BlogListing from "../components/BlogListing";
import Root from "./root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <BlogListing />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);
export default router;
