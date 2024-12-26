interface PaperItemProps {
  number: string;
  title: string;
  link: string;
}

const PaperItem = ({ number, title, link }: PaperItemProps) => {
  return (
    <div className="flex">
      <div className="w-10/12 justify-center items-center">
        {number}. {title}
      </div>
      <div className="w-1/12 justify-between items-center">
        <a target="_blank" className="font-bold" href={link}>
          read
        </a>
      </div>
    </div>
  );
};

export default PaperItem;
