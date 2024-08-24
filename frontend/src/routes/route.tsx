import { createBrowserRouter } from "react-router-dom";

import Test from "../components/test";
import Route2 from "../components/route2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Test />,
    },
    {
        path: "/route2",
        element: <Route2 />,
    },
]);
export default router;
