import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import downloadOne from '/src/assets/downloadOne.png'
import downloadTwo from "/src/assets/downloadTwo.png";
import downloadThree from "/src/assets/downloadThree.png";
import { Link } from 'react-router-dom'

const Download = () => {
  return (
    <div className="bg-[#1A1A1A] py-20">
      <Container>
        <Flex className={"justify-around"}>
          <div className="">
            <Link>
              <Images srcImg={downloadOne} />
            </Link>
          </div>
          <div className="">
            <h3 className="text-white text-[40px] font-poppins">
              Download the App
            </h3>
            <Flex className={"mt-5 gap-x-5"}>
              <Link>
                <Images srcImg={downloadTwo} />
              </Link>
              <Link>
                <Images srcImg={downloadThree} />
              </Link>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Download