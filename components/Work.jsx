"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/feiz.jpg",
    category: "NextJS",
    name: "Agency website",
    description:
      "Crafted an SEO-optimized agency website using Next.js, driving enhanced visibility and performance.",
    link: "https://feizhoucom.com",
    github: "https://github.com/ilyasfarkhane-dev/feiz",
  },
  {
    image: "/work/vin.jpg",
    category: "MERN",
    name: "E-commerce website",
    description:
      "Engineered an e-commerce platform with the MERN stack, integrating robust functionality and seamless user experience.",
    link: "https://vintique.vercel.app",
    github: "https://github.com/ilyasfarkhane-dev/Vintique",
  },
  {
    image: "/work/said.jpg",
    category: "NextJS",
    name: "Showcase website",
    description:
      "Developed a showcase website with Next.js, leveraging its SEO optimization capabilities.",
    link: "https://saidtex.vercel.app",
    github: "https://github.com/ilyasfarkhane-dev/saidtex",
  },
  {
    image: "/work/son1.jpg",
    category: "ReactJS",
    name: "Dashboard",
    description:
      "Designed and implemented a dynamic dashboard interface using ReactJS, offering intuitive data visualization and management capabilities.",
    link: "/",
    github: "/",
  },

  {
    image: "/work/fac.jpg",
    category: "Javascript",
    name: "Invoice App",
    description:
      "Simplified invoicing app streamlines billing, enhances efficiency, and fosters seamless financial management.",
    link: "https://ilyasfarkhane-dev.github.io/devis/",
    github: "https://github.com/ilyasfarkhane-dev/devis",
  },
  // {
  //   image: "/work/quotes.png",
  //   category: "React JS",
  //   name: "Quotes Machine",
  //   description:
  //     "Curated collection of inspirational quotes, a glimpse into wisdom and motivation.",
  //   link: "https://quotmachine.netlify.app/",
  //   github: "https://github.com/ilyasfarkhane-dev/randomquotemachine",
  // },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Explore my recent creations, crafted with innovation and precision.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Work;
