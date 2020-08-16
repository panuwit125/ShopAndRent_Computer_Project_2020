import { Form, Button, Card } from "antd";
const FormItem = Form.Item;
const { Meta } = Card;
import React, { useState } from "react";
import Navbar from "./components/component.navbar";
import CardProduct from './components/component.cardproduct'
import Header from './components/component.header'


function ShopPage() {
  const [nameproduct , setNameproduct] = useState('LENOVO')

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="sp">
        <div className="br-header">
          <Header />
        </div>
        <div className="br-body">
          <div className="sp-body-1">
            <Navbar setname={setNameproduct} page={"shop"} />
          </div>
          <div className="sp-body-2">
            <div className="sp-body-2-header">
              <h1 style={{color:"black",fontSize:"40px"}}>{nameproduct}</h1>
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
