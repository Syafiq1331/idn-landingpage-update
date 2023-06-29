import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
  return (
    <nav className='bg-white rounded-lg px-4 py-4 flex gap-x-4'>
      <Link className='hover:text-blue-700 font-semibold' to="/">Home</Link>
      <Link className='hover:text-blue-700 font-semibold' to="/about">About Us</Link>
      <Link className='hover:text-blue-700 font-semibold' to="/academic">Academic</Link>
      <Link className='hover:text-blue-700 font-semibold' to="/contact">Contact Us</Link>
      <Link className='hover:text-blue-700 font-semibold' to="/pmb">PMB</Link>
    </nav>
  );
};

export default Navbar;
