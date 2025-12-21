import React from 'react'
import Container from '../Container'
import Flex from '../Flex';
import Images from '../Images';
import appOne from '/src/assets/theappOne.png'
import appTwo from "/src/assets/theappTwo.png";
import appThree from "/src/assets/theappThree.png";

const Theapp = () => {
  return (
    <div className="pt-17 pb-32 bg-[#EEEEEE]">
      <Container>
        <div className="text-center">
          <h4 className="text-[#00B200] text-[20px] font-poppins">The App</h4>
          <h3 className="text-black text-[40px] font-poppins">How to Lime</h3>
        </div>
        <Flex className={"mt-10 gap-x-5"}>
          <div className="w-1/3">
            <Images
              className={"rounded-tr-3xl rounded-tl-3xl w-full"}
              srcImg={appOne}
            />
            <div className="bg-white rounded-br-3xl rounded-bl-3xl flex h-35 p-7">
              <h4 className="text-[#00B200] text-[20px] font-poppins">
                Locate
              </h4>
              <p className="text-black text-sm font-poppins ml-15 leading-6">
                Download the Lime app to find a vehicle.
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <Images
              className={"rounded-tr-3xl rounded-tl-3xl w-full"}
              srcImg={appTwo}
            />
            <div className="bg-white rounded-br-3xl rounded-bl-3xl flex h-35 p-7">
              <h4 className="text-[#00B200] text-[20px] font-poppins">Scan</h4>
              <p className="text-black text-sm font-poppins ml-15 leading-6">
                Scan the QR code on the vehicle to unlock. Learn how to ride
                safely in the app.
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <Images
              className={"rounded-tr-3xl rounded-tl-3xl w-full"}
              srcImg={appThree}
            />
            <div className="bg-white rounded-br-3xl rounded-bl-3xl flex h-35 p-7">
              <h4 className="text-[#00B200] text-[20px] font-poppins">Ride</h4>
              <p className="text-black text-sm font-poppins ml-18 leading-6">
                Follow all traffic rules, stick to the streets and bike lanes
                where legally permitted.
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Theapp