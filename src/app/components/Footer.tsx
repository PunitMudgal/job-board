import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 max-md:py-8">
        <div className="flex justify-between md:flex-col md:justify-center">
          <Link
            href="/"
            className="flex items-center mb-4 max-sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/assets/white.png"
              className="h-8 brightness-0"
              alt="forever Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              ForeverJobs.
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 max-sm:mb-0">
            <li>
              <Link href="#" className="hover:underline me-4 max-md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 max-md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 max-md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 max-sm:mx-auto max-lg:my-8" />
        <span className="block text-sm text-gray-500 text-center">
          &copy; 2025{" "}
          <Link href="/" className="hover:underline">
            Forever™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
