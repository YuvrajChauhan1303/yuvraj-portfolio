import Image from "next/image";
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
} from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-6 lg:px-24 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-geist-mono)] text-center">
        About Yuvraj
      </h1>

      {/* Summary Section */}
      <section className="mt-6 sm:mt-8">
        <p className="text-base sm:text-lg font-mono text-center text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Yuvraj is a web developer specializing in creating robust and visually
          engaging digital experiences. With expertise in modern technologies
          like Node.js, Next.js, React.js, Tailwind, and Django, he blends
          performance with design to deliver user-centric solutions.
        </p>
      </section>

      {/* Expertise Section */}
      <section className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            <FaTools className="inline-block mr-2 text-black" /> Technical
            Expertise
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-mono leading-relaxed">
            Yuvraj&apos;s skill set includes frontend and backend development,
            with a strong grasp of frameworks and tools like Django, Next.js,
            and Tailwind. He recently built a fully optimized company website
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
            As a frontend engineer, he excels at crafting responsive designs
            with smooth animations using GSAP, showcased in projects like Stavya
            2024 and Horizon 2024.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/yuvraj.jpg"
            width={200}
            height={200}
            alt="Yuvraj Chauhan"
            className="rounded-full shadow-lg object-cover w-48 h-48 sm:w-72 sm:h-72"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
          <FaProjectDiagram className="inline-block mr-2" /> Notable Projects
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
      <section className="mt-8 sm:mt-12 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          <FaRegLightbulb className="inline-block mr-2" /> Leadership &
          Workshops
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-3xl mx-auto">
          As a member of the student gymkhana (2023-24) and the GDSC Web Dev
          Volunteer team, Yuvraj played a key role in organizing Horizon 2024.
          He conducted workshops on front-end technologies and the anatomy of
          landing pages, empowering peers with practical skills.
        </p>
      </section>

      {/* Friends Section */}
      <section className="mt-8 sm:mt-12 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          <FaRegLightbulb className="inline-block mr-2" /> Does he have Friends
          tho?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-3xl mx-auto">
          Yes, Yes he Does. Meet his Friends/Colleagues, with whom he has
          created several Projects. They have an Organization on Github
          featuring their projects:{" "}
          <Link
            href="https://github.com/orgs/Room1097/repositories"
            target="_blank"
            className="text-blue-500 underline cursor-pointer"
          >
            Room 1097
          </Link>
        </p>
        <div className="flex flex-wrap items-center justify-center mt-4 gap-8">
          <div>
            <Image
              src={"/images/yuvraj.jpg"}
              width={400}
              height={300}
              className="rounded-full object-contain h-48 w-48"
              alt="Srijan"
            />
            <p>@Srijan Sharma</p>
          </div>
          <div>
            <Image
              src={"/images/yuvraj.jpg"}
              width={150}
              height={150}
              className="rounded-full object-cover h-48 w-48"
              alt="Trijay"
            />
            <p>@Trijay Patel</p>
          </div>
          <div>
            <Image
              src={"/images/yuvraj.jpg"}
              width={150}
              height={150}
              className="rounded-full object-cover h-48 w-48"
              alt="Tanay"
            />
            <p>@Tanay Patel</p>
          </div>
        </div>
      </section>

      {/* What does he do when not coding? */}
      <section className="mt-8 sm:mt-12 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          <FaChess className="inline-block mr-2" /> What does he do when he is
          not coding?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-mono mt-4 leading-relaxed max-w-3xl mx-auto">
          When Yuvraj isn&apos;t coding, he enjoys playing chess, and gaming.
          These activities help him stay balanced and inspired.
        </p>
      </section>
    </div>
  );
}
