import React from "react";
import { Card, Button, Checkbox, Label, TextInput } from "flowbite-react";
const Login: React.FC = () => {
    return (
        <main className="w-full min-h-screen flex justify-center items-center bg-slate-400">
            <Card className="max-w-sm cursor-default">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Login to the app
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Enter your credentials to access the app.
                </p>
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
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
