import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 pb-16 border-b-[1px] border-zinc-700">
        <h1 className="nav-a tracking-tight text-7xl">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh] rounded-xl"
          >
            <h1 className="absolute flex overflow-hidden w-fit text-[#cdea68] text-nowrap z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter text-8xl font-semibold">
              {"SALIENCELABS".split("").map((letter, idx) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: idx * 0.05,
                  }}
                  className="inline-block"
                  key={idx}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] rounded-xl"
          >
            <h1 className="absolute flex overflow-hidden w-fit text-[#cdea68] text-nowrap z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter text-8xl font-semibold">
              {"FYDE".split("").map((letter, idx) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: idx * 0.1,
                  }}
                  className="inline-block"
                  key={idx}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
