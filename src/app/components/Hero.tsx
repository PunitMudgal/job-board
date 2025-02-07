import React from "react";
import job_hunt from "../../../public/icons/startup-launch.svg";
import Image from "next/image";
import Brands from "./Brands";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="hero padding ">
      <div className="flex justify-around items-center w-full ">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-7xl font-bold md:text-5xl sm:text-3xl">
            Find your
            <br />
            <span className="text-cyan-500">Dream Job,</span>
            <br />
            Today!
          </h1>
          <p className="text-md font-semibold sm:text-xs">
            Find Your Dream Job Explore Top Opportunities & Get Hired Faster🚀
          </p>
        </div>
        <Image
          src={job_hunt}
          height={0}
          width={0}
          alt="img"
          // className="h-80 md:h-56 w-auto sm:h-40 "
          className="h-80 w-auto md:w-56 md:h-auto sm:w-40"
        />
      </div>
      <Search />

      <Brands />
    </div>
  );
};

export default Hero;
