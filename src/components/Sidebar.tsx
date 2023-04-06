import React from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FiX } from "react-icons/fi";

interface SidebarProps {
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(isOpen)

  return (
    <>
      <div className={
        ("text-white text-4xl " + (isOpen ? "hidden" : "block"))
      }
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiMenuBurger />
      </div>
      <div
        className={`fixed px-4 py-6 top-0 left-0 w-4/5 h-full bg-gray-800 transition-all duration-300 opacity-90 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div
          className='flex flex-col gap-y-2 text-white'
        >
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Academic</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/https://pmb.idn.ac.id/">PMB</Link>
        </div>
      </div>
      <button className={
        ("text-white text-4xl " + (isOpen ? "block" : "hidden"))
      }
        onClick={() => setIsOpen(!isOpen)}>
        <FiX />
      </button>
    </>
  );
};

export default Sidebar;
