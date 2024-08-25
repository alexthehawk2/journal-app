import React, { useRef, useState } from "react";
import { Card, Button, Checkbox, Label, TextInput } from "flowbite-react";
import axiosClient from "../../services/axios-client";
const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        const payload = {
            email,
            password,
            password_confirmation : confirmPassword,
        };
        console.log(payload);

        axiosClient.post("/register", payload).then((data) => {
            console.log(data);
        });
    };
    return (
        <main className="w-full min-h-screen flex justify-center items-center bg-slate-400">
            <Card className="max-w-sm cursor-default">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Registration
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Register as a user to start using the app.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex max-w-md flex-col gap-4"
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@example.com"
                            required
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            value={email}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput
                            id="password"
                            type="text"
                            required
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="confirm_password"
                                value="Confirm password"
                            />
                        </div>
                        <TextInput
                            id="confirm_password"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(event) => {
                                setConfirmPassword(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </main>
    );
};

export default Login;
