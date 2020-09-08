import { Form, Button, Input, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const FormItem = Form.Item;
const { Option } = Select;
import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";
import { name } from "file-loader";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";

function InsertProduct() {
  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [blandProduct, setBlandProduct] = useState("");
  const [image1Product, setIamge1Product] = useState("");
  const [url1, set1Url] = useState("");
  const [image2Product, setIamge2Product] = useState("");
  const [url2, set2Url] = useState("");
  const [image3Product, setIamge3Product] = useState("");
  const [url3, set3Url] = useState("");
  const [image4Product, setIamge4Product] = useState("");
  const [url4, set4Url] = useState("");

  const [show, setShow] = useState(0);
  const [isLoading,setisLoading] = useState(false);

  useEffect(()=>{
    if(!isLoading){
        setNameProduct("Acer Swift3");
        setDescriptionProduct("Acer Description");
        setPriceProduct("10,000");
        setBlandProduct("ACER")
    }
  },[])

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="br">
        <NavbarManage show={show} setShow={setShow} />
        <HeaderManage setShow={setShow} />
        <div style={{ padding: "20px 50px" }}>
          <h2 style={{ color: "black" }}>ชื่อสินค้า</h2>
          <Input
            className="ip-iuput"
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
          />
          <h2 style={{ color: "black" }}>รายละเอียดสินค้า</h2>
          <Input.TextArea
            rows="5"
            className="ip-iuput"
            value={descriptionProduct}
            onChange={(e) => setDescriptionProduct(e.target.value)}
          />
          <h2 style={{ color: "black" }}>ราคาสินค้า</h2>
          <Input
            className="ip-iuput"
            value={priceProduct}
            onChange={(e) => setPriceProduct(e.target.value)}
          />
          <h2 style={{ color: "black" }}>แบรน์สินค้า</h2>
          {/*<Input
            className="ip-iuput"
            value={blandProduct}
            onChange={(e) => setBlandProduct(e.target.value)}
          />*/}
          <Select
            defaultValue={blandProduct}
            className="ip-iuput"
            onChange={(e) => setBlandProduct(e.target.value)}
          >
            <Option value="ACER">ACER</Option>
            <Option value="LENOVO">LENOVO</Option>
            <Option value="DELL">DELL</Option>
          </Select>
          <h2 style={{ color: "black" }}>รูปสินค้า</h2>
          <div>
            <input
              type="file"
              onChange={(e) => setIamge1Product(e.target.files[0])}
              style={{ color: "black",marginBottom:"10px" }}
            />
            <input
              type="file"
              onChange={(e) => setIamge2Product(e.target.files[0])}
              style={{ color: "black",marginBottom:"10px" }}
            />
            <input
              type="file"
              onChange={(e) => setIamge3Product(e.target.files[0])}
              style={{ color: "black",marginBottom:"10px" }}
            />
            <input
              type="file"
              onChange={(e) => setIamge4Product(e.target.files[0])}
              style={{ color: "black",marginBottom:"10px" }}
            />
          </div>
          <Button
            onClick={() => postproduct()}
            type="primary"
            style={{ marginTop: "20px" }}
          >
            แก้ไขข้อมูลสินค้า
          </Button>
        </div>
      </div>
    </FormItem>
  );
}

export default InsertProduct;
