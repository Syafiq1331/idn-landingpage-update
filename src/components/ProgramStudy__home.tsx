import React from 'react';
import Card from './Card';
import gambar_1 from '../assets/program/designer.png';
import gambar_2 from '../assets/program/programmer.png';
import gambar_3 from '../assets/program/enginerr.svg';

interface ProgramStudyProps { }

const ProgramStudy: React.FC<ProgramStudyProps> = ({ }) => {
  return (
    <>
      <div className='text-center text-slate-900'>
        <h2 className='font-bold text-3xl'>Program Study Politeknik</h2>
        <p className='lg:px-0 px-6'>IDN memiliki 3 program pembelajaran yang menyelenggarakan program Terapan 4 atau D4</p>
      </div>
      <div className='grid grid-cols-3 gap-8 lg:px-12 px-16 lg:my-6 my-8'>
        <Card
          className='lg:col-span-1 col-span-3 p-4'
          img={gambar_1}
          title='Design Komunikasi Visual'
          desc='Jurusan yang mempelajari konsep komunikasi dan ungkapan kreatif, teknik dan media dengan memanfaatkan elemen-elemen visual untuk menyampaikan pesan untuk tujuan tertentu.'
          alt='gambar'
        />
        <Card
          className='lg:col-span-1 col-span-3 p-4'
          img={gambar_2}
          title='Rekayasa Perangkangkat Lunak'
          desc='Jurusan yang mempelajari dan mendalami semua cara-cara pengembangan perangkat lunak termasuk pembuatan, pemeliharaan, manajemen organisasi pengembangan perangkat lunak dan manajemen kualitas.'
          alt='gambar'
        />
        <Card
          className='lg:col-span-1 col-span-3 p-4'
          img={gambar_3}
          title='Teknik Komputer Jaringan'
          desc='Jurusan yang bertugas merancang arsitektur jaringan, serta melakukan perawatan dan pengelolaan jaringan dalam suatu instansi atau perusahaan.'
          alt='gambar'
        />
      </div>
    </>
  );
};

export default ProgramStudy;
