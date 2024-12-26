interface EducationItemProps {
  subject: string;
}

const EducationItem = ({ subject }: EducationItemProps) => {
  return (
    <div className="border-2 border-black bg-gray-200 py-2 px-4 font-mono">
      {subject}
    </div>
  );
};

export default EducationItem;
