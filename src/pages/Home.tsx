import React from 'react';
import Header from '../components/Header';
import logo from '../assets/about/intro.png';

interface HomeProps { }

const Home: React.FC<HomeProps> = ({ }) => {
  return (
    <Header className='h-screen
    bg-cover bg-center bg-no-repeat
    ' customBg={logo}>
      <div className='grid grid-cols-2 lg:pt-[308px] md:pt-[33rem] pt-[19.5rem] items-end'>
        <div className=' w-54 text-slate-900 lg:col-span-1 col-span-2 bg-white px-16 lg:py-[51px] md:py-20 py-6'>
          <h1 className='md:text-4xl text-2xl font-bold'>POLITEKNIK ISLAMIC DEVELOPMENT NETWORK</h1>
          <p className='text-sm md:text-lg '>Sebagai pusat pengembangan ilmu teknologi dalam lingkup islami, Politeknik IDN berusaha memberikan banyak dampak positif untuk Ummat, Nusa dan Bangsa.</p>
        </div>
        <div className='bg-blue-900/80 py-14 hidden lg:block'></div>
      </div>

    </Header >
  );
};

export default Home;
