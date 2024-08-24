import React from "react";
import Nav from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;
