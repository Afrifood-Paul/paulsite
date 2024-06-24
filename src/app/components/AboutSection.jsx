"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./tabbutton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.Js</li>
        <li>Next Js</li>
        <li>Redux</li>
        <li>TypeScript</li>
        <li>Express</li>
        <li>Javascript</li>
        <li>Tailwind Css</li>
        <li>Bootstrap</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Placid Global International</li>
        <li>National Open University Of Nigeria (NOUN)</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>FrontEnd Development</li>
        <li>Placid Global International</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const tabContent = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className=" text-[#adb7be]" id="about">
      <div className="xl:grid xl:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/images/about-bg.avif" alt="" width={500} height={500} className="rounded-xl"/>
        <div className="mt-4">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="text-[14px] text-center text-[#adb7be] lg:text-lg">
            I am a web developer with a passion for creating interactive and
            responsive web applications.I have experinece working with
            javascript, React, Redux, NextJs, typescript, Express, Html, CSS,
            and Git.I am a quick learner and I am always looking to expand my
            knowledge and skill set.I am excited to work with others to cretae
            amazing application.
          </p>
          <div className="flex flex-row mt-4 gap-4 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-4">
            {tabContent ? tabContent.content : "Content not available"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
