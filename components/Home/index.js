import React from 'react'
import Image from 'next/image';
const Home = () => {
  return (
    <div className="font-bold flex flex-col gap-4 justify-center items-center h-screen bg-white p-2">
      <div className="h-1/2 w-5/12 relative rounded-lg">
        <Image
          src="/profile_banner.jpg"
          alt="Picture of the author"
          className="rounded-lg"
          layout="fill"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // Optionally allows to add a blurred version of the image while loading
          placeholder="blur"
        />
      </div>
      <p className="text-7xl text-gray-700">Preveen Raj</p>
    </div>
  )
}

export default Home;
