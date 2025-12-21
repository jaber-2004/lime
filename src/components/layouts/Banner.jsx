import React from "react";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/banner.png')] bg-cover bg-center bg-no-repeat pt-[400px] pb-[250px] text-center">
      <h1 className="text-7xl text-white font-poppins">Ride Green</h1>
      <div className="mt-8">
        <Button
          className={
            "hover:bg-transparent duration-300 inline-block hover:text-white hover:border-white cursor-pointer"
          }
          btnText={"Our cities"}
        />
        <Button
          className={
            "hover:bg-transparent duration-300 inline-block hover:text-white hover:border-white cursor-pointer ml-4"
          }
          btnText={"Download the App"}
        />
      </div>
    </div>
  );
};

export default Banner;
