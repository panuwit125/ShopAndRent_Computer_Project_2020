import React from "react";
import { Form } from "antd";
const FormItem = Form.Item;
function questionComponent(props) {
  
  return (
    <div style={{ textAlign: "center" }}>
      {props.check ? (
        <h1 style={{ color: "white" }}>Lording...</h1>
      ) : (
        <h1 style={{ color: "white", fontSize: "32px" }}>{props.text}</h1>
      )}
    </div>
  );
}

export default questionComponent;
