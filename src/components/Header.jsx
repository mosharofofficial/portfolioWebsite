import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="min-h-[30vh] border-t-[4px] p-10 border-x-[4px] flex items-center sm:items-start mt-[100px] justify-center ">
        <img
          src="https://i.ibb.co.com/JvNYT1P/BT-6576.jpg"
          className="w-[150px] h-[200px] object-cover object-top border-2 border-white"
        />
        <div className=" flex flex-col justify-start items-start">
          <h1 className="text-5xl md:text-7xl font-anton px-3 pb-2 mb-2 border-b-2">
            {/* <span className="drop-shadow-[6px_4px_0px_#ffd700] hover:text-accent hover:drop-shadow-[6px_4px_0px_#fff] transition-all hover:transition-all duration-[300ms] hover:duration-[300ms]"> */}
            MOSHAROF HOSSAIN
            {/* </span> */}
          </h1>
          <h2 className="text-3xl pl-4">Web developer</h2>
          <p className=" pl-4 mt-6 hidden sm:block max-w-[490px] md:max-w-[500px]">
            Passionate Web Developer with a strong foundation in modern web
            development technologies.
          </p>
        </div>
      </div>
        <p className=" px-4 mt-6  sm:hidden mx-auto max-w-[490px] md:max-w-[500px]">
          Passionate Web Developer with a strong foundation in modern web
          development technologies.
        </p>
    </div>
  );
};

export default Header;
