import data from "../data/projects";
// import baseUrl from "../utils/constants";
import project from "../utils/interfaces/projectInterface";

const useProjects = new Promise<Array<project>>((resolve, reject) => {
  const projects: Array<project> = [];

  data.forEach((element: any) => {
    let rawProject = element.attributes;
    let project: project = {
      name: rawProject.name,
      description: rawProject.description,
      links: [
        {
          link: rawProject.link,
          platformIcon: rawProject.platformIcon,
        },
      ],
      technologies: rawProject.technologies,
      imgLink: rawProject.img,
    };
    projects.push(project);
  });
  resolve(projects);
});

export default useProjects;
