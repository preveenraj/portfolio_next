import React, { useContext, useState } from "react";
import classnames from "classnames";

const Nav = () => {

  return (
    <>
      {/* navbar goes here */}
      <nav className="h-12 absolute top-0 right-0 w-full z-50">
        <div className="h-full flex items-center justify-center md:justify-end font-bold text-xl text-gray-100 p-10">
          <div className="flex gap-4">
            <span
              onClick={() => window.location.href = "#terminal"}
              className="cursor-pointer">EXP</span>
            <span
              onClick={() => window.location.href = "#terminal"}
              className="cursor-pointer">WORK</span>
              <a href="/preveen-raj-resume.pdf" download>
              <span className="cursor-pointer">RESUME</span>
              </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
