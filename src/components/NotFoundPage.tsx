import React from 'react';

interface NotFoundPageProps { }

const NotFoundPage: React.FC<NotFoundPageProps> = ({ }) => {
  return (
    <div className='
      h-screen flex justify-center items-center
    '>
      <h1 className='text-4xl font-extrabold text-center'>
        Coming Soon 👋
      </h1>
    </div>
  );
};

export default NotFoundPage;