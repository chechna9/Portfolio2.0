import { myPict } from "../utils/assets";
const useExperiences = () => {
    interface experience{
        imgPath:string,
        title:string,
        description:string,
    }
    const experiences:Array<experience> = [
        {
            imgPath:myPict,
            title:"Participant at  Haick  23",
            description:"Datathon hosted by School of Ai Algiers",
        },
        {
            imgPath:myPict,
            title:"Participant at  Haick  23",
            description:"Datathon hosted by School of Ai Algiers",
        },
        {
            imgPath:myPict,
            title:"Participant at  Haick  23",
            description:"Datathon hosted by School of Ai Algiers",
        },
    ];
    return experiences;
}
 
export default useExperiences;