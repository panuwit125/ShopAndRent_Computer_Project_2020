import { Form, Button, Card } from "antd";
const FormItem = Form.Item;
const { Meta } = Card;
import React from "react";

const CardProduct = () => {
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
    >
        <h3 style={{color:"black"}}>Macbook Pro 2020</h3>
        <h3 style={{color:"black"}}>รายละเอียด ....</h3>
      <Meta description="Price 5000.-" />
    </Card>
  );
};

function ShopPage() {
  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="br">
        <div className="br-header">
          <h1>Header</h1>
        </div>
        <div className="br-body">
          <div className="sp-body-1">
            <Button className="sp-btn-1">SIGN-IN</Button>
            <Button className="sp-btn-1">ACER</Button>
            <Button className="sp-btn-1">DELL</Button>
            <Button className="sp-btn-1">LENOVO</Button>
            <Button className="sp-btn-1">MSI</Button>
          </div>
          <div className="sp-body-2">
            <div className="sp-body-2-header">
              <h1>ACER</h1>
            </div>
            <div className="sp-body-2-body">
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default ShopPage;
