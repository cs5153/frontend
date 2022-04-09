import React from "react";
import "../css/SidePane.css";
import {mockData, getDataMap}from "../helper/mockData";
import TripItem from "./TripItem";
import profileImage from "../images/user.png";

const SidePane = () => {
  console.log("TRIPS LIST IS: ",getDataMap(mockData.existingUsersData["Tony"].trips));

  let tripList = getDataMap(mockData.existingUsersData["Tony"].trips)
  let itemIndex = 0
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
          {Array.from(tripList.values()).map((listItem) => (
            <TripItem key={itemIndex++} tripName={listItem.name}></TripItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidePane;
