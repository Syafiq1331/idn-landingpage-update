import React from 'react';
import logo from '../assets/logoIDN.png';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
  customBg?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children, customBg }) => {
  return (
    <div className={(className)} style={{
      backgroundImage: `url(${customBg})`
    }} >
      <header className={'container lg:px-8 px-4 mx-auto pt-6 '}>
        <div className='flex justify-between items-center'>
          <div className='text-white flex items-center gap-x-2'>
            <img src={logo} alt="logo" className='lg:w-24 w-20' />
            <p className='lg:text-sm text-[10px] font-bold'>
              POLITEKNIK <br />
              ISLAMIC <br />
              DEVELOPMENT <br />
              NETWORK
            </p>
          </div>
          <div className='hidden lg:block'>
            <Navbar />
          </div>
          <div className='block lg:hidden'>
            <Sidebar />
          </div>
        </div>
      </header>
      <main>
        {
          children
        }
      </main>
    </div>
  );
};

export default Header;
