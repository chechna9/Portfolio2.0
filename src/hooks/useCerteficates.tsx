import baseUrl from "../utils/constants";
import certeficate from "../utils/interfaces/certeficateInterface";
const useCerteficates = new Promise<Array<Array<certeficate>>>(
  (resolve, reject) => {
    const certeficatesList: Array<certeficate> = [];

    fetch(`${baseUrl}certeficates`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res)
        res.forEach((element: any) => {
          let rawCerteficate = element;
          
          let cert: certeficate = {
            imgUrl: rawCerteficate.img,
          };
          certeficatesList.push(cert);
        });
        const paginated: Array<Array<certeficate>> = [];

        for (let i = 0; i < certeficatesList.length; i += 6) {
          const chunk = certeficatesList.slice(i, i + 6);
          paginated.push(chunk);
        }
        resolve(paginated);
      })
      .catch((error) => {
        reject(error);
      });
  }
);

export default useCerteficates;
