'use client'
import React, { useState } from "react";
import projectsData from "./projects.json"; // Adjust path accordingly
import ProjectCard from "@/app/_components/Projects/ProjectCard";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col py-8 px-4 sm:px-6 lg:px-16 space-y-16 min-h-screen">
      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] lowercase mb-8 text-center">
        projects
      </h1>

      {projectsData.map((domain) => (
        <section key={domain.id}>
          <h2 className="text-2xl font-semibold font-[family-name:var(--font-geist-mono)] lowercase mb-6 border-b-2 border-black pb-2">
            {domain.id}. {domain.domain}
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {domain.projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={`${project.id} - ${project.title.toLowerCase()}`}
                src={project.src || "/images/default-project.png"}
                description={project.description}
                link={project.link || "#"}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
