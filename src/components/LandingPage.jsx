import { motion } from "framer-motion";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-42 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, idx) => (
          <div key={idx} className="masker ">
            <div className="w-fit flex items-center">
              {idx === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[8vw] h-[5vw] relative rounded-md mr-2 bg-red-500 mt-3 bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center"
                ></motion.div>
              )}
              <h1 className="landingPage-h1 uppercase text-[7.6vw] leading-[6.4vw] font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, idx) => (
          <p className="text-md font-light leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light text-md capitalize">
            Start The Project
          </div>
          <div className="circular w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500">
            <FaLocationArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
