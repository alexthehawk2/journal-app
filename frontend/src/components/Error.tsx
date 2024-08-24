import { Button } from "flowbite-react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <div>
                <span>You are lost.</span>
                <Link to={"/"}>
                    <Button>Let's get you back.</Button>
                </Link>
            </div>
        </div>
    );
}
