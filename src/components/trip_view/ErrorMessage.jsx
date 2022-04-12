import React, { useState } from "react";
import "../../css/TripError.css";

const ErrorMessage = (props) => {

  return (
    <>
      {console.log("message is : ",props.message)}
      <h6 className="errorMessage">{props.message}</h6>
    </>
  );
};

export default ErrorMessage;
