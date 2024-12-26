import Link from "next/link";

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
export default ProfileItem;
