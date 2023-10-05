import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAngleDoubleRight,
} from "react-icons/fa";

import Logo_1 from "../../Images/Logo_black_1.png";
const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 ">
        {/* Logo */}
        <div className="flex flex-col gap-4">
          <img className="w-32" src={Logo_1} alt="footer_logo" />
          <p className="text-white text-sm tracking-wide">@Aeronica.com</p>
          {/* <img /> */}
          <div className="flex gap-5 text-lg text-gray-400">
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white mb-4 border-b w-20">
            Locate Us
          </h2>
          <div className="text-base flex flex-col gap-2">
            <p>Aeronica Advance Technologies Pvt. Ltd.</p>
            <p>101 Sunrise Apartment Prabhat Road</p>
            <p> Opposite Kamla Nehru park Pune 411004</p>

            <p>Phone: +91 7276469160</p>
            <p>Email: bizdev@aeronica.in</p>
          </div>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white mb-4 border-b w-20 ">
            Products
          </h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            Product-1
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            Product-2
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            Product-3
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            Product-4
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white mb-4 border-b w-20 ">
            Services
          </h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            Service-1
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            Service-2
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            Service-3
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            Service-4
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white mb-4 border-b w-22 ">
            Strategic Collaboration with
          </h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            colab-1
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            colab-2
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            colab-3
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaAngleDoubleRight />
            </span>
            colab-4
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
