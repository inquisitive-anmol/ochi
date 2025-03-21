import React from "react";z

const About = () => {
  return (
    <div data-scroll-section data-scroll className="w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="nav-a text-[4vw] leading-[4.2vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] mt-20 pt-10 border-[#a1b562] flex">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach: </h1>
          <button className="px-10 py-6 mt-10 flex items-center  bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-3 uppercase h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh] rounded-3xl bg-[#b0c859] "></div>
      </div>
    </div>
  );
};

export default About;
