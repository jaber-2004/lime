import React from 'react'
import Container from '../Container'
import Flex from '../Flex';
import Images from '../Images';
import vehiclesOne from '/src/assets/ourvehiclesOne.png'
import vehiclesTwo from '/src/assets/ourvehiclesTwo.png'

const Ourvehicles = () => {
  return (
    <Container className={"py-18"}>
      <div className="text-center">
        <h4 className="text-[#00B200] text-[20px] font-poppins">
          Our Vehicles
        </h4>
        <h3 className="text-black text-[40px] font-poppins">
          Discover the Gen4
        </h3>
      </div>
      <Flex className={"justify-center gap-x-5 mt-10"}>
        <div className="relative">
          <Images srcImg={vehiclesOne} />
          <h4 className="text-black text-[20px] font-poppins absolute left-1/2 -translate-x-1/2 bottom-10">
            E-Scooter
          </h4>
        </div>
        <div className="relative">
          <Images srcImg={vehiclesTwo} />
          <h4 className="text-black text-[20px] font-poppins absolute left-1/2 -translate-x-1/2 bottom-10">
            E-Bike
          </h4>
        </div>
      </Flex>
    </Container>
  );
}

export default Ourvehicles