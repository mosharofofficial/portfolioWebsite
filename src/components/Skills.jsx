import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";

const Skills = () => {
  return (
    <div className="mt-[100px] border-x-[4px] py-10 mb-[100px]">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl border-b-2 border-white pb-4 mb-[40px] px-10">
          Front-End Skills{" "}
        </h2>
        <div
          id="FEWrapper"
          className="w-full flex flex-wrap px-5 items-center justify-center gap-10"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <FaHtml5 />
            </span>
            <p className="text-2xl">HTML5</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <FaCss3Alt />
            </span>
            <p className="text-2xl">CSS3</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <RiTailwindCssFill />
            </span>
            <p className="text-2xl">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <SiJavascript />
            </span>
            <p className="text-2xl">JavaScript</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <FaReact />
            </span>
            <p className="text-2xl">React</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center my-[100px]">
        <h2 className="text-3xl border-b-2 border-white pb-4 mb-[40px] px-10 ">
          Back-End Skills{" "}
        </h2>
        <div
          id="BEWrapper"
          className="w-full flex flex-wrap px-5 items-center justify-center gap-10"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <SiExpress />
            </span>
            <p className="text-2xl">Express.js</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <FaNodeJs />
            </span>
            <p className="text-2xl">Node.js</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <BiLogoMongodb />
            </span>
            <p className="text-2xl">MongoDB</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <SiFirebase />
            </span>
            <p className="text-2xl">Firebase</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-[100px]">
              <SiJsonwebtokens />
            </span>
            <p className="text-2xl">JWT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
