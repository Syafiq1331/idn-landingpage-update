import React from 'react';
import gambar from '../assets/pmb/pendaftaran.png';

interface AboutIDNProps { }

const AboutIDN: React.FC<AboutIDNProps> = ({ }) => {
  return (
    <>
      <img src={gambar}
        alt="gambar"
        className='w-full h-96 lg:object-cover lg:col-span-1 col-span-3
        object-cover object-center
        '
      />
      <div className='w-full lg:col-span-2 col-span-3 lg:px-0 px-4 py-2'>
        <h6 className='py-2 font-semibold'>Tentang Politeknik IDN Bogor</h6>
        <h3 className='py-2 font-extrabold text-3xl'>Sejarah singkat Politeknik IDN Bogor</h3>
        <p className='py-2'>
          Sekolah SMP dan SMK IDN berada dibawah Yayasan IDN dengan pembina bapak Dedi Gunawan, MT, CCIE. SMP dan SMK IDN memiliki keunggulan utama di bidang IT (teknologi informasi) yang mengacu pada kebutuhan industri IT Internasional. Setiap anak terutama untuk jenjang SMK akan disiapkan untuk memiliki skill dan sertifikasi untuk berkiprah di dunia internasional.
        </p>
        <button className='
          bg-slate-900 text-white rounded-lg px-6 py-4 my-4
          '>
          Selengkapnya
        </button>
      </div>
    </>
  );
};

export default AboutIDN;
