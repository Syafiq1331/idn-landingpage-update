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
          <li>Tentang Politeknik IDN</li>
          <li>
            <a href="lucu">
              Prestasi
            </a>
          </li>
          <li>
            <a href="https://pmb.idn.ac.id/">
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
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Youtube</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
