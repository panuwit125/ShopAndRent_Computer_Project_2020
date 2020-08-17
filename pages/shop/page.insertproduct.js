import { Form, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import router from "next/router";
import Header from "../components/component.header";
import axios from "axios";

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

  useEffect(() => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM5ODNmMzhhNDM4MjY5ZDA2ZmJhMzUiLCJpYXQiOjE1OTc2MDY3NTZ9.JciEM4MJE3H6vGDJyQCoueeWrQ23wvUewAhBeHssID4";
    if (url1) {
      fetch("http://localhost:5000/insertproduct", {
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

  const imagefetch = (image,seturl) => {
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
  }

  const postproduct = () => {
      console.log(image1Product)
    if (image1Product) {
        imagefetch(image1Product,set1Url)
    }



    /*if (image1Product) {
      const data = new FormData();
      data.append("file", image1Product);
      data.append("upload_preset", "shopandrent");
      data.append("cloud_name", "panuwitdev");
      fetch("https://api.cloudinary.com/v1_1/panuwitdev/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUrl(data.url);
            // fetch image2
        })
        .catch((err) => {
          console.log(err);
        });
    }*/
  };

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="br">
        <div className="br-header">
          <Header />
        </div>
        <h2 style={{ color: "black" }}>ชื่อสินค้า</h2>
        <Input
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
        />
        <h2 style={{ color: "black" }}>รายละเอียดสินค้า</h2>
        <Input
          value={descriptionProduct}
          onChange={(e) => setDescriptionProduct(e.target.value)}
        />
        <h2 style={{ color: "black" }}>ราคาสินค้า</h2>
        <Input
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />
        <h2 style={{ color: "black" }}>แบรน์สินค้า</h2>
        <Input
          value={blandProduct}
          onChange={(e) => setBlandProduct(e.target.value)}
        />
        <h2 style={{ color: "black" }}>รูปสินค้า</h2>
        <input
          type="file"
          onChange={(e) => setIamge1Product(e.target.files[0])}
          style={{ color: "black" }}
        />
        <input
          type="file"
          onChange={(e) => setIamge2Product(e.target.files[0])}
          style={{ color: "black" }}
        />
        <input
          type="file"
          onChange={(e) => setIamge3Product(e.target.files[0])}
          style={{ color: "black" }}
        />
        <input
          type="file"
          onChange={(e) => setIamge4Product(e.target.files[0])}
          style={{ color: "black" }}
        />
        <Button onClick={() => postproduct()}>เพิ่มสินค้า</Button>
      </div>
    </FormItem>
  );
}

export default InsertProduct;
