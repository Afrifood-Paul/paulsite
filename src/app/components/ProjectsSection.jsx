import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "ReactJs Tailwind Website (Done)",
    description: "Crafted a dynamic and responsive website for a client, enhancing their online presence with custom design, seamless navigation, and optimized performance, demonstrating my ability to deliver high-quality, tailored web solutions for new clients.",
    image: "/images/project1.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://heritagecapitals.com.ng/",
  },
  {
    id: 2,
    title: "Next.jS Ecommerce Website (On Site)",
    description: "An eCommerce platform facilitating seamless online transactions, featuring a user-friendly interface for browsing, purchasing, and order tracking with add to cart feature and personalized customer experiences.",
    image: "/images/project2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://react-ecommerce-ten-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "ReactJS Tailwind Portfolio Website (Done)",
    description: "A sleek and modern portfolio website showcasing creative works and professional achievements, designed to attract potential clients and employers with visually engaging layouts and intuitive navigation.",
    image: "/images/project3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Afrifood-Paul/portfolio-web",
    previewUrl: "https://portfolio-web-seven-beige.vercel.app/",
  },
  //   {
  //     id: 4,
  //     title: "React Portfolio Website",
  //     description: "Project 5 description",
  //     image: "/images/project4.jpg",
  //     tag: ["All", "Web"],
  //   },
  //   {
  //     id: 5,
  //     title: "React Portfolio Website",
  //     description: "Project 1 description",
  //     image: "/images/project5.jpg",
  //     tag: ["All", "Web"],
  //   },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#fff] mb-4 text-center">My Projects</h2>
      <div className="grid grid-cols-1  p-5 border-l border-b border-gray-500 xl:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
