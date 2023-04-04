import React from 'react';
import Header from '../components/Header';

interface AboutProps { }

const About: React.FC<AboutProps> = ({ }) => {
  return (
    <Header>
      <div className='lg:px-0 px-4'>
        <h1>Hello world About</h1>
      </div>
    </Header>
  );
};

export default About;
