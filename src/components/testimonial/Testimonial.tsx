import React from 'react';

interface Props {
  name: string;
  title: string;
  image: string;
  testimonial: string;
}

const Testimonial = ({ name, title, image, testimonial }: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 max-w-2xl mx-auto">
      <div className="flex items-center space-x-6">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={image}
          alt={`${name}`}
        />
        <div>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-gray-500 text-lg">{title}</p>
        </div>
      </div>
      <p className="mt-6 text-gray-700 text-lg">{testimonial}</p>
    </div>
  );
};

export default Testimonial;
