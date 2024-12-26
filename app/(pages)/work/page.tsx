import Link from "next/link";
import React from "react";

export default function Work() {
  return (
    <div className="flex flex-col space-y-8 py-8 px-4 sm:px-6 lg:px-24 min-h-screen">
      {/* work experience */}
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

      {/* internship */}
      <div className="bg-white p-8 border-2 border-black border-dashed">
        <h1 className="font-[family-name:var(--font-geist-mono)] text-xl md:text-2xl font-bold">
          1. internship experience
        </h1>
        <div className="mt-6 space-y-6 font-mono px-6">
          <h2 className=" flex justify-between">
            <span className="text-xl font-semibold">
              1.1 Web Developer, Dhankhar Technologies Private Limited
            </span>{" "}
            <span className="underline">Sept. - Dec. 2024</span>
          </h2>

          <p>
            yuvraj worked as the lead developer on the website for the company{" "}
            <Link
              href={"https://dhankhar.co.in"}
              target="_blank"
              className="font-bold"
            >
              Dhankhar Technologies Private Limited
            </Link>
            , where he designed and developed the website from scratch. during
            his internship, he explored concepts such as{" "}
            <span className="font-bold">SEO optimization</span>,
            <span className="font-bold">performance optimization</span>, and
            <span className="font-bold">accessibility optimization</span> to
            ensure a high SEO score and fast website performance.
          </p>
          <p>
            yuvraj gained hands-on experience with{" "}
            <span className="font-bold">AWS Amplify</span> as a platform for
            deploying websites and learned how to work in production
            environments. during the internship, he was introduced to intricate
            design principles such as maintaining equal padding/margins and
            ensuring uniformity across multiple pages, demonstrating how
            simplicity can be made elegant. his mentor,{" "}
            <Link
              href={"https://www.dhankhar.co.in/about-us"}
              target="_blank"
              className="font-bold"
            >
              hemant dhankhar
            </Link>
            , guided him throughout the 4-month journey, providing valuable
            insights and support.
          </p>

          <p>
            his work can be viewed here :{" "}
            <Link
              href={"https://www.dhankhar.co.in"}
              target="_blank"
              className="font-bold"
            >
              {" "}
              Dhankhar Technologies Private Limited
            </Link>
          </p>
        </div>
        <div className="mt-6 space-y-6 font-mono px-6">
          <h2 className=" flex justify-between">
            <span className="text-xl font-semibold">
              1.2 Teaching Assistant, IIIT Vadodara ICD
            </span>{" "}
            <span className="underline">Sept. - Dec. 2024</span>
          </h2>

          <p>
            during the PH100: mechanics and thermodynamics course, yuvraj served
            as a teaching assistant (TA) under{" "}
            <span className="font-bold">dr. vivek m. vyas</span>, supporting a
            class of 101 students alongside{" "}
            <span className="font-bold">@tanay</span>. his responsibilities
            included engaging with first-year students and teaching them MATLAB
            tools and libraries such as{" "}
            <span className="font-bold">symbolic math tools</span>,
            <span className="font-bold">ODE45</span>, and{" "}
            <span className="font-bold">plot functions</span>.
          </p>
          <p>
            additionally, he and <span className="font-bold">@tanay</span>{" "}
            conducted <span className="font-bold">viva examinations </span>
            to assess the students&apos; understanding of theoretical concepts
            and their practical applications. this role allowed him to enhance
            his teaching skills, work collaboratively, and provide constructive
            feedback to help students improve their learning experience.
          </p>
        </div>
      </div>

      {/* position of responsibility */}
      <div className="bg-white p-8 border-2 border-black border-dashed">
        <h1 className="font-[family-name:var(--font-geist-mono)] text-xl md:text-2xl font-bold">
          2. positions of responsibility / management
        </h1>
        <div className="mt-6 space-y-6 font-mono px-6">
          <h2 className=" flex justify-between">
            <span className="text-xl font-semibold">
              2.1 Member, Technical Committee
            </span>{" "}
            <span className="underline">May. 2023 - Sept. 2024</span>
          </h2>
        </div>
        <div className="mt-6 space-y-6 font-mono px-6">
          <h2 className=" flex justify-between">
            <span className="text-xl font-semibold">
              2.2 Volunteer, Web Development @ GDSC IIIT Vadodara, ICD
            </span>{" "}
            <span className="underline">Sept. 2023 - Sept. 2024</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
