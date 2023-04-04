import React from 'react';
import Header from '../components/Header';

interface ContactProps { }

const Contact: React.FC<ContactProps> = ({ }) => {
  return (
    <Header>
      <h1>Hello world contact</h1>
    </Header>
  );
};

export default Contact;
