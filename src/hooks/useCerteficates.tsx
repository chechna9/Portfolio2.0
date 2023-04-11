import baseUrl from "../utils/constants";
import certeficate from "../utils/interfaces/certeficateInterface";
const useCerteficates = new Promise<Array<Array<certeficate>>>(
  (resolve, reject) => {
    const certeficatesList: Array<certeficate> = [];

    fetch(`${baseUrl}/api/certeficates?populate=*`)
      .then((response) => response.json())
      .then((res) => {
        res.data[0].attributes.img.data.forEach((element: any) => {
          let rawCerteficate = element.attributes;
          console.log(rawCerteficate);
          let cert: certeficate = {
            imgUrl: `${baseUrl}${rawCerteficate.url}`,
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
