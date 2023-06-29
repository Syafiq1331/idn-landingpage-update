import React from 'react';

interface NotFoundPageProps { }

const NotFoundPage: React.FC<NotFoundPageProps> = ({ }) => {
  return (
    <div className='
      h-screen flex justify-center items-center flex-col
    '>
      <h1 className='text-4xl font-extrabold text-center'>
        Coming Soon 👋
      </h1>
      <a href="/">
        <p className=' text-blue-700 font-semibold hover:underline mt-4 underline'>
          Back to home
        </p>
      </a>
    </div>
  );
};

export default NotFoundPage;