// import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "./_components/ProjectCard";
import { projectData } from "@/app/_data/aboutData";
import {
  FaCode,
  FaProjectDiagram,
  FaTools,
  FaRegLightbulb,
  FaChess,
  FaUsers,
} from "react-icons/fa";
// import { GoArrowDown } from "react-icons/go";
import Polaroid from "@/components/Polaroid";

export default function About() {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-6 lg:px-24 min-h-screen">
      <div className="">
        {/* Page Title */}
        <div className="bg-white p-8 w-auto border-2 border-black border-dotted">
          <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-geist-mono)]">
            about yuvraj
          </h1>

          {/* Summary Section */}

          <section className="mt-6 sm:mt-8">
            <p className="text-base sm:text-lg font-mono text-gray-700 w-full  leading-relaxed max-w-4xl">
              yuvraj is a web developer specializing in creating robust and
              visually engaging digital experiences. With expertise in modern
              technologies like Node.js, Next.js, React.js, Tailwind, and
              Django, he blends performance with design to deliver user-centric
              solutions.
            </p>
          </section>
        </div>

        {/* Expertise Section */}
        <section className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 bg-white border-2 border-black border-dashed p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-mono">
              <FaTools className="inline-block mr-2 text-black " /> technical
              expertise
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-mono leading-relaxed">
              yuvraj&apos;s skill set includes frontend and backend development,
              with a strong grasp of frameworks and tools like Django, Next.js,
              and Tailwind. he recently built a fully optimized company website
              during his internship at{" "}
              <Link
                href="https://dhankhar.co.in"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dhankhar Technologies Pvt. Ltd.
              </Link>
            </p>
            <p className="text-sm sm:text-base text-gray-700 font-mono leading-relaxed">
              as a frontend engineer, he excels at crafting responsive designs
              with smooth animations using GSAP, showcased in projects like
              Stavya 2024 and Horizon 2024.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Polaroid
              image="/images/yuvraj.png"
              size={300}
              height="h-[42vh] md:h-[55vh]"
              text="yuvraj"
              border={true}
              classname={"md:block hidden"}
            />
            <Polaroid
              image="/images/yuvraj.png"
              size={300}
              height="h-[46vh] md:h-[48vh]"
              text="yuvraj"
              border={true}
              classname="md:hidden block"
            />
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <section className="mt-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-mono">
          <FaProjectDiagram className="inline-block mr-2" /> notable projects
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              content={project.content}
              href={project.href}
            />
          ))}
        </div>
      </section>

      {/* Workshops & Leadership Section */}
      <section className="mt-8 sm:mt-12 border-2 border-black border-dashed p-8 bg-white">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-mono lowercase">
          <FaRegLightbulb className="inline-block mr-2 " /> Leadership &
          Workshops
        </h2>
        <p className="text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-4xl ">
          As a member of the student gymkhana (2023-24) and the GDSC Web Dev
          Volunteer team, Yuvraj played a key role in organizing Horizon 2024.
          He conducted workshops on front-end technologies and the anatomy of
          landing pages, empowering peers with practical skills.
        </p>
      </section>

      {/* Friends Section */}
      <section className="mt-8 sm:mt-12 border-2 border-black border-dashed p-8 bg-white">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-mono lowercase">
          <FaUsers className="inline-block mr-2" /> Does he have Friends tho?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-4xl">
          yes! yes he Does. meet his friends/colleagues, with whom he has
          created several projects. they have an organization on Github
          featuring their projects:{" "}
          <Link
            href="https://github.com/orgs/Room1097/repositories"
            target="_blank"
            className="text-blue-500 underline cursor-pointer"
          >
            Room 1097
          </Link>
        </p>
      </section>
      <div className="flex flex-wrap items-center justify-center md:gap-0 gap-8 md:justify-between w-full mt-8">
        <Polaroid
          height="h-[48vh]"
          image="/images/yuvraj.png"
          text="srijan sharma"
          size={310}
          classname="md:hidden block"
          border={true}
        />
        <Polaroid
          height="h-[33vh]"
          image="/images/yuvraj.png"
          text="srijan sharma"
          size={150}
          classname="md:block hidden"
        />
        <Polaroid
          height="h-[48vh]"
          image="/images/yuvraj.png"
          text="srijan sharma"
          size={310}
          border={true}
          classname="md:hidden block"
        />
        <Polaroid
          height="h-[33vh]"
          image="/images/yuvraj.png"
          text="srijan sharma"
          size={150}
          classname="md:block hidden"
        />
        <Polaroid
          height="h-[48vh]"
          image="/images/yuvraj.png"
          text="srijan sharma"
          size={310}
          border={true}
          classname="md:hidden block"
        />
        <Polaroid
          height="h-[33vh]"
          image="/images/yuvraj.png"
          text="srijan sharma"
          size={150}
          classname="md:block hidden"
        />
        <Polaroid
          height="h-[48vh]"
          image="/images/yuvraj.png"
          text="srijan sharma"
          size={310}
          border={true}
          classname="md:hidden block"
        />
        <Polaroid
          height="h-[33vh]"
          image="/images/yuvraj.png"
          text="srijan sharma"
          size={150}
          classname="md:block hidden"
        />
      </div>

      {/* projects in other domain */}
      <section className="mt-8 sm:mt-12 border-2 border-black border-dashed p-8 bg-white">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-mono lowercase">
          <FaCode className="inline-block mr-2" /> projects in domains other
          than web development
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-4xl">
          Apart from Web Development, Yuvraj is highly interested in
          Cryptography and AI. He along with his friends, @Srijan, @Trijay &
          @Tanay, implemented a Research Paper on Secret Image Sharing with
          Polynomial Interpolation, and made enhancements to the original
          scheme.
        </p>
        <p className="text-sm sm:text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-4xl">
          In an other Project, Yuvraj along with @Srijan and @Trijay created an
          adaptive enemy AI, for a street-fighter style 1v1 PvP Game. They named
          the project Neural-Brawl and the Project was created on Unity, and the
          AI uses PPO as its learning model.
        </p>
        <p className="text-sm sm:text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-4xl">
          In a third project, he collaborated with @Trijay to create a secure
          HTTP server of an HTTPS server, using the SSL-TLS handshake protocol.
          They created a Certifying Authority which certified a HTTP server,
          both servers working independently.
        </p>
      </section>

      {/* What does he do when not coding? */}
      <section className="mt-8 sm:mt-12 border-2 border-black border-dashed p-8 bg-white">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-mono lowercase">
          <FaChess className="inline-block mr-2" /> What does he do when he is
          not coding?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-4xl">
          When Yuvraj isn&apos;t coding, he enjoys playing chess, and gaming.
          These activities help him stay balanced and inspired.
        </p>
      </section>
    </div>
  );
}
