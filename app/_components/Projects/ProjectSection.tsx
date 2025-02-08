import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectProps {
  card: {
    title: string;
    src: string;
    description: string;
    link: string;
  }[];
  title: string;
}

const ProjectSection = ({ card, title }: ProjectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex-col gap-6 px-[4rem] flex">
      <h1 className="font-mono font-semibold underline text-xl">{title}</h1>
      <div className="flex gap-6 px-8 flex-row flex-wrap justify-center">
        {card.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            src={project.src}
            description={project.description}
            link={project.link} // Pass project link
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
