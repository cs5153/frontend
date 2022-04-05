import React from "react";
import "../css/SidePane.css";
import mockData from "../helper/mockData";
import TripItem from "./TripItem";
import profileImage from "../images/user.png";

const SidePane = () => {
  console.log(mockData.tripsList);

  return (
    <>
      <div className="sidePaneContainer">
        <div className="profileSection">
          <div className="proPicContainer">
            <img
              className="proPic"
              src={profileImage}
              alt={"profile picture"}
            />
          </div>
          <a href="" className="profileLink">
            Your profile
          </a>
        </div>
        <ul className="tripList">
          {mockData.tripsList.map((listItem) => (
            <TripItem tripName={listItem}></TripItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidePane;
