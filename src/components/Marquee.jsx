import React from "react";
import { motion } from "motion/react"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.0001' className="w-full py-12 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] ">
      <div className="text border-t-2 border-b-2 flex items-center justify-center whitespace-nowrap border-zinc-400 overflow-hidden">
        {["we are ochi", "we are ochi", "we are ochi"].map((item, idx) => (
          <motion.h1
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="landingPage-h1 text-[22vw] leading-none uppercase pr-10"
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
