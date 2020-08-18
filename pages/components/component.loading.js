import React, { useState, useEffect } from "react";
import { Form, Spin, Space } from "antd";
const FormItem = Form.Item;

function loadingComponent(props) {
  const [isLoading, setisLoading] = useState(false);
  const [type, setType] = useState("");
  useEffect(() => {
    setType(props.type);
    setisLoading(props.status);
  }, [props.status]);

  if (type === "fetchloading") {
    if (isLoading) {
      return (
        <div style={{ display: "block" }} className="modal">
          <div className="modal-content cl-modal">
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return (
      <div style={{ display: "block" }} className="modal">
        <div className="modal-content">
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      </div>
    );
  }
}

export default loadingComponent;
