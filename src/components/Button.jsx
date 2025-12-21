import React from "react";

const Button = ({ className, btnText }) => {
  return (
    <div
      className={`bg-[#00DD00] border border-[#00DD00] text-black text-sm font-poppins py-3.5 px-6.5 rounded-[40px] ${className}`}
    >
      {btnText}
    </div>
  );
};

export default Button;
