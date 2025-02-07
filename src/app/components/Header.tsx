import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/blue.png";
import style from "./header.module.css";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-[3vw] py-[2vh] ">
      <span className="font-bold text-2xl">
        Forever<span className="text-purple-700">Jobs.</span>{" "}
      </span>

      <div className="flex items-center gap-2">
        <SignedIn>
          <Link
            href={"/create"}
            className=" rounded-md bg-purple-700 px-4 py-3  text-white sm:py-2 "
          >
            Post a Job
          </Link>

          <UserButton
            showName
            signInUrl="/sign-in"
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10",
              },
            }}
          />
        </SignedIn>

        <SignedOut>
          <Link href={"/sign-in"} className={style.loginBtn}>
            Sign in
          </Link>

          <button
            className=" rounded-md bg-purple-500 px-4 py-3  text-white sm:py-2 "
            disabled
          >
            Post a Job
          </button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
