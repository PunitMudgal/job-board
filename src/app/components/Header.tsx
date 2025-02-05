import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/blue.png";
import style from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center ">
      <div className="flex items-center">
        {/* <Image
          className="brightness-0"
          src={logo}
          alt="logo_image"
          width={50}
          priority
        /> */}
        <span className="font-bold text-2xl">
          Forever<span className="text-purple-700">Job.</span>{" "}
        </span>
      </div>
      <div className="flex items-center">
        <Link
          href={"/create"}
          className=" rounded-md bg-purple-700 px-5 py-3 text-white sm:py-2 "
        >
          Post a Job
        </Link>
        <Link href={"/login"} className={style.loginBtn}>
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
