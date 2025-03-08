"use client";

import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaCrown, FaFacebookF, FaGem, FaLinkedinIn, FaShieldAlt, FaStar, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const SocialIcons = [
    {
      url: "https://www.facebook.com/beerajewellers/",
      title: "Facebook",
      component: <FaFacebookF className="h-5 w-5 text-blue-500" />,
    },
    {
      url: "https://www.linkedin.com",
      title: "LinkedIn",
      component: <FaLinkedinIn className="h-5 w-5 text-blue-900" />,
    },
    {
      url: "https://twitter.com",
      title: "Twitter",
      component: <FaTwitter className="h-5 w-5 text-blue-400" />,
    },
    {
      url: "https://www.instagram.com/beerajewellers/?hl=en",
      title: "Instagram",
      component: (
        <AiFillInstagram className="h-5 w-5 bg-gradient-to-br rounded-full from-yellow-400 via-pink-500 to-purple-600 text-white" />
      ),
    },
  ];

  const NavItems = [
    { title: "Necklaces", path: "/necklace" },
    { title: "Bangles", path: "/bangles" },
    { title: "Rings", path: "/ring" },
    { title: "Earrings", path: "/earrings" },
    { title: "Bracelets", path: "/Bracelets" },
  ];

  const services = [
    { icon: <FaGem className="w-8 h-8 md:w-10 md:h-10 text-black" />, title: "100% GENUINE JEWELLERY" },
    { icon: <FaCrown className="w-8 h-8 md:w-10 md:h-10 text-black" />, title: "PREMIUM CRAFTSMANSHIP" },
    { icon: <FaStar className="w-8 h-8 md:w-10 md:h-10 text-black" />, title: "CERTIFIED PURITY" },
    { icon: <FaShieldAlt className="w-8 h-8 md:w-10 md:h-10 text-black" />, title: "TRUST & TRANSPARENCY" },
  ];

  return (
    <footer className="relative text-gray-600 bg-footerColor w-full font-monomakh">
      {/* Services Banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] hidden lg:block">
        <div className="bg-gradient-to-r from-goldMid via-goldMid to-goldDark p-4 md:p-6 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="py-3 group">{service.icon}</div>
                <h2 className="text-xs md:text-xs text-gray-800 text-center font-medium">{service.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <h2 className="font-semibold text-goldMid tracking-widest text-md">TRUST & CERTIFICATIONS</h2>
            <div className="text-sm leading-6 text-slate-500 hover:scale-105 transition-transform duration-200 hover:text-goldMid cursor-pointer mb-6">
              <p>100% Certified Hallmarked Gold & Diamonds</p>
              <p>Lifetime Exchange & Buyback Guarantee</p>
              <p>Trusted by Generations</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {SocialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-slate-500 rounded-full transition-all duration-200 group"
                >
                  <span className="flex justify-center group-hover:scale-110 transition-transform duration-200">
                    {item.component}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h2 className="font-semibold text-goldMid tracking-widest text-md">QUICK LINKS</h2>
            <ul className="space-y-3">
              {NavItems.map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="text-gray-600 hover:scale-110 transition-transform duration-200 hover:text-goldMid cursor-pointer">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h2 className="font-semibold text-goldMid tracking-widest text-md">FOLLOW US ON</h2>
            <ul className="space-y-3">
              {SocialIcons.map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:scale-110 transition-transform duration-200 hover:text-goldMid cursor-pointer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold text-goldMid tracking-widest text-md">ABOUT US</h2>
              <div className="space-y-3 flex flex-col">
                <p className="text-gray-600 hover:text-goldMid cursor-pointer">
                  <strong>Email: </strong> berra_jewel@gmail.com
                </p>
                <p className="text-gray-600 hover:text-goldMid cursor-pointer">
                  <strong>Phone: </strong> +91 4756778751
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-goldMid tracking-widest text-md">SERVICES</h2>
              <ul>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-goldMid cursor-pointer">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
