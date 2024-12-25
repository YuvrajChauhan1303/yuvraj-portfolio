"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";
import Work from "./_components/Work";
import { workData } from "./_components/_data/work";

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
      {/* landing */}
      <div>
        <div className="w-screen flex h-[90vh]">
          {/* left */}
          <div className="md:w-[62%] flex flex-col justify-center md:px-[10rem]">
            <h1 className="md:text-[3.5rem] md:mb-3 font-[family-name:var(--font-geist-mono)] flex flex-row gap-4">
              <span className="">yuvraj</span> <span className="">chauhan</span>
            </h1>
            <p className="font-medium">
              a{" "}
              <span className="font-bold underline">
                computer science engineer
              </span>{" "}
              with interests in{" "}
              <span className="font-bold underline">web development</span> ,{" "}
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
                </Link>{" "}
              </span>
            </p>
            <p className="mt-8">
              <span className="font-bold">Note</span>: The portfolio is still
              under development and will be completed shortly.
            </p>
          </div>
          {/* right */}
          <div className="md:w-[40%] flex items-center justify-start">
            <Image
              src={"/images/yuvraj.jpg"}
              width={500}
              height={500}
              alt="a graphical representation of a picsart"
              className=""
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

      {/* work / experience */}
      <div
        className="flex flex-col border-t-black border border-dashed"
        ref={workRef}
      >
        <h1 className="text-center text-4xl font-mono mt-12 mb-4">
          relevant works / experience
        </h1>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-20 p-6 justify-items-center ">
          {workData.map((work, index) => (
            <Work key={index} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
}
