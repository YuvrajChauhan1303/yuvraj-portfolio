import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  src: string;
  description: string;
  link: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const ProjectCard = ({
  title,
  src,
  description,
  link,
  index,
  hoveredIndex,
  setHoveredIndex,
}: ProjectCardProps) => {
  const handleTouch = () => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  return (
    <div
      className={cn(
        "w-[90vw] h-[35vh] sm:w-[80vw] sm:h-[40vh] md:w-[60vw] md:h-[45vh] lg:w-[40vw] lg:h-[50vh] xl:w-[35vw] xl:h-[55vh] flex flex-col items-center border-2 border-black shadow-[4px_4px_0px_#555] transition-all duration-300",
        hoveredIndex !== null &&
          hoveredIndex !== index &&
          "blur-sm scale-[0.98]"
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onTouchStart={handleTouch} // Handle mobile tap
    >
      <h1 className="px-3 py-2 text-sm sm:text-md md:text-lg font-bold uppercase tracking-wide border-b-2 border-black w-full text-center bg-gray-100">
        {title}
      </h1>
      <div className="relative w-full h-full overflow-hidden transition-transform duration-300">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/70 flex flex-col justify-end p-3 sm:p-4 text-white transition-opacity duration-300",
            hoveredIndex === index ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="text-xs sm:text-sm md:text-md mb-2 lowercase font-mono">
            {description.length > 200
              ? description.slice(0, 200) + "..."
              : description}
          </p>
          <Button
            className="bg-white text-black font-bold py-1 px-3 sm:py-2 sm:px-4 uppercase border-2 border-black hover:bg-gray-200"
            onClick={() => window.open(link, "_blank")}
          >
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
