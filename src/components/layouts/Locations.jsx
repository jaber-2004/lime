import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import locationOne from "/src/assets/locationOne.png";
import locationTwo from "/src/assets/locationTwo.png";
import locationThree from "/src/assets/locationThree.png";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Locations = () => {
 var settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoSpeed: 1500,
 };
  return (
    <Container className={"py-21"}>
      <div className="text-center">
        <h4 className="text-[#00B200] text-[20px] font-poppins">Locations</h4>
        <h3 className="text-black text-[40px] font-poppins">Our U.S. Cities</h3>
      </div>
      {/* <Flex className={"gap-x-5 mt-14"}> */}
      <div className=" -mx-2 mt-10">
        <Slider {...settings}>
          <div className="px-2 outline-0">
            <Images srcImg={locationOne} />
            <div className="flex items-center gap-x-2 mt-4 text-black text-[20px] font-poppins">
              <h4 className="underline">New York </h4>
              <FaArrowRight />
            </div>
          </div>
          <div className="px-2 outline-0">
            <Images srcImg={locationTwo} />
            <div className="flex items-center gap-x-2 mt-4 text-black text-[20px] font-poppins">
              <h4 className="underline">San Francisco </h4>
              <FaArrowRight />
            </div>
          </div>
          <div className="px-2 outline-0">
            <Images srcImg={locationThree} />
            <div className="flex items-center gap-x-2 mt-4 text-black text-[20px] font-poppins">
              <h4 className="underline">Washington, DC</h4>
              <FaArrowRight />
            </div>
          </div>
          <div className="px-2 outline-0">
            <Images srcImg={locationTwo} />
            <div className="flex items-center gap-x-2 mt-4 text-black text-[20px] font-poppins">
              <h4 className="underline">San Francisco </h4>
              <FaArrowRight />
            </div>
          </div>
        </Slider>
      </div>
      {/* </Flex> */}
    </Container>
  );
};

export default Locations;
