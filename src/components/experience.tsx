interface experience {
  imgPath: string;
  title: string;
  description: string;
}
interface experienceProps {
  expreience: experience;
}
const Experience: React.FC<experienceProps> = (experienceProps) => {
  const experience = experienceProps.expreience;

  return (
    <div className="bg-prim1  rounded-3xl flex flex-col sm:flex-row space-x-3 text-white">
      <img
        src={experience.imgPath}
        alt=""
        className="rounded-3xl w-[30%] object-fill"
      />

      <div className="flex flex-col pt-2">
        <h3 className="font-bold">{experience.title}</h3>
        <p>{experience.description}</p>
      </div>
    </div>
  );
};

export default Experience;
