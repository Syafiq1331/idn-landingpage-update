import React from 'react';
import Card from './Card';
import StudyGroup from '../assets/kegiatan/1.jpg';
import AWSEvent from '../assets/kegiatan/2.jpg';
import Training from '../assets/kegiatan/3.jpg';
import MeetingAsik from '../assets/kegiatan/4.jpg';

interface KegiatanMahasiswaProps { }

const KegiatanMahasiswa: React.FC<KegiatanMahasiswaProps> = ({ }) => {
  return (
    <div className='py-12 px-8'>
      <h1 className='text-3xl font-extrabold'>KEGIATAN MAHASISWA
        <br />
        POLITEKNIK IDN</h1>
      <div className='flex flex-wrap justify-between items-center'>
        <p className='w-[35rem] text-slate-900 py-4'>
          Berbagai Kegiatan dan Event yang kami adakan selalu berusaha memberikan dampak
          Positif dan Bermanfaat untuk Ummat.
        </p>
        <button
          className='border-slate-900 hover:bg-slate-900 hover:text-white font-semibold border-2 text-slate-900 px-6 py-2 rounded-lg'
        >
          Selengkapnya
        </button>
      </div>
      <div>
        <div className='grid grid-cols-2 lg:gap-24 gap-6 lg:px-24 lg:py-12 py-4'>
          <Card
            title='Study Grup'
            className='lg:col-span-1 col-span-2'
            desc='Rutin membuka Grup Belajar bersama para Expert di bidangnya masing-masing'
            img={StudyGroup}
            alt='Kegiatan Mahasiswa'
            classNameParagraph='text-slate-900 px-4 pb-4'
          />
          <Card
            title='AWS Event'
            className='lg:col-span-1 col-span-2'
            desc='Mengikuti Event besar dari AWS grup pada tanggal 1 September 2020,, dan jumpa dengan orang-orang hebat ,seperti pak Uno'
            img={AWSEvent}
            alt='AWS Event'
            classNameParagraph='text-slate-900 px-4 pb-4'
          />
          <Card
            title='Training'
            className='lg:col-span-1 col-span-2'
            desc='Memberikan Edukasi dan Mentoring terkait sertifikasi Goodle IT Support di berbagai kota, salah satunya Banyumas'
            img={Training}
            alt='Training'
            classNameParagraph='text-slate-900 px-4 pb-4'
          />
          <Card
            title='Meeting Asik'
            className='lg:col-span-1 col-span-2'
            desc='Ini adalah pertemuan penuh suka bersama panitia IT Fest tahun 2021'
            img={MeetingAsik}
            alt='Meeting Asik'
            classNameParagraph='text-slate-900 px-4 pb-4'
          />
        </div>
      </div>
    </div>
  );
};

export default KegiatanMahasiswa;
