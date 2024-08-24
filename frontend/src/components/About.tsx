import React from "react";

const About: React.FC = () => {
    return (
        <main className="px-2 md:px-6 lg:px-10 py-8 flex justify-center items-center">
            <div>
                <img
                    src="public/images/abir-dey-photo.jpg"
                    alt="abir-dey-photo"
                    height={300}
                    width={300}
                />
            </div>
            <div className="w-[400px] h-[380px] bg-white relative top-[100px] left-[-23px] px-4 py-4">
                <h2 className="text-4xl font-bold mb-8">Hello There!</h2>
                <h2 className="text-4xl font-bold mb-8">
                    My name is Abir <br /> and I{" "}
                    <span className="text-yellow-400">Develop</span> and
                    <br />
                    <span className="text-orange-400">Design</span> WebApps.
                </h2>
            </div>
        </main>
    );
};

export default About;
