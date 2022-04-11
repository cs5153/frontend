import React, { useState } from "react";
import "../css/ErrorMessage.css";

const ErrorMessage = (props) => {
  let css = "errorMessage "
  if(props.css){
    css = "errorMessage "+props.css
  }
  
  return (
    <>
      <h6 className={css}>{props.message}</h6>
    </>
  );
};

export default ErrorMessage;
