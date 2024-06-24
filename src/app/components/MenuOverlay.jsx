import React from "react";
// import Link from "next/link";
import NavLink from "./NavLink";
import { FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";

const phoneNumber = "+2347016367643";
const message = "Hello there!";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;
const linkedin = "https://www.linkedin.com/in/adebayo-opeyemi-paul-886147270";
const telegram = "https://t.me/PaulTechs";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col gap-6 py-8 items-center">
      {/* {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))} */}

      <li>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-[#adb7be] text-4xl border-2 border-purple-900 rounded-full p-1 hover:border-pink-700 hover:text-[whitesmoke] duration-200" />
        </a>
      </li>
      <li>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#adb7be] text-4xl border-2 border-purple-900 rounded-full p-1 hover:border-pink-700 hover:text-[whitesmoke] duration-200" />
        </a>
      </li>
      <li>
        <a href={telegram} target="_blank" rel="noopener noreferrer">
          <FaTelegram className="text-[#adb7be] text-4xl border-2 border-purple-900 rounded-full p-1 hover:border-pink-700 hover:text-[whitesmoke] duration-200" />
        </a>
      </li>
    </ul>
  );
};

export default MenuOverlay;
