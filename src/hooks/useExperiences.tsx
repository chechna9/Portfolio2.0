import data from "../data/experiences";
// import baseUrl from "../utils/constants";
import experience from "../utils/interfaces/experienceInterface";
const useExperiences = new Promise<Array<experience>>((resolve, reject) => {
  const experiences: Array<experience> = [];

  data.forEach((element: any) => {
    let rawExperience = element.attributes;
    let experience: experience = {
      title: rawExperience.title,
      description: rawExperience.description,

      imgPath: rawExperience.img,
    };
    experiences.push(experience);
  });
  resolve(experiences);
});

export default useExperiences;
