import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', onClick }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${
        onClick ? 'cursor-pointer hover:scale-105 transform transition-transform duration-200' : ''
      } ${className}`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold text-text mb-4">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;