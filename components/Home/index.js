import React, { useState } from 'react'
import Socials from './Socials';
import Default from './Default';
import Experience from './Experience';
import Projects from './Projects';

const Home = ({
  tab
}) => {

  const renderView = () => {
    switch (tab) {
      case 'projects':
        return <Projects />
      case 'experience':
        return <Experience />
      default:
        return <Default />
    }
  }

  return (
    <div>
      <div>
        <div className="header">
          <div className="inner-header flex">
            <div className="h-1/2 w-full md:w-4/6 relative">
              {renderView()}
            </div>
          </div>
          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <div className="content flex flex-col">
          <h1 className="font-bold text-3xl">Preveen Raj</h1>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Home;
