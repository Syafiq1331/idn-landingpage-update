import React from 'react';
import Header from '../components/Header';
import logo from '../assets/about/intro.png';
import AboutIDN from '../components/AboutIDN__home';
import ProgramStudy from '../components/ProgramStudy__home';
import ProgramBeasiswa from '../components/ProgramBeasiswa__home';
import KegiatanMahasiswa from '../components/KegiatanMahasiswa__home';
import Footer from '../components/Footer';

interface HomeProps { }

const Home: React.FC<HomeProps> = ({ }) => {
  return (
    <>
      <Header className='h-screen
    bg-cover bg-center bg-no-repeat grid grid-rows-2 grid-cols-1 items-strech
    ' customBg={logo}>
        <section className='grid items-end h-full'>
          <div className='grid grid-cols-2 items-end'>
            <div className=' w-54 text-slate-900 lg:col-span-1 col-span-2 bg-white px-16 lg:py-[51px] md:py-20 py-6'>
              <h1 className='md:text-4xl text-2xl font-bold'>POLITEKNIK ISLAMIC DEVELOPMENT NETWORK</h1>
              <p className='text-sm md:text-lg '>Sebagai pusat pengembangan ilmu teknologi dalam lingkup islami, Politeknik IDN berusaha memberikan banyak dampak positif untuk Ummat, Nusa dan Bangsa.</p>
            </div>
            <div className='bg-blue-900/80 py-14 hidden lg:block'></div>
          </div>
        </section>
      </Header >
      <section className='py-24 grid grid-cols-3 items-center gap-x-8'>
        <AboutIDN />
      </section>
      <section className='py-24'>
        <ProgramStudy />
      </section>
      <ProgramBeasiswa />
      <KegiatanMahasiswa />
      <Footer />
    </>
  );
};

export default Home;
