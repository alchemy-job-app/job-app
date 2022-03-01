import React from 'react';

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src="https://reviverestore.org/wp-content/uploads/2018/11/ocean-banner.jpg"
        alt="Avatar"
        class="object-cover w-full h-full"
      />
      <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-3xl text-center leading-4">
        this is a text
      </div>
    </div>
  );
}
