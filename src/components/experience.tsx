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
    <div className="bg-prim1 rounded-3xl flex flex-col md:flex-row space-x-3  text-white md:w-[80vw] w-[50vw] pb-8 mx-auto max-w-3xl pr-2 ">
      {/* image */}
      <img
        src={experience.imgPath}
        alt=""
        className="rounded-3xl md:w-[40%] w-[45vw] object-fill -translate-x-[10%] "
      />
      {/* event content */}
      <div className="flex flex-col pt-2 text">
        <h3 className="font-bold sm:text-2xl">{experience.title}</h3>
        <p className="sm:text-xl mt-2">{experience.description}</p>
      </div>
    </div>
  );
};

export default Experience;
