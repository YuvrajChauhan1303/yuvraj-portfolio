import React from "react";
import Link from "next/link";
import workExperience from "./work.json";
import positions from "./position.json";

export default function Work() {
  return (
    <div className="flex flex-col space-y-8 py-8 px-4 sm:px-6 lg:px-24 min-h-screen">
      <div className="bg-white p-8 border-2 border-black border-dashed">
        <h1 className="font-[family-name:var(--font-geist-mono)] text-3xl font-bold">
          work experience
        </h1>
        <div className="space-y-6 mt-6 font-mono">
          <p>
            yuvraj has over two years of experience in website development and
            has spent a year honing his skills in management and leadership as
            part of the technical committee of{" "}
            <span className="font-bold">IIIT Vadodara, ICD</span>. additionally,
            he served as a teaching assistant for{" "}
            <span className="font-bold">physics</span> at his institute. during
            his recent internship at{" "}
            <span className="font-bold">Dhankhar Technologies Pvt. Ltd.</span>,
            he gained valuable insights and delivered a satisfactory
            performance. he has also been part of the{" "}
            <span className="font-bold">GDSC IIIT Vadodara, ICD</span> web
            development team for more than a year, contributing to the
            development of the <span className="font-bold">volunteer page</span>{" "}
            of the website.
          </p>
          <p>
            as a member of the technical committee, he helped develop the
            websites for{" "}
            <Link href={""} className="font-bold">
              STAVYA 2024
            </Link>
            , the annual cultural-literature festival of
            <span className="font-bold"> IIIT Vadodara, ICD </span>, and{" "}
            <Link href={""} className="font-bold">
              HORIZON 2024
            </Link>
            , the annual technical festival of{" "}
            <span className="font-bold">IIIT Vadodara, ICD</span>, alongside{" "}
            <span className="font-bold">@trijay</span>. during the technical
            festival, he conducted a{" "}
            <span className="font-bold">
              3-day workshop on frontend development
            </span>
            , breaking down the anatomy of a landing page.
          </p>
          <p>
            he has also collaborated with{" "}
            <span className="font-bold">@srijan</span>,{" "}
            <span className="font-bold">@trijay</span>, and{" "}
            <span className="font-bold">@tanay</span> on several semester
            projects, consistently proving his value as a team member.
            additionally, he worked with{" "}
            <span className="font-bold">@harshit</span> on{" "}
            <span className="font-bold">stavya 2024 </span>
            and <span className="font-bold">horizon 2024</span>, where{" "}
            <span className="font-bold">@harshit</span> served as the lead
            designer, and <span className="font-bold">@trijay</span> and yuvraj
            handled development.
          </p>
        </div>
      </div>
      {/* Work Experience */}
      <div className="bg-white p-8 border-2 border-black border-dashed">
        <h1 className="font-[family-name:var(--font-geist-mono)] text-3xl font-bold">
          1. internship experience
        </h1>
        <div className="space-y-6 mt-6 font-mono">
          {workExperience.map((work) => (
            <div key={work.id} className="mb-6">
              <h2 className="flex justify-between text-xl font-semibold lowercase">
                <span>
                  {work.id }{" "}{work.title}, {work.organization}
                </span>
                <span className="underline">{work.duration}</span>
              </h2>
              <p className="mt-2 lowercase">{work.description}</p>
              {work.mentor && (
                <p className="mt-2 lowercase font-bold">mentor: {work.mentor}</p>
              )}
              {work.link && (
                <p className="mt-2 lowercase">
                  website:{" "}
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline lowercase"
                  >
                    {work.organization}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Positions of Responsibility */}
      <div className="bg-white p-8 border-2 border-black border-dashed">
        <h1 className="font-[family-name:var(--font-geist-mono)] text-3xl font-bold">
          2. positions of responsibility / management
        </h1>
        <div className="space-y-6 mt-6 font-mono">
          {positions.map((pos) => (
            <div key={pos.id} className="mb-6">
              <h2 className="flex justify-between text-xl font-semibold lowercase">
                <span>
                  {pos.id }{" "}{pos.title}, {pos.organization}
                </span>
                <span className="underline">{pos.duration}</span>
              </h2>
              <p className="mt-2 lowercase">{pos.responsibilities}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
