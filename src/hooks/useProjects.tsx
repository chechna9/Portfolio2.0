import project from "../utils/interfaces/projectInterface";


const useProjects = new Promise<Array<project>>((resolve, reject) => {
  const projects: Array<project> = [];
  fetch("http://localhost:1337/api/projects")
    .then((response) => response.json())
    .then((res) => {
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
          imgLink: "chantech.png",
        };
        projects.push(project);
      });
      resolve(projects);
    }).catch((error)=>{
      reject(error);
    });
});

export default useProjects;
