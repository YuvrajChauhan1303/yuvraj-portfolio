"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-screen py-4 flex flex-row-reverse gap-4 justify-start items-start px-8 z-50">
      <Menu onClick={() => setOpen(!open)} className="cursor-pointer" />
      {open && <MiniMenu />}
    </div>
  );
};

const MiniMenu = () => {
  return (
    <div className="h-[480px] md:w-[25vw] w-[80vw] bg-gray-50/90 border border-black flex flex-col gap-4 uppercase font-medium font-[family-name:var(--font-geist-mono)] py-8 px-4 text-2xl absolute top-16 right-0 md:relative md:top-auto md:right-auto md:h-auto  mr-8 md:mr-0">
      <div className="flex flex-col gap-6">
        <Link href={"/about"}>About</Link>
        <Link href={"/education"}>Education</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/work"}>work</Link>
        <Link href={"/skills"}>skills</Link>
      </div>

      <div className="pt-4 border-t-2 border-black">Connect with me:</div>
      <div className="flex items-center justify-center w-full gap-6 mt-4">
        <Link href={""} className="hover:text-blue-600 transition duration-200">
          <FaGithub />
        </Link>
        <Link href={""} className="hover:text-blue-600 transition duration-200">
          <FaLinkedinIn />
        </Link>
        <Link href={""} className="hover:text-pink-500 transition duration-200">
          <FaInstagram />
        </Link>
        <Link href={""} className="hover:text-blue-400 transition duration-200">
          <FaXTwitter />
        </Link>
        <Link
          href={""}
          className="hover:text-green-500 transition duration-200"
        >
          <SiLeetcode />
        </Link>
      </div>

      <div className="pt-4 border-t-2 border-black">Yuvraj Chauhan</div>
    </div>
  );
};

export default Navigation;
