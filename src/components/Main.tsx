import { useEffect, useState } from "react";
import { Names } from "../models/INames";
import { NameArray, getMessage, getUserName } from "../services/service";

export const Main = () => {
  const [namesLocal, setNames] = useState([]);
  const [msg, setMsg] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUserName().subscribe((name: any) => setUserName(name));
    NameArray.getNames().subscribe((values: any) => setNames(values));
    getMessage().subscribe((val: any) => setMsg(val));
  });

  return (
    <>
      {userName ? <h3>{userName}</h3> : <h3>no</h3>}
      <button>hay{msg}</button>
      {namesLocal.map((name: Names) => (
        <li key={name.id}>{name.name}</li>
      ))}
    </>
  );
};
