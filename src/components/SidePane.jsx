import React from "react";
import "../css/SidePane.css";
import {mockData, getDataMap}from "../helper/mockData";
import TripItem from "./TripItem";
import profileImage from "../images/user.png";
import jsCookie from "js-cookie";

const SidePane = () => {
  const user = jsCookie.get('username');
  let tripList = mockData.users[user].trips.map(tripId => ({id: tripId, ...mockData.trips[tripId]}));
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
          {Array.from(tripList.values()).map((trip) => (
            <TripItem key={trip.name} tripName={trip.name} tripId={trip.id}></TripItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidePane;
