import React from 'react';
import ImageNotFound from '@/assets/svgs/not-found.svg';

const NotFoundMessage: React.FC = () => (
  <>
    <img src={ImageNotFound} alt="vector not found" />
    <h1 className="mt-5 font-roboto-slab font-bold text-3xl">Page not Found!</h1>
  </>
);

export default NotFoundMessage;