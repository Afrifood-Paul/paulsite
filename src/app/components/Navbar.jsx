"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes, FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";
import MenuOverlay from "./MenuOverlay";
// import ExternalLink from "./ExternalLink";

const phoneNumber = "+2347016367643";
const message = "Hello there!";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;
const linkedin = "https://www.linkedin.com/in/adebayo-opeyemi-paul-886147270";
const telegram = "https://t.me/PaulTechs";
// const navLinks = [
//   {
//     title: "Whatsapp",
//     path: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
//   },
//   {
//     title: "LinkedIn",
//     path: "https://www.linkedin.com/in/adebayo-opeyemi-paul-886147270",
//   },
//   {
//     title: "Telegram",
//     path: "https://t.me/PaulTechs",
//   },
// ];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100 rounded-b-full">
      <div className="flex items-center justify-between container mx-auto px-12 py-8">
        <div>
          <Link
            href={"/"}
            className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
          >
            AOP.
          </Link>
        </div>

        {/*mobile menu */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white"
            >
              <FaBarsStaggered className="h-5 w-5" id="" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white"
            >
              <FaTimes className="h-5 w-5" id="" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-12">
            {/* {navLinks.map((link, index) => (
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
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default Navbar;

