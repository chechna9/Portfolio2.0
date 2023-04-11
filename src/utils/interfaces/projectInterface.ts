interface link {
  platformIcon: string;
  link: string;
}
interface project {
  name: string;
  description: string;
  imgLink: string;
  links: Array<link>;
  technologies: string;
}

export default project;
