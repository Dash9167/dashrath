import React from "react";
import "./css/about.css";
import Databases from "./databases";

const Database = () => {
  return (
   <>
    <Databases data="MySql" percent={85} icon="fa-solid fa-database"/>
    <Databases data="Sql" percent={85} icon="fa-solid fa-database"/>
    <Databases data="MongoDB" percent={65} icon="fa-brands fa-mdb"/>
   </>

  );
};
export default Database;
