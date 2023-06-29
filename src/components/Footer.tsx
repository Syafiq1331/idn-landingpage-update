import React from 'react';
import logo from '../assets/logoIDN.png';

interface FooterProps { }

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <footer className='bg-blue-700 px-12 py-24 text-white grid lg:grid-cols-4 grid-cols-1 lg:gap-y-0 gap-y-4'>
      {/* col-1 */}
      <div className='lg:col-span-2'>
        <div className='text-white flex items-center gap-x-2'>
          <img src={logo} alt="logo" className='lg:w-24 w-20' />
          <p className='text-lg font-bold'>
            POLITEKNIK
            ISLAMIC <br />
            DEVELOPMENT
            NETWORK
          </p>
        </div>
        <p className='mt-2'>
          Kuliah IT gratis sepanjang masa, terletak di Jonggol, Sukanegara, Bogor dibawah Yayasan IDN. Fokus pembelajaran menjadikan para mahasiswa Expert atau jagoan IT pinter ngaji.
        </p>
      </div>

      {/* col-2 */}
      <div className=''>
        <h3 className='text-lg font-semibold'>Profile</h3>
        <ul className='mt-2'>
          <li>
            <a href="/about">
              Tentang Politeknik IDN
            </a>
          </li>
          <li>
            <a href="">
              Prestasi
            </a>
          </li>
          <li>
            <a href="/">
              PMB
            </a>
          </li>
          <li>Kontak</li>
        </ul>
      </div>

      {/* col-3 */}
      <div>
        <h3 className='text-lg font-semibold'>Social media</h3>
        <ul className='mt-2'>
          <li>
            <a href="https://www.facebook.com/idnboardingschool/">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/politeknik_idn/">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@IDNTV2022">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
