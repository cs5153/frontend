import React from "react";
import mockData from "../helper/mockData";
import "../css/Page.css";
import SidePane from "./SidePane";
import Main from "./Main";

const Page = () => {
  return (
    <>
      <div className="pageContainer">
        <SidePane />
        <Main />
      </div>
    </>
  );
};

export default Page;
