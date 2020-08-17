import { Card } from "antd";
const { Meta } = Card;
import React, { useState, useEffect } from "react";
import router from "next/router";

const CardProductComponent = (props) => {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    if (props) {
      setisLoading(true);
    }
  }, []);
  if (!isLoading) {
    return null;
  } else {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props.data.image_product} />}
        className="sp-card"
        onClick={() => router.push("/shop/description?id=" + props.data._id)}
      >
        <h3 style={{ color: "black" }}>{props.data.name_product}</h3>
        <h3 style={{ color: "black" }}>{props.data.description_product}</h3>
        <Meta description={"ราคา " + props.data.price_product + " บาท "} />
      </Card>
    );
  }
};

export default CardProductComponent;
