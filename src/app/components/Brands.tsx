import React from "react";
import { brandIcons } from "../constants";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="flex mt-5 flex-col w-full ">
      <h2 className="sub-heading mx-auto">Our Hiring Partners</h2>
      <div className="brands-container">
        {" "}
        {brandIcons.map((icn) => (
          <Image
            key={icn.name}
            src={icn.icon}
            alt="brand-icon"
            width={0}
            height={0}
            style={{ width: "auto", height: "50px" }}
            className="opacity-40 brightness-0 object-cover "
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
