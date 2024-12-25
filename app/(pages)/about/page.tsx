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
    <div className="flex flex-col py-12 px-6 md:px-24 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-semibold font-[family-name:var(--font-geist-mono)] text-center">
        About Yuvraj
      </h1>

      {/* Summary Section */}
      <section className="mt-8">
        <p className="text-lg font-mono text-center text-gray-700 max-w-6xl mx-auto leading-relaxed">
          Yuvraj is a web developer specializing in creating robust and visually
          engaging digital experiences. With expertise in modern technologies
          like Node.js, Next.js, React.js, Tailwind, and Django, he blends
          performance with design to deliver user-centric solutions.
        </p>
      </section>

      {/* Expertise Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            <FaTools className="inline-block mr-2 text-black" /> Technical
            Expertise
          </h2>
          <p className="text-gray-700 font-mono leading-relaxed">
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
          <p className="text-gray-700 font-mono leading-relaxed">
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
            className="rounded-full shadow-lg object-cover h-72 w-72"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          <FaProjectDiagram className="inline-block mr-2" /> Notable Projects
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          <FaRegLightbulb className="inline-block mr-2" /> Leadership &
          Workshops
        </h2>
        <p className="text-gray-700 font-mono mt-4 leading-relaxed max-w-5xl mx-auto">
          As a member of the student gymkhana (2023-24) and the GDSC Web Dev
          Volunteer team, Yuvraj played a key role in organizing Horizon 2024.
          He conducted workshops on front-end technologies and the anatomy of
          landing pages, empowering peers with practical skills.
        </p>
      </section>

      {/* Does he have Friends tho? */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          <FaRegLightbulb className="inline-block mr-2" /> Does he have Friends
          tho?
        </h2>
        <p className="text-gray-700 font-mono mt-4 leading-relaxed max-w-5xl mx-auto">
          Yes, Yes he Does. Meet his Friends/Colleagues, with whom he has
          created several Projects. They have an Organization on Github
          featuring their projects :{" "}
          <Link
            href={"https://github.com/orgs/Room1097/repositories"}
            target="_blank"
            className="text-blue-500 underline cursor-pointer"
          >
            {" "}
            Room 1097
          </Link>
        </p>
        <div className="flex items-center justify-center mt-4 gap-8">
          <div>
            <Image
              src={"/images/yuvraj.jpg"}
              width={400}
              height={300}
              className="rounded-full object-contain h-48 w-48"
              alt="Srijan"
            />
            <p>@Srijan Sharma</p>
          </div>{" "}
          <div>
            <Image
              src={"/images/yuvraj.jpg"}
              width={150}
              height={150}
              className="rounded-full object-cover h-48 w-48"
              alt="Srijan"
            />
            <p>@Trijay Patel</p>
          </div>{" "}
          <div>
            <Image
              src={"/images/yuvraj.jpg"}
              width={150}
              height={150}
              className="rounded-full object-cover h-48 w-48"
              alt="Srijan"
            />
            <p>@Tanay Patel</p>
          </div>
        </div>
        <p className="mt-4 font-mono text-gray-700">
          His Friends have been his backbone and support him with his various
          shenaningans.
        </p>
      </section>

      {/* Other Interests than Web Development */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          <FaCode className="inline-block mr-2" /> Other Interests than Web
          Development
        </h2>
        <p className="text-gray-700 font-mono mt-4 leading-relaxed max-w-5xl mx-auto">
          Apart from Web Development, Yuvraj is highly interested in
          Cryptography and AI. He along with his friends, @Srijan, @Trijay &
          @Tanay, implemented a Research Paper on Secret Image Sharing with
          Polynomial Interpolation, and made enhancements to the original
          scheme.
        </p>
        <p className="text-gray-700 font-mono mt-4 leading-relaxed max-w-5xl mx-auto">
          In an other Project, Yuvraj along with @Srijan and @Trijay created an
          adaptive enemy AI, for a street-fighter style 1v1 PvP Game. They named
          the project Neural-Brawl and the Project was created on Unity, and the
          AI uses PPO as its learning model.
        </p>
        <p className="text-gray-700 font-mono mt-4 leading-relaxed max-w-5xl mx-auto">
          In a third project, he collaborated with @Trijay to create a secure
          HTTP server of an HTTPS server, using the SSL-TLS handshake protocol.
          They created a Certifying Authority which certified a HTTP server,
          both servers working independently.
        </p>
      </section>
      {/* What does he do when he does not code? */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          <FaChess className="inline-block mr-2" /> What does he do when he does
          not code?
        </h2>
      </section>
    </div>
  );
}
