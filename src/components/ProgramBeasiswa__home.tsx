import React from 'react';
import customBg from '../assets/program/bg.jpg';

interface ProgramBeasiswaProps { }

const ProgramBeasiswa: React.FC<ProgramBeasiswaProps> = ({ }) => {
  return (
    <div className='h-screen flex justify-center flex-wrap text-white relative bg-fixed bg-center bg-cover bg-no-repeat' style={{
      opacity: '0.8',
      backgroundImage: `url(${customBg})`
    }}>
      <div className='mt-[25rem]'>
        <h1 className='text-4xl font-extrabold text-center'>Program Beasiswa IDN</h1>
        <p className='text-xl px-4 text-center'>Kami terbuka dan siap merangkul tangan pemuda pemudi untuk tumbuh dan berkembang bersama.</p>
        <div className='
          grid justify-center my-4
        '>
          <button
            className='border-white hover:bg-white hover:text-slate-900 font-semibold border-2 text-white px-6 py-2 rounded-lg'
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramBeasiswa;
