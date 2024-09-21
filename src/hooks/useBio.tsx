/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

interface Bio {
  fname: string;
  lname: string;
  status: string;
  mob: string;
  web: string;
  uiux: string;
  ai: string;
  ds: string;
  loading: string;
}

const useBio = (): Bio => {
  const counter = (timeout?: number) => new Promise((resolve) => setTimeout(resolve, timeout ?? 50));

  const [bio, setBio] = useState<Bio>({
    fname: "",
    lname: "",
    status: "",
    web: "",
    mob: "",
    uiux: "",
    ai: "",
    ds: "",
    loading: "",
  });

  const fillIt = async () => {
    const fields = [
      { key: "fname", value: "Ahmed Yacine" },
      { key: "lname", value: "Bouchouareb" },
      { key: "status", value: "Computer science engineer specialized in Ai & Ds" },
      { key: "mob", value: "Mobile Development" },
      { key: "web", value: "Web Development" },
      { key: "uiux", value: "UI/UX" },
      { key: "ai", value: "Artificial Intelligence" },
      { key: "ds", value: "Data Science" },
      { key: "loading", value: "Loading ..." },
    ];

    for (const { key, value } of fields) {
      for (let i = 0; i <= value.length; i++) {
        setBio((prevBio) => ({
          ...prevBio,
          [key]: value.slice(0, i),
        }));
        await counter();
      }
    }
  };

  useEffect(() => {
    fillIt();
  }, []);

  return bio;
};

export default useBio;
