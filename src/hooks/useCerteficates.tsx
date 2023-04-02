import { dataCamp } from "../utils/assets";
const useCerteficates = () => {
    interface certeficate{
        imgPath:string,
    }
    const certeficatesList:Array<certeficate> = [
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
            {
                imgPath:dataCamp,
            },
    ];
    const paginated :Array<Array<certeficate>> = [];
  
  for (let i = 0; i < certeficatesList.length; i += 6) {
    const chunk = certeficatesList.slice(i, i + 6);
    paginated.push(chunk);
  }
    return  paginated;
}
 
export default useCerteficates;