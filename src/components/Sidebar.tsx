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
      <div className="text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiMenuBurger />
      </div>
      <div
        className={`fixed px-4 py-6 top-0 right-0 w-full h-full bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button className="text-white text-2xl flex justify-end w-full pb-4"
          onClick={() => setIsOpen(!isOpen)}>
          <FiX />
        </button>
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
    </>
  );
};

export default Sidebar;
