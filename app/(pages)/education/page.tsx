import Link from "next/link";
import React from "react";
import { subjects } from "@/app/_data/subjectData";
export default function Education() {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-6 lg:px-24 min-h-screen">
      <h1 className="text-4xl font-[family-name:var(--font-geist-mono)] font-medium">
        education / academics
      </h1>
      <div className="flex space-y-4 flex-col">
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
        <div>
          <h2 className="text-2xl md:text-3xl font-mono border-t-2 border-[#3c3c3c] border-dashed py-4">
            papers
          </h2>
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
    </div>
  );
}

interface EducationItemProps {
  subject: string;
}

const EducationItem = ({ subject }: EducationItemProps) => {
  return (
    <div className="border-2 border-black bg-gray-200 py-2 px-4 font-mono">
      {subject}
    </div>
  );
};

interface ProfileItemProps {
  title: string;
  username: string;
  href?: string;
}

const ProfileItem = ({ title, username, href }: ProfileItemProps) => {
  return (
    <div className=" font-mono flex justify-between w-[80vw] md:w-[50vw] items-center">
      <div>
        <span className="font-semibold underline text-xl">{title}</span> :{" "}
        <span className="text-xl"> {username}</span>
      </div>{" "}
      {href && (
        <Link href={href} target="_blank">
          visit
        </Link>
      )}
    </div>
  );
};

interface PaperItemProps {
  number: string;
  title: string;
  link: string;
}

const PaperItem = ({ number, title, link }: PaperItemProps) => {
  return (
    <div className="flex">
      <div className="w-10/12 justify-center items-center">
        {number}. {title}
      </div>
      <div className="w-1/12 justify-between items-center">
        <a target="_blank" className="font-bold" href={link}>
          read
        </a>
      </div>
    </div>
  );
};
