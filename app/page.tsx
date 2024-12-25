"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";
import Work from "./_components/Work";
import { workData } from "./_components/_data/work";
import Skill from "./_components/Skill";
import {
  toolData,
  languageData,
  interestData,
} from "./_components/_data/skilllData";

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
          {/* Left (Text) */}
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
          </div>

          {/* Right (Image) */}
          <div className="w-full md:w-[40%] flex justify-center">
            <Image
              src="/images/yuvraj.jpg"
              width={400}
              height={400}
              alt="a graphical representation of a picsart"
              className="object-cover w-[90%] max-w-md"
            />
          </div>
        </div>

        {/* Scroll down */}
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
        className="flex flex-col border-t-black border border-dashed"
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
      <div className="h-screen">
        <Skill title="tools & technologies" items={toolData} />
        <Skill title="Languages" items={languageData} />
        <Skill title="Interests" items={interestData} />
      </div>
    </div>
  );
}
