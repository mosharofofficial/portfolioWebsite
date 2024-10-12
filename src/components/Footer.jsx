import React from "react";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-black border-[4px] border-t-0 my-[100px] p-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl border-b-2 border-white pb-4 mb-[40px] px-10 ">
        My Contact &amp; Other Links
      </h2>
      <ul className=" flex flex-col gap-4 items-start justify-center text-xl min-w-[400px] p-4">
        <li className="flex flex-row flex-nowrap items-center gap-2">
          <span className="text-[30px]">
            <CgMail />
          </span>
          Email: mosharofofficial1415@gmail.com
        </li>
        <li className="flex flex-row flex-nowrap items-center gap-2">
          <span className="text-[30px] ">
            <FaLinkedin />
          </span>
          <span>
            LinkedIn:{" "}
            <a
              className="hover:underline"
              target="_blank"
              href="https://www.linkedin.com/in/mosharofofficial1415"
            >
              linkedin.com/in/mosharofofficial1415
            </a>
          </span>
        </li>
        <li className="flex flex-row flex-nowrap items-center gap-2">
          <span className="text-[30px]">
            <FaGithub />
          </span>
          <span>
            {" "}
            Github:&nbsp;
            <a
              target="_blank"
              className="hover:underline"
              href=" https://github.com/rasc3ta"
            >
              github.com/rasc3ta
            </a>
          </span>
        </li>
        <li className="flex flex-row flex-nowrap items-center gap-2">
          <span className="text-[30px]">
            <PiReadCvLogoFill />
          </span>
          <span>
            {" "}
            Resume:&nbsp;
            <a
              target="_blank"
              className="hover:underline"
              href="https://drive.google.com/file/d/1Qa5Z3lTKelZslk6fJwDZLf1R5UKj5pcQ/view?usp=sharing"
            >
              Click here for resume
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
