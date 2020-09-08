import { Form, Button, Input, Select } from "antd";
const FormItem = Form.Item;
const { Option } = Select;
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM5ODNmMzhhNDM4MjY5ZDA2ZmJhMzUiLCJpYXQiOjE1OTc2Mzg2MTd9.JEeHZBwagb1jltAu1_--YKfjQDWOqnQNMIiDypfbG-Y";
    if (url1) {
      fetch("https://tranquil-beach-43094.herokuapp.com/insertproduct", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          name_product: nameProduct,
          description_product: descriptionProduct,
          price_product: priceProduct,
          bland_product: blandProduct,
          image_product: url1,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.err) {
            console.log(data.err);
          } else {
            console.log("create succussfull");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [url1]);

  const imagefetch = (image, seturl) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "shopandrent");
    data.append("cloud_name", "panuwitdev");
    fetch("https://api.cloudinary.com/v1_1/panuwitdev/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        seturl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postproduct = () => {
    console.log(image1Product);
    if (
      !nameProduct ||
      !descriptionProduct ||
      !priceProduct ||
      !blandProduct ||
      !image1Product
    ) {
      alert("กรุณาใส่ข้อมูลหรือเลือกรูปภาพ");
    } else {
      imagefetch(image1Product, set1Url);
    }
  };

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
            defaultValue="jack"
            className="ip-iuput"
            onChange={(e) => setBlandProduct(e.target.value)}
          >
            <Option value="jack">ACER</Option>
            <Option value="lucy">LENOVO</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">DELL</Option>
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
            เพิ่มสินค้า
          </Button>
        </div>
      </div>
    </FormItem>
  );
}

export default InsertProduct;
