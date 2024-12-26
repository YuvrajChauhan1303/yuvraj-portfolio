import React from "react";
import Image from "next/image";

interface PolaroidProps {
  image: string;
  text: string;
  height: string;
  size: number;
  border?: boolean;
  classname?: string;
}

const Polaroid = ({
  image,
  text,
  height,
  size,
  border,
  classname,
}: PolaroidProps) => {
  return (
    <div
      className={`pb-12 pt-6 px-6 bg-white ${height} flex flex-col ${
        border && "border-2 border-black border-dashed "
      } ${classname}`}
    >
      <Image
        src={image}
        width={size}
        height={size}
        alt="a graphical representation of a picsart"
        className="object-contain border-2 border-zinc-400 p-2"
      />
      <p className="text-center mt-4 font-[family-name:var(--font-playwrite)]">
        {text}
      </p>
    </div>
  );
};

export default Polaroid;
