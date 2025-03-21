import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-9 00 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full flex items-center justify-center rounded-xl h-full  bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochi"
          />
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2025
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="card  relative flex items-center justify-center w-1/2 rounded-xl h-full  bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochi"
          />
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2025
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full  bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochi"
          />
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2025
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
