import React from 'react';

interface CardProps {
  img: string;
  title: string;
  alt: string;
  desc: string;
  className?: string;
  classNameParagraph?: string;
}

const Card: React.FC<CardProps> = ({ img, title, desc, alt, className, classNameParagraph }) => {
  return (
    <div className={
      ('bg-white rounded-lg shadow-lg ' + (className ? className : ''))
    }>
      <img src={img} alt={alt} className='mx-auto  py-4' />
      <div className={classNameParagraph}>
        <h3 className='py-2 font-semibold text-xl'>{title}</h3>
        <p >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
