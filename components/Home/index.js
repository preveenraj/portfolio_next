import React from 'react'
import Image from 'next/image';
const Home = () => {
  return (
    <div className="font-bold flex flex-col gap-2 justify-center items-center h-screen bg-gray-100 p-2">
      <div className="h-1/2 w-full md:w-4/6 relative">
        <Image
          src="/profile_banner.jpg"
          alt="Picture of the author"
          className="rounded-lg shadow"
          layout="responsive"
          priority={true}
          width={1920}
          height={1080}
        />
      </div>
      <p className="text-7xl text-gray-600">Preveen Raj</p>
    </div>
  )
}

export default Home;
