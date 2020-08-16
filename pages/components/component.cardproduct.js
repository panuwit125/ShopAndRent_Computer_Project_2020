import { Card } from "antd";
const { Meta } = Card;
import React from "react";
import router from "next/router";

const CardProductComponent = () => {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://www.techmoblog.com/uploads/content_images/202004/img_1586763485_6180709595af.jpg"
          />
        }
        className="sp-card"
        onClick={()=>router.push("/page.description")}
      >
        <h3 style={{ color: "black" }}>Macbook Pro 2020</h3>
        <h3 style={{ color: "black" }}>รายละเอียด ....</h3>
        <Meta description="Price 5000.-" />
      </Card>
    );
  };

  export default CardProductComponent;