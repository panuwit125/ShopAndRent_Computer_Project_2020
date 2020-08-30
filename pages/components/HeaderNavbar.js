import React, { useState, useEffect } from "react";
import router from "next/router";
import DehazeIcon from "@material-ui/icons/Dehaze";

const HeaderComponent = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [type, setType] = useState("");
  useEffect(() => {
    if (props) {
      setType(localStorage.getItem("type"));
      setisLoading(true);
    }
  }, []);

  if (!isLoading) {
    return null;
  } else {
    if (props.page === "Payment") {
      return (
        <div className="br-header" style={{ marginBottom: "0px" }}>
          <div>
            <DehazeIcon
              style={{ color: "white" }}
              onClick={() => console.log("dfd")}
            />
          </div>
          <div>
            <h1 className="br-header-font">SECONDHAND</h1>
            <h1 className="br-header-font">NOTEBOOK</h1>
          </div>
          <div>
            {props.page === "Home" ? (
              <DehazeIcon style={{ opacity: "0" }} />
            ) : (
              <h1 className="header-typepage">{type}</h1>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="br-header">
          <div>
            {props.page === "Home" ? (
              <DehazeIcon
                style={{ color: "white",opacity: "0" }}
                onClick={() => props.setshow(160)}
              />
            ) : (
              <DehazeIcon
                style={{ color: "white" }}
                onClick={() => props.setshow(160)}
              />
            )}
          </div>
          <div>
            <h1 className="br-header-font">SECONDHAND</h1>
            <h1 className="br-header-font">NOTEBOOK</h1>
          </div>
          <div>
            {props.page === "Home" ? (
              <DehazeIcon style={{ opacity: "0" }} />
            ) : (
              <h1 className="header-typepage">{type}</h1>
            )}
          </div>
        </div>
      );
    }
  }
};

export default HeaderComponent;
