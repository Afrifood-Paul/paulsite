"use client";
import React, { createContext } from 'react';
import { technologies } from "../constants";

//motion
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="pt-20 pb-10 mt-2 min-h-[800px] overflow-x-hidden px-3">
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <span className="bg-purple-900 border-b-2 border-pink-600 text-gray-300 rounded-full h-6 text-sm font-medium px-5 py-2 uppercase">
        Technologies
      </span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white">
        Proficient in these
        <span className="bg-gradient-to-r from-purple-900 to-pink-800 text-transparent bg-clip-text">
          {" "}
          Tech Skills
        </span>
      </h2>
    </motion.div>
    <div className="flex flex-wrap mt-10 lg:mt-20 group">
      {technologies.map((technologies, index) => (
        <div
          key={index}
          className="w-full mt-2 sm:w-1/2 lg:w-1/3"
        >
          <div className="flex">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-200 justify-center items-center rounded-full"
            >
              {technologies.icon}
            </motion.div>
            <div>
              <motion.h5
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="mt-1 mb-6 text-xl text-gray-400"
              >
                {technologies.text}
              </motion.h5>
              <p className="text-md text-gray-400 p-2 mb-10 group-hover:scale-110 duration-300">
                {technologies.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Technologies