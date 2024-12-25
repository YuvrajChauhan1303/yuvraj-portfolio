import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  content: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, content, href }) => {
  return (
    <div className="relative p-6 bg-white border-2 border-black h-[230px]">
      {/* Title positioned at the top */}
      <h3 className="absolute top-4 left-4 text-2xl font-semibold font-[family-name:var(--font-roboto-condensed)]">
        {title}
      </h3>

      {/* Content stays in flow */}
      <p className="text-gray-700 mt-12 font-mono mb-4">{content}</p>

      {/* GitHub link positioned at the bottom */}
      <Link
        href={href}
        className="absolute bottom-4 right-4 text-gray-500 underline hover:text-gray-700"
      >
        Github Link
      </Link>
    </div>
  );
};

export default ProjectCard;
