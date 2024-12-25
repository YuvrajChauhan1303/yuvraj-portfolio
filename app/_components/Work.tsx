import Image from "next/image";
import Link from "next/link";

interface WorkProps {
  duration: string;
  location: string;
  image: string;
  type: string;
  role: string;
  alt: string;
  bg: string;
  href: string;
}

const Work = ({
  duration,
  location,
  image,
  type,
  role,
  alt,
  bg,
  href,
}: WorkProps) => {
  return (
    <div className={`h-[420px] w-[300px] ${bg} border-black border-2`}>
      <h1 className="text-lg relative top-2 px-4 font-[family-name:var(--font-roboto-condensed)] underline underline-offset-2">
        {duration}
      </h1>
      <h2 className="mt-2 text-3xl font-[family-name:var(--font-roboto-condensed)] py-2 px-4">
        {type}
      </h2>
      <h3 className="text-xl px-4 font-[family-name:var(--font-roboto-condensed)]">
        {role}
      </h3>
      <div className="h-[208px] flex items-center justify-center w-full mt-4 mb-4 border-t-2 border-b-2 border-black">
        <Image
          src={image}
          width={296}
          height={196}
          alt={alt}
          className="h-[200px] w-[292px] object-cover"
        />
      </div>
      <p className="px-4 text-lg font-[family-name:var(--font-roboto-condensed)]">
        {location}
      </p>
      <Link href={href} className="w-full flex justify-end px-4">
        {" "}
        Learn More
      </Link>
    </div>
  );
};

export default Work;
