import React from 'react';
import Banner from '../../components/Banner/Banner';

export default function Home() {
  return (
    <div className="bg-gunmetal h-full w-full">
      <Banner />
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-manatee text-center mt-8 mb-8">
        How Our App Works
      </h1>
      <div>
        <div className="bg-goodjob bg-center bg-cover bg-opacity-20 h-screen w-2/3 align-center items-center align-middle mx-auto"></div>
      </div>
    </div>
  );
}
