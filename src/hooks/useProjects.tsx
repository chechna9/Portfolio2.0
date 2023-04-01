

 
const useProjects = () => {
    interface link{
        platformIcon:string,
        link:string,
      }
      interface project {
        name:string,
        description:string,
      imgLink: string,
      links:Array<link>,
      technologies: string,
      }
      const projects:Array<project> = [
        {
          name: "Chantech",
          description:
            "Mobile  application used for managing sites , can handle workers , equipments and tasks ...",
          imgLink: "chantech.png",
          links: [
            {
              platformIcon: "github.svg",
              link: "https://github.com/chechna9/Chantech-flutterApp",
            },
          ],
          technologies: "Flutter , NodeJs , MYSQL",
        },
        {
          name: "Chantech",
          description:
            "Mobile  application used for managing sites , can handle workers , equipments and tasks ...",
          imgLink: "chantech.png",
          links: [
            {
              platformIcon: "github.svg",
              link: "https://github.com/chechna9/Chantech-flutterApp",
            },
          ],
          technologies: "Flutter , NodeJs , MYSQL",
        },
        
        
      ];
    
    return {projects};
}
 
export default useProjects;

