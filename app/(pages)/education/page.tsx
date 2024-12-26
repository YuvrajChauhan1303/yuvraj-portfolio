import Link from "next/link";
import React from "react";
import { subjects } from "@/app/_data/subjectData";
import EducationItem from "./_components/EducationItem";
import ProfileItem from "./_components/PeofileItem";
import PaperItem from "./_components/PaperItem";
export default function Education() {
  return (
    <div className="flex flex-col py-8 space-y-8 px-4 sm:px-6 lg:px-24 min-h-screen">
      <div className="border-2 border-black border-dashed p-8 bg-white">
        {" "}
        <h1 className="text-4xl font-[family-name:var(--font-geist-mono)] font-medium">
          education / academics
        </h1>
        <p className="font-mono mt-4">
          yuvraj is currently in his pre-final year @{" "}
          <Link
            href={"http://diu.iiitvadodara.ac.in"}
            target="_blank"
            className="text-blue-600 underline"
          >
            IIIT Vadodara - ICD
          </Link>
          , pursuing a B.Tech. in Computer Science and Engineering. he has
          completed 5 out of 8 semesters, holds a CPI of 8.03/10, and is
          expected to graduate in July 2026.
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-mono border-t-2 border-[#3c3c3c] border-dashed py-4">
          relevant coursework
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center font-mono">
          {subjects.map((subject, index) => (
            <EducationItem key={index} subject={subject} />
          ))}
          and more...
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-mono border-t-2 border-[#3c3c3c] border-dashed py-4">
          extra - curricular profiles
        </h2>
        <div className="flex flex-col gap-6  font-mono">
          <ProfileItem
            title="leetcode"
            username="dcodr1303"
            href="https://leetcode.com/u/dcodr1303"
          />
          <ProfileItem
            title="codechef"
            username="dcodr1303"
            href="https://www.codechef.com/users/dcodr1303"
          />
          <ProfileItem
            title="personal github"
            username="YuvrajChauhan1303"
            href="https://github.com/YuvrajChauhan1303?tab=repositories"
          />
          <ProfileItem
            title="github organization"
            username="Room1097"
            href="https://github.com/orgs/Room1097/repositories"
          />
        </div>
      </div>
      <div className="border-2 border-black border-dashed p-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-mono ">papers</h2>
        <div className="flex flex-col font-mono gap-6">
          <PaperItem
            number="1"
            title={
              ' S. Sharma, T. Patel, Y. Chauhan, and S. Kumar, "Reinforcement Learning in Competitive Game Environments with Unity ML-Agents," IIIT Vadodara - International Campus Diu.'
            }
            link="/CS367_GAME_AI_USING_RL_REPORT_IEEE (1).pdf"
          />
          <PaperItem
            number="2"
            title={
              'S. Sharma, T. Patel, Y. Chauhan, and T. Patel, "Enhanced Secret Image Sharing with Polynomial Interpolation," IIIT Vadodara - International Campus Diu.'
            }
            link="/Design_Project_Report.pdf"
          />
        </div>
      </div>
    </div>
  );
}
