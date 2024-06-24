import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { Sections } from "../constants";

const phoneNumber = "+2347016367643";
const message = "Hello there!";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;
const linkedin = "https://www.linkedin.com/in/adebayo-opeyemi-paul-886147270";
const telegram = "https://t.me/PaulTechs";

const Footer = () => {
  return (
    <div className="w-full text-gray-300 py-6 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-6 md:grid-cols-5 border-b-2 border-gray-600 py-8">
        {Sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="py-1 text-gray-500 hover:text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Productive Chats</p>
          <p className="py-4 text-[]#adbe7b">
            I am open to projects I will start and finish all by myself and also
            a collaborative projects.
          </p>
          <div className="flex gap-10 lg:gap-14 text-3xl mt-5">
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[#adb7be] text-4xl border-2 border-purple-900 rounded-full p-1 hover:border-pink-700 hover:text-[whitesmoke] duration-200" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-[#adb7be] text-4xl border-2 border-purple-900 rounded-full p-1 hover:border-pink-700 hover:text-[whitesmoke] duration-200" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#adb7be] text-4xl border-2 border-purple-900 rounded-full p-1 hover:border-pink-700 hover:text-[whitesmoke] duration-200" />
            </a>
            <a href={telegram} target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-[#adb7be] text-4xl border-2 border-purple-900 rounded-full p-1 hover:border-pink-700 hover:text-[whitesmoke] duration-200" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="py-4 text-gray-300 text-center">
          2024 AOP. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
