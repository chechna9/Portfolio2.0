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
  const counter = (timout?:number) => new Promise((resolve) => setTimeout(resolve,timout?? 50));

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
    let _fname = "Ahmed Yacine";
    let _lname = "Bouchouareb";
    let _status = "Artificial Intelligence & Data science student";
    let _mob = "Mobile Development";
    let _uiux = "UI/UX";
    let _web = "Web Development";
    let _ai = "Artificial Intelligence";
    let _ds = "Data Science";
    let _loading = "Loading ...";
  
    //incremental fill
    for (let i = 0; i <= _fname.length; i++) {
  
      setBio({
        fname:_fname.slice(0,i),
        lname: "",
        status:"",
        web: "",
        mob: "",
        uiux: "",
        ai: "",
        ds: "",
        loading: "",
      });
      await counter();
    }
    for (let i = 0; i <= _lname.length; i++) {
      setBio({
        fname:_fname,
        lname: _lname.slice(0,i),
        status: "",
        web: "",
        mob: "",
        uiux: "",
        ai: "",
        ds: "",
        loading: "",
      });
      await counter();
    }
    for (let i = 0; i <= _status.length; i++) {
      setBio({
        fname:_fname,
        lname: _lname,
        status: _status.slice(0,i),
        mob: "",
        web: "",
        uiux: "",
        ai: "",
        ds: "",
        loading: "",
      });
      await counter();
    }
    for (let i = 0; i <= _mob.length; i++) {
      setBio({
        fname:_fname,
        lname: _lname,
        status:_status,
        mob: _mob.slice(0,i),
        web: "",
        uiux: "",
        ai: "",
        ds: "",
        loading: "",
      });
      await counter();
    }
    for (let i = 0; i <= _web.length; i++) {
      setBio({
        fname:_fname,
        lname: _lname,
        status:_status,
        mob: _mob,
        web:  _web.slice(0,i),
        uiux: "",
        ai: "",
        ds: "",
        loading: "",
      });
      await counter();
    }
    for (let i = 0; i <= _uiux.length; i++) {
      setBio({
        fname:_fname,
        lname: _lname,
        status:_status,
        mob: _mob,
        web:  _web,
        uiux: _uiux.slice(0,i),
        ai: "",
        ds: "",
        loading: "",
      });
      await counter();
    }
    for (let i = 0; i <= _ai.length; i++) {
      setBio({
        fname:_fname,
        lname: _lname,
        status:_status,
        mob: _mob,
        web:  _web,
        uiux: _uiux,
        ai: _ai.slice(0,i),
        ds: "",
        loading: "",
      });
      await counter();
    }
    for (let i = 0; i <= _ds.length; i++) {
      setBio({
        fname:_fname,
        lname: _lname,
        status:_status,
        mob: _mob,
        web:  _web,
        uiux: _uiux,
        ai: _ai,
        ds: _ds.slice(0,i),
        loading: "",
      });
      await counter();
    }
    for (let i = 0; i <= _loading.length; i++) {
      setBio({
        fname:_fname,
        lname: _lname,
        status:_status,
        mob: _mob,
        web:  _web,
        uiux: _uiux,
        ai: _ai,
        ds: _ds,
        loading: _loading.slice(0,i),
      });
      await counter();
    }
   
  };
  useEffect(() => {
    fillIt();
  }, []);

  return bio;
};

export default useBio;
