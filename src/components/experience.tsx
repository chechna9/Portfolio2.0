import experience from "../utils/interfaces/experienceInterface";
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface experienceProps {
  experience: experience;
}
const Experience: React.FC<experienceProps> = ({experience}) => {
  // const experience = experienceProps.experience;

  return (
    <div className="bg-prim1 rounded-3xl flex flex-col md:flex-row space-x-3  text-white md:w-[80vw] w-[75vw] pb-8 mx-auto max-w-3xl pr-2">
      {/* image */}
      <LazyLoadImage

        src={experience.imgPath}
        alt=""
        className="rounded-3xl md:w-[40%] w-[45vw] aspect-square object-cover -translate-x-[10%] "
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
