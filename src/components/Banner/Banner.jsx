import React from 'react';

export default function Banner() {
  return (
    <div className="flex items-stretch text-white bg-charcoal">
      <div className="flex relative bg-no-repeat bg-cover items-center bg-banner bg-center h-96 opacity-80">
        <div className="w-screen px-24 z-10">
          <h1 className="text-6xl font-bold text-left text-white">
            Get that job!
          </h1>
          <div className="text-3xl font-bold my-4 text-white">
            <p>Organize and track</p>
            <p>your job applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
