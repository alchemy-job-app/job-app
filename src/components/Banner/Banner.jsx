import React from 'react';

export default function Banner() {
  return (
    <div className="flex items-stretch text-white bg-white">
      <div className="flex relative bg-no-repeat bg-cover items-center bg-banner bg-center h-96">
        <div className="w-screen px-24 z-10">
          <h1 className="text-5xl font-bold text-left text-white">
            Get that job!
          </h1>
          <p className="text-3xl my-4 text-white">
            Organize and store your job applications
          </p>
        </div>
      </div>
    </div>
  );
}
