import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();

    return (
        <Navbar fluid className="border-gray-700 bg-gray-800">
            <Link to={"/"}>
                <Navbar.Brand href="/" as={"div"}>
                    <img
                        src="https://placehold.co/30x30"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite React Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                        Flowbite React
                    </span>
                </Navbar.Brand>
            </Link>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to={"/"}>
                    <Navbar.Link as={"span"} active={location.pathname === "/"}>
                        Home
                    </Navbar.Link>
                </Link>
                <Link to={"/about"}>
                    <Navbar.Link
                        as={"span"}
                        active={location.pathname === "/about"}
                    >
                        About
                    </Navbar.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
