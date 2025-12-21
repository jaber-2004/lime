import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import logo from '/src/assets/logo.png'
import langues from "/src/assets/langues.png";
import { Link } from 'react-router-dom'
import Button from '../Button'

const Header = () => {
  return (
    <div className="fixed w-full pt-10">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex gap-x-6">
            <Link to={"/"}>
              <Images srcImg={logo} />
            </Link>
            <Link>
              <Images srcImg={langues} />
            </Link>
          </div>
          <div className="ml-80">
            <ul className="flex gap-x-6 text-sm text-white font-poppins">
              <li>
                <Link to={"/about-Us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/why-Lime"}>Why Lime</Link>
              </li>
              <li>
                <Link to={"/vehicles"}>Vehicles</Link>
              </li>
              <li>
                <Link to={"/locations"}>Locations</Link>
              </li>
              <li>
                <Link to={"/advertise"}>Advertise</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/help"}>Help</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Button className={"cursor-pointer"} btnText={"Download App"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Header