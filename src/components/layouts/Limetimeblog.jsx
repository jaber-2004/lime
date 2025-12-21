import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import blogOne from "/src/assets/limeblogOne.png";
import blogTwo from "/src/assets/limeblogTwo.png";
import blogThree from "/src/assets/limeblogThree.png";
import Button from "../Button";

const Limetimeblog = () => {
  return (
    <div className="bg-[#1E1E1E] pt-18 pb-12">
      <Container>
        <div className="text-center">
          <h4 className="text-[#00B200] text-[20px] font-poppins">Why Lime</h4>
          <h3 className="text-black text-[40px] font-poppins">
            Our Core Principles
          </h3>
        </div>
        <Flex className={"gap-x-5 justify-center mt-10"}>
          <div className="w-1/3">
            <Images srcImg={blogOne} />
            <h4 className="text-[#00DD00] text-base font-bold font-poppins pt-5 pb-3">
              Sustainability
            </h4>
            <h3 className="text-white text-[28px] font-poppins leading-11">
              With Our Industry-Leading Net-Zero Target Validated Our Hard Work
              Continues
            </h3>
            <p className="text-white text-base font-poppins pt-6">
              by Andrew Savage | January 16, 2024
            </p>
          </div>
          <div className="w-1/3">
            <Images srcImg={blogTwo} />
            <h3 className="text-white text-[28px] font-poppins pt-5">
              Hero of the Month: Respire
            </h3>
            <p className="text-white text-base font-poppins pt-[149px]">
              January 10, 2024
            </p>
          </div>
          <div className="w-1/3">
            <Images srcImg={blogThree} />
            <h3 className="text-white text-[28px] font-poppins pt-5 leading-11">
              Lime Recaps 2023 With Its Annual ​‘Ride Replay’
            </h3>
            <p className="text-white text-base font-poppins pt-[108px]">
              December 13, 2023
            </p>
          </div>
        </Flex>
        <div className="text-center mt-14">
          <Button
            className={"inline-block cursor-pointer"}
            btnText={"View More"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Limetimeblog;
