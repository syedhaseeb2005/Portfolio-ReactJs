import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

      <div class="text-white font-bold p-3 bg-gray-800 rounded-md shadow-lg">
        Syed Haseeb
      </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="bg-gray-800 rounded-md shadow-lg py-1 text-white font-bold">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="bg-gray-800 rounded-md shadow-lg py-1 text-white font-bold">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="bg-gray-800 rounded-md shadow-lg py-1 text-white font-bold">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="bg-gray-800 rounded-md shadow-lg py-1 text-white font-bold">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="bg-gray-800 rounded-md shadow-lg py-1 text-white font-bold">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 gap-3`}
      >
        <li className="py-6 px-6  bg-gray-800 rounded-md shadow-lg text-white font-bold">
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 px-6 bg-gray-800 rounded-md shadow-lg  text-white font-bold">
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 px-7  bg-gray-800 rounded-md shadow-lg text-white font-bold">
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 px-7  bg-gray-800 rounded-md shadow-lg  text-white font-bold">
          <Link onClick={handleNav} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 px-5  bg-gray-800 rounded-md shadow-lg text-white font-bold">
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/syed-haseeb-ahmed-80464025a/"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/syedhaseeb2005?tab=repositories"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:haseebsyed901@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
