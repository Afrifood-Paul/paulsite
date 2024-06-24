"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";

const telegram = "https://t.me/PaulTechs";

const handleDownload = () => {
  const url = "/myCv/myCv.pdf"; // My Cv Part....
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", true);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 sm:gap-10 lg:gap-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              {" "}
              Hello, I'm{" "}
            </span>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Adebayo Opeyemi Paul",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "React Developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-[#adb7be] text-base sm:text-lg lg:text-lg mb-6"
          >
            A passionate front-end developer crafting seamless user experiences
            with cutting-edge technologies and open to learning more from senior
            developers.
            <span className="hidden xl:flex text-base sm:text-lg lg:text-lg">
              Dedicated to responsive design, ensuring your site looks stunning
              on any device. Adept at collaborating with cross-functional teams
              to bring creative visions to life. Ready to turn your digital
              ideas into reality with clean, efficient code.
            </span>{" "}
          </motion.p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-slate-200 text-white">
              <a href={telegram} target="_blank" rel="noopener noreferrer">
                Hire Me
              </a>
            </button>
            <button
              onClick={handleDownload}
              className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full py-2 px-4">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          {/*Rounded Image */}
          <div className="w-[250px] h-[250px] overflow-hidden rounded-full md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px] xl:w-[500px] xl:h-[500px] relative">
            <Image
              src="/images/hero-bg.jpg"
              width={500}
              height={500}
              alt=""
              className="absolute transfom -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
