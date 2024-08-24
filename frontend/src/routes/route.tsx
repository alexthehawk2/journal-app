import { createBrowserRouter } from "react-router-dom";

import About from "../components/About";
import ErrorPage from "../components/Error";
import BlogListing from "../components/BlogListing";
import Root from "./root";

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
]);
export default router;
