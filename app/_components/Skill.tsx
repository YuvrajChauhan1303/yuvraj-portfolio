import React from "react";

interface SkillProps {
  title: string;
  items: { text: string }[];
}

const Skill = ({ title, items }: SkillProps) => {
  return (
    <div className="w-screen md:py-8 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-2xl lowercase font-mono underline mb-4 md:mb-0 md:w-1/3 flex md:text-center md:items-center">
          {title}
        </div>

        <div className="flex flex-wrap gap-4 justify-start md:w-2/3 w-[75vw]">
          {items.map((item, index) => (
            <SkillItem key={index} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SkillItemProps {
  text: string;
}

const SkillItem = ({ text }: SkillItemProps) => {
  return (
    <div className="bg-gray-100 font-[family-name:var(--font-geist-mono)] px-4 py-2 border-2 border-black text-center">
      {text}
    </div>
  );
};

export default Skill;
