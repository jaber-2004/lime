
import { Link } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import footerLogo from '/src/assets/footerLogo.png'

const Footer = () => {
  return (
    <div className="pt-16 pb-6 bg-black">
      <Container>
        <Flex className={"items-start justify-between"}>
          <div className="">
            <Link to={"/"}>
              <Images srcImg={footerLogo} />
            </Link>
          </div>
          <div className="">
            <h4 className="text-[20px] text-white font-poppins mt-4">
              Join Us
            </h4>
            <ul className="text-sm text-[#939292] font-poppins mt-8">
              <li className="pb-4">
                <Link>Careers</Link>
              </li>
              <li className="pb-4">
                <Link>Lime Times Blog</Link>
              </li>
              <li className="pb-4">
                <Link>Press</Link>
              </li>
              <li className="pb-4">
                <Link>Partners</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[20px] text-white font-poppins mt-4">About</h4>
            <ul className="text-sm text-[#939292] font-poppins mt-8">
              <li className="pb-4">
                <Link>Community</Link>
              </li>
              <li className="pb-4">
                <Link>E-Bike</Link>
              </li>
              <li className="pb-4">
                <Link>E-Scooter</Link>
              </li>
              <li className="pb-4">
                <Link>Sustainability</Link>
              </li>
              <li className="pb-4">
                <Link>Innovation</Link>
              </li>
              <li className="pb-4">
                <Link>Safety</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[20px] text-white font-poppins mt-4">
              Programs
            </h4>
            <ul className="text-sm text-[#939292] font-poppins mt-8">
              <li className="pb-4">
                <Link>Advertise</Link>
              </li>
              <li className="pb-4">
                <Link>Lime Access</Link>
              </li>
              <li className="pb-4">
                <Link>Lime Hero</Link>
              </li>
              <li className="pb-4">
                <Link>Lime Assist</Link>
              </li>
              <li className="pb-4">
                <Link>Insurance</Link>
              </li>
              <li className="pb-4">
                <Link>Our Cities</Link>
              </li>
            </ul>
          </div>
          <div className="">
            {/* <h4 className="text-[20px] text-white font-poppins mt-4">
              Join Us
            </h4> */}
            <ul className="text-sm text-[#939292] font-poppins mt-6">
              <li className="pb-5">
                <Link>Find Location</Link>
              </li>
              <li className="pb-5">
                <Link>Get help</Link>
              </li>
              <li className="">
                <Link>Sitemap</Link>
              </li>
            </ul>
            <div className="flex gap-x-3 mt-6">
              <Link>
                <FaTwitter className="bg-amber-50 text-4xl rounded-[50%] text-black p-2" />
              </Link>
              <Link>
                <FaFacebook className="bg-amber-50 text-4xl rounded-[50%] text-black p-2" />
              </Link>
              <Link>
                <FaLinkedinIn className="bg-amber-50 text-4xl rounded-[50%] text-black p-2" />
              </Link>
              <Link>
                <FaYoutube className="bg-amber-50 text-4xl rounded-[50%] text-black p-2" />
              </Link>
              <Link>
                <FaInstagram className="bg-amber-50 text-4xl rounded-[50%] text-black p-2" />
              </Link>
            </div>
          </div>
        </Flex>
        <Flex className={"justify-between mt-[200px]"}>
          <h4 className="text-white">2024 Lime</h4>
          <ul className="flex gap-x-5 text-white underline">
            <li>User Agreement</li>
            <li>Privacy Notice</li>
            <li>Data Request</li>
            <li>Research</li>
            <li>Legal Bases</li>
            <li>My Information</li>
            <li>Imprint</li>
          </ul>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
