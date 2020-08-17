import React from "react";
import router from "next/router";

const HeaderComponent = (props) => {
    return (
    <h1 style={{fontSize:"50px"}}>SECONDHAND NOTEBOOK ({props.page})</h1>      
    );
  };

  export default HeaderComponent;