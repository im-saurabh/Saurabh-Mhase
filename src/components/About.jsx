import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 mb-5">
          I have a solid understanding of front-end web development
          technologies, including HTML, CSS, JavaScript, and popular frameworks
          such as ReactJS and Bootstrap.
        </p>

        <br />

        <p className="text-xl mb-5">
          Additionally, I am familiar with modern development tools and
          libraries such as Visual Studio, GitHub, and Vite, which enables me to
          deliver high-quality code that meets industry standards
        </p>

        <br />

        <p className="text-xl">
          As a web developer, I am passionate about creating innovative and
          user-friendly websites. I strive to stay up-to-date with the latest
          trends in web development and continuously expand my skills. I am
          excited to contribute to projects that will enable me to develop my
          skills and expertise further.
        </p>
      </div>
    </div>
  );
};

export default About;
