"use client";

import { useRef } from "react";
// import Image from "next/image";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";
import Work from "./_components/Work";
import { workData } from "./_data/work";
import Skill from "./_components/Skill";
import { toolData, languageData, interestData } from "./_data/skilllData";
import Polaroid from "@/components/Polaroid";
import ProjectSection from "./_components/Projects/ProjectSection";
import { WebProjects } from "./_components/Projects/ProjectData";

export default function Home() {
  const workRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    workRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {/* Landing */}
      <div>
        <div className="w-screen flex flex-col-reverse md:flex-row h-screen md:h-[90vh] gap-12">
          <div className="flex flex-col justify-center px-8 md:px-[10rem] w-full md:w-[62%]">
            <h1 className="text-4xl md:text-[3.5rem] font-[family-name:var(--font-geist-mono)] flex flex-row gap-4">
              <span>yuvraj</span> <span>chauhan</span>
            </h1>
            <p className="font-medium mt-8 md:mt-6">
              a{" "}
              <span className="font-bold underline">
                computer science engineer
              </span>{" "}
              with interests in{" "}
              <span className="font-bold underline">web development</span>,{" "}
              <span className="font-bold underline">
                artificial intelligence
              </span>{" "}
              and more.{" "}
              <span>
                pre-final year @{" "}
                <Link
                  href="/education"
                  className="hover:underline underline-offset-1"
                >
                  IIIT Vadodara, ICD
                </Link>
              </span>
            </p>
            <p className="mt-8">
              <span className="font-bold">Note</span>: The portfolio is still
              under development and will be completed shortly.
            </p>

            <div className="mt-8">
              <a
                target="_blank"
                className=" border-2 border-black px-4 py-2 hover:bg-black hover:text-white duration-300 transition font-bold"
                href="/Resume.pdf"
              >
                Open Resume
              </a>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <Polaroid
              height="md:h-[400px] "
              image="/images/yuvraj.png"
              text="yuvraj chauhan"
              size={300}
              border={true}
              classname="md:block hidden"
            />
            <Polaroid
              height="h-[360px] "
              image="/images/yuvraj.png"
              text="yuvraj chauhan"
              size={270}
              border={true}
              classname="block md:hidden"
            />
          </div>
        </div>

        <div
          className="h-[10vh] w-screen flex items-center justify-center font-mono hover:underline cursor-pointer"
          onClick={handleScroll}
        >
          <span className="flex space-x-3 px-3">
            <GoArrowDown />
          </span>
          scroll down{" "}
          <span className="flex space-x-3 px-3">
            <GoArrowDown />
          </span>
        </div>
      </div>

      {/* Work / Experience Section */}
      <div
        className="flex flex-col bg-gray-100/30 border-t-black border-b-black border border-dashed"
        ref={workRef}
      >
        <h1 className="text-center text-4xl font-mono mt-12 mb-4">
          relevant works / experience
        </h1>
        <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-20 p-6 justify-items-center">
          {workData.map((work, index) => (
            <Work key={index} {...work} />
          ))}
        </div>
      </div>

      {/* skills */}
      <div className="flex flex-col">
        <h1 className="text-center text-4xl font-mono mt-12 mb-4">
          relevant skills
        </h1>
        <div className="overflow-x-hidden">
          <Skill title="tools & technologies" items={toolData} />
          <Skill title="Languages" items={languageData} />
          <Skill title="Interests" items={interestData} />
        </div>
      </div>

      {/* featured projects */}
      <div className="pb-12 flex flex-col border-t-black border-dashed border bg-gray-100/30">
        <h1 className="text-center text-4xl font-mono mt-12 mb-4">
          featured projects
        </h1>
        <ProjectSection title="web development" card={WebProjects} />
      </div>
    </div>
  );
}
