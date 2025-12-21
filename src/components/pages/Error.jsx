import React from "react";
import Images from "../Images";
import error from "/src/assets/error.jpg";
import Button from "../Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="relative">
      <Images className={"w-[70%] mx-auto"} srcImg={error} />
      <Link to={"/"}>
        <Button
          className={
            "absolute left-1/2 -translate-x-1/2 cursor-pointer bottom-[79px]"
          }
          btnText={"Go Home"}
        />
      </Link>
    </div>
  );
};

export default Error;
