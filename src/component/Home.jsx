import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Syed Haseeb
        </h1>
        <h2 className="text-4xl sm:text-6xl py-3 font-bold text-[#8892b0]">
          I'm a Mern Stack Developer
        </h2>
        <p className="text-[#8892b0] py-3 max-w-[700px]">
          I am a MERN stack developer passionate about crafting dynamic and
          user-centric web applications. With expertise in MongoDB, Express.js,
          React, and Node.js, I bring creativity and efficiency to every
          project.
        </p>
        <div className="flex gap-3">
          <Link to="work" smooth={true} duration={500}>
            <button className="flex rounded-lg group items-center cursor-pointer text-white border-2 p-2 gap-3 hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
          <a download href="/">
            <button className="flex rounded-lg  items-center cursor-pointer text-white border-2 p-2 gap-3 hover:bg-pink-600 hover:border-pink-600">
              Download Cv
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
