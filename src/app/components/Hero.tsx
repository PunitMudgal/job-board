import React from "react";
import job_hunt from "../../../public/icons/startup-launch.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="flex justify-around items-center w-full">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-7xl font-bold md:text-5xl">
            Find your
            <br />
            <span className="text-cyan-600">Dream Job,</span>
            <br />
            Today!
          </h1>
          <p className="text-md font-semibold">
            Find Your Dream Job Explore Top Opportunities & Get Hired Faster🚀
          </p>
        </div>
        <Image src={job_hunt} height={350} alt="img" className="self-end" />
      </div>
      <div className="relative mx-auto mt-5 w-fit">
        <input
          placeholder="Search by company, profile..."
          className="input mx-auto search-input-shadow focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-[420px] transition-all  focus:w-[600px] outline-none md:focus:w-[420px]"
          name="search"
          type="search"
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
