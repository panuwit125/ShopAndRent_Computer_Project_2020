import React from "react";
import { Form } from "antd";

const FormItem = Form.Item;
function componentSuggestion(props) {
  if (props.page === "snapshot") {
    return (
      <FormItem>
        <div
          style={{
            width: "398px",
            height: "222px",
            background: "white",
            borderRadius: "25px",
            padding: "20px",
            flexDirection: "column",
            textAlign: "center",
          }}
          className="nu-font-covid"
        >
          <div>
            <h1 style={{ color: "#EC6E00", fontSize: "35px" }}>{props.textAlertOne}</h1>
          </div>
          <div>
            <h1 style={{ color: "black", fontSize: "22px" }}>
              {props.textAlertTwo}
            </h1>
          </div>
        </div>
      </FormItem>
    );
  } else {
    return (
      <FormItem>
        <div
          style={{
            width: "398px",
            height: "222px",
            background: "white",
            borderRadius: "25px",
            padding: "20px",
            flexDirection: "column",
            textAlign: "center",
          }}
          className="nu-font-covid"
        >
          <div>
            <h1 style={{ color: "#EC6E00", fontSize: "35px" }}>{props.textAlertOne}</h1>
          </div>
          <div>
            <h1 style={{ color: "black", fontSize: "22px" }}>
              {props.textAlertTwo}
            </h1>
          </div>
        </div>
      </FormItem>
    );
  }
}

export default componentSuggestion;
