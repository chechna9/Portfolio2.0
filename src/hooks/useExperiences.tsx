
import baseUrl from "../utils/constants";
import experience from "../utils/interfaces/experienceInterface";
const useExperiences = new Promise<Array<experience>>((resolve, reject) => {
  const experiences: Array<experience> = [];
  fetch(`${baseUrl}/api/experiences?populate=*`)
    .then((response) => response.json())
    .then((res) => {
      res.data.forEach((element: any) => {
        let rawExperience = element.attributes;
        let experience: experience = {
          title: rawExperience.title,
          description: rawExperience.description,
          
          imgPath: `${baseUrl}${rawExperience.img.data.attributes.url}`,
        };
        experiences.push(experience);
      });
      resolve(experiences);
    }).catch((error)=>{
      reject(error);
    });
});

export default useExperiences;
