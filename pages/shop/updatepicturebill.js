import { Form, Button, Input, Upload, Select, message } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";
import Axios from "axios";
import router from "next/router";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import LoadingComponent from "../../components/component.loading"

function UpdateBill() {
  const [blandProduct, setBlandProduct] = useState("");
  const [show, setShow] = useState(0);
  const [token, setToken] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imagebill, setIamgeBill] = useState();
  const [url, seturl] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage"))
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
      getRateData(JSON.parse(localStorage.getItem("usermanage")));
    } else {
      router.push("/shop/loginSeller");
    }
  }, []);

  const getRateData = (id) => {
    let data = { id_seller: id._id };
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/showrate",
      data,
    })
      .then((data) => {
        console.log(data);
        console.log(data.data.data[0].image_bill)
        setIamgeBill(data.data.data[0].image_bill);
        setisLoading(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleChange = (info, number) => {
    console.log(info, info.fileList[0], number);
    if (info.file.status === "uploading") {
      setLoadingImage(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setIamgeBill(imageUrl);
        setLoadingImage(false);
      });
    }
  };

  const UploadButton = () => {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column  ",
        }}
      >
        {loadingImage ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
  };

  const postUpdateBill = () => {
    setisLoading(false);
    if (!imagebill) {
      alert("กรุณาเลือกรูป");
      setisLoading(true);
    } else {
      imagefetch(imagebill);
    }
  };

  const imagefetch = (image) => {
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
        errorMessage();
        console.log(err);
      });
  };

  useEffect(() => {
    let data = {image_bill:url}
    if (url) {
        Axios({
            method:"put",
            url:"https://tranquil-beach-43094.herokuapp.com/updateimagebill",
            headers: { Authorization: `Bearer ${token}` },
            data
        }).then(response=>{
            console.log(response);
            successMessage()
            router.push("/shop/homemanage")
        }).catch(error=>{
            errorMessage();
            console.log(error.response);
        })
    }
  }, [url]);

  const successMessage = () => {
    message.success('อัพโหลดสำเร็จแล้ว');
  };
  
  const errorMessage = () => {
    message.error('เกิดข้อผิดพลาด');
  };
  
  const warningMessage = () => {
    message.warning('This is a warning message');
  };

  if (isLoading) {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="br">
          <NavbarManage show={show} setShow={setShow} />
          <HeaderManage setShow={setShow} user={user} />
          <div style={{ padding: "20px 50px" }}>
            <h2 style={{ color: "black" }}>รูปเลขบัญชีธนาคาร</h2>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              onChange={(e) => handleChange(e)}
            >
              {imagebill ? (
                <img
                  src={imagebill}
                  alt="avatar"
                  style={{ width: "100px", height: "100px" }}
                />
              ) : (
                <UploadButton />
              )}
            </Upload>
            <Button
              onClick={() => postUpdateBill()}
              type="primary"
              style={{ marginTop: "20px" }}
            >
              เพิ่มข้อมูล
            </Button>
          </div>
        </div>
      </FormItem>
    );
  } else {
    return <LoadingComponent />;
  }
}

export default UpdateBill;
