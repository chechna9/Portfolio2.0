import baseUrl from "../utils/constants";
import project from "../utils/interfaces/projectInterface";


const useProjects = new Promise<Array<project>>((resolve, reject) => {
  const projects: Array<project> = [];
  fetch(`${baseUrl}/api/projects?populate=*`)
    .then((response) => response.json())
    .then((res) => {
      console.log(res.data[0].attributes.imgLink.data.attributes.url);
      
      res.data.forEach((element: any) => {
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
          imgLink: `${baseUrl}${rawProject.imgLink.data.attributes.url}`,
        };
        projects.push(project);
      });
      resolve(projects);
    }).catch((error)=>{
      reject(error);
    });
});

export default useProjects;
