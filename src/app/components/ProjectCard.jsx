"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818]  bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 relative rounded-full border-[#adb7be] hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 p-1 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:border rounded-full hover:text-white" />
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 relative rounded-full border-[#adb7be] hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 p-1 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:border rounded-full hover:text-white" />
          </Link>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4"
      >
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be] text-sm">{description}</p>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
