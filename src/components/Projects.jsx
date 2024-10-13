import React from "react";

const Projects = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center p-10 border-x-[4px] "
    >
      <h2 className="text-3xl border-b-2 border-white pb-4 mb-[40px] px-10 ">
        Projects{" "}
      </h2>
      <div className="grid">
        <div className="flex flex-col min-w-[390px] border-2 rounded-md max-w-[500px]">
          <h3 className="text-2xl p-2 mb-2 border-b-[2px]">
            Name: BloodSpring
          </h3>
          <h3 className="text-2xl p-2 mb-2 border-b-[2px] ">
            Live site:&nbsp;
            <a
              className="underline"
              target="_blank"
              href="https://bloodspring-7db88.web.app/"
            >
              https://bloodspring-7db88.web.app/
            </a>
          </h3>
          <h3 className="text-lg p-2 mb-2 ">
            Github(Front-End):&nbsp;
            <a
              className="underline"
              target="_blank"
              href="https://github.com/Rasc3ta/BloodSpring"
            >
              https://github.com/Rasc3ta/BloodSpring
            </a>
          </h3>
          <h3 className="text-lg p-2 mb-2 border-b-[2px]">
            Github(Back-End):&nbsp;
            <a
              className="underline"
              target="_blank"
              href="https://github.com/Rasc3ta/BloodSpring-server"
            >
              https://github.com/Rasc3ta/BloodSpring-server
            </a>
          </h3>
          <p className="p-2">
            <span className="text-2xl ">Description: </span>
            Bloodspring is a blood donation platform where users create
            accounts, post requests, and connect with donors who can contact
            them directly to provide help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
