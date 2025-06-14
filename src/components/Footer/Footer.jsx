import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container mx-auto px-4">
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-4 gap-6 pb-20 pt-10"
        >
          {/* Logo & Description */}
          <div className="py-8 px-4">
            <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <FiShoppingBag size={30} />
              ShopMe
            </h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem excepturi placeat molestiae asperiores quidem dolore
              animi! Exercitationem velit vero fugiat consectetur!
            </p>
          </div>

          {/* Important Links */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-4">Important Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  key={link.title}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-4">More Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  key={link.title + "_more"}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Info */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-4">Get in Touch</h1>
            <div className="flex items-center gap-3 mb-4">
              <FaMapLocationDot />
              <p className="text-gray-300">Lahore, Punjab</p>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <IoCall />
              <p className="text-gray-300">+92 1234567890</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
