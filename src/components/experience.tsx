interface experience{
    imgPath:string,
    title:string,
    description:string,
}
interface experienceProps{
    expreience:experience
}
const Experience:React.FC<experienceProps> = (experienceProps) => {
    const experience = experienceProps.expreience;
    return ( 
        <div>
            
        </div>
     );
}
 
export default Experience;