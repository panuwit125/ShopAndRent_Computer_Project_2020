import { Form, Button, Input, Upload, Select, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
const FormItem = Form.Item;
const { Option } = Select;
import React, { useState, useEffect } from "react";
import router from "next/router";
import Axios from "axios";
import { name } from "file-loader";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function InsertProduct() {
  const [idProduct, setIdProduct] = useState();
  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [blandProduct, setBlandProduct] = useState("");
  const [cpuProduct, setCpuProduct] = useState("");
  const [mainboardProduct, setMainboardProduct] = useState("");
  const [vgaProduct, setVgaProduct] = useState("");
  const [ramProduct, setRamProduct] = useState("");
  const [harddiskProduct, setHarddiskProduct] = useState("");
  const [ssdProduct, setSsdProduct] = useState("");
  const [monitorProduct, setMonitorProduct] = useState("");
  const [image1Product, setIamge1Product] = useState("");
  const [url1, set1Url] = useState("");
  const [image2Product, setIamge2Product] = useState("");
  const [url2, set2Url] = useState("");
  const [image3Product, setIamge3Product] = useState("");
  const [url3, set3Url] = useState("");
  const [image4Product, setIamge4Product] = useState("");
  const [url4, set4Url] = useState("");

  const [show, setShow] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const [loadingImage, setLoadingImage] = useState(false);
  const [typeUpdate, setTypeUpdate] = useState("");

  const [readyToPost, setReadyToPost] = useState(false);

  const [blandlist, setBlandList] = useState([]);

  useEffect(() => {
    const { id } = router.query;
    const Id = id;
    console.log(Id);
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage")) &&
      Id &&
      localStorage.getItem("typeUpdate")
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
      let type = localStorage.getItem("typeUpdate");
      setTypeUpdate(type);
      let data = { id: "" + id + "" };
      if (type === "Shop") {
        Axios.post(
          "https://tranquil-beach-43094.herokuapp.com/productbyid",
          data
        )
          .then((res) => {
            console.log(res);
            setIdProduct(res.data._id);
            setNameProduct(res.data.name_product);
            setDescriptionProduct(res.data.description_product);
            setPriceProduct(res.data.price_product);
            setBlandProduct(res.data.bland_product);
            setIamge1Product(res.data.image_product);
            setIamge2Product(res.data.image1_product);
            setIamge3Product(res.data.image2_product);
            setIamge4Product(res.data.image3_product);
            setCpuProduct(res.data.cpu_product);
            setMainboardProduct(res.data.mainboard_product);
            setVgaProduct(res.data.vgacard_product);
            setRamProduct(res.data.ram_product);
            setHarddiskProduct(res.data.harddisk_product);
            setSsdProduct(res.data.ssd_product);
            setMonitorProduct(res.data.monitor_product);
            getBlandData();
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "Rent") {
        console.log("Rent");
        Axios.post(
          "https://tranquil-beach-43094.herokuapp.com/productrentbyid",
          data
        )
          .then((res) => {
            console.log(res);
            setIdProduct(res.data._id);
            setNameProduct(res.data.name_product);
            setDescriptionProduct(res.data.description_product);
            setPriceProduct(res.data.price_product);
            setBlandProduct(res.data.bland_product);
            setIamge1Product(res.data.image_product);
            setIamge2Product(res.data.image1_product);
            setIamge3Product(res.data.image2_product);
            setIamge4Product(res.data.image3_product);
            setCpuProduct(res.data.cpu_product);
            setMainboardProduct(res.data.mainboard_product);
            setVgaProduct(res.data.vgacard_product);
            setRamProduct(res.data.ram_product);
            setHarddiskProduct(res.data.harddisk_product);
            setSsdProduct(res.data.ssd_product);
            setMonitorProduct(res.data.monitor_product);
            getBlandData();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      router.push("/shop/loginSeller");
    }
  }, []);

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

  const handleChange = (info, number) => {
    console.log(info, info.fileList[0], number);
    if (info.file.status === "uploading") {
      setLoadingImage(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        if (number === 1) {
          setIamge1Product(imageUrl);
        } else if (number === 2) {
          setIamge2Product(imageUrl);
        } else if (number === 3) {
          setIamge3Product(imageUrl);
        } else if (number === 4) {
          setIamge4Product(imageUrl);
        } else {
          console.log("ERROR");
        }
        console.log(imageUrl);
        setLoadingImage(false);
      });
    }
  };

  const postproduct = () => {
    setisLoading(false);
    console.log(image1Product);
    if (
      !nameProduct ||
      !descriptionProduct ||
      !priceProduct ||
      !blandProduct ||
      !image1Product ||
      !cpuProduct ||
      !mainboardProduct ||
      !vgaProduct ||
      !ramProduct ||
      !harddiskProduct ||
      !ssdProduct ||
      !monitorProduct
    ) {
      console.log("กรุณาใส่ข้อมูลหรือเลือกรูปภาพ");
      alert("กรุณาใส่ข้อมูลหรือเลือกรูปภาพ");
      setisLoading(true);
    } else {
      imagefetch(image1Product, set1Url);
    }
  };

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
        image1fetch(image2Product, set2Url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const image1fetch = (image2, seturl) => {
    if (!image2) {
      set2Url("");
      image2fetch(image3Product, set3Url);
    } else {
      const data = new FormData();
      data.append("file", image2);
      data.append("upload_preset", "shopandrent");
      data.append("cloud_name", "panuwitdev");
      fetch("https://api.cloudinary.com/v1_1/panuwitdev/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          set2Url(data.url);
          image2fetch(image3Product, set3Url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const image2fetch = (image3, seturl) => {
    if (!image3) {
      set3Url("");
      image3fetch(image4Product, set4Url);
    } else {
      const data = new FormData();
      data.append("file", image3);
      data.append("upload_preset", "shopandrent");
      data.append("cloud_name", "panuwitdev");
      fetch("https://api.cloudinary.com/v1_1/panuwitdev/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          set3Url(data.url);
          image3fetch(image4Product, set4Url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const image3fetch = (image4, seturl) => {
    if (!image4) {
      set4Url("");
      setReadyToPost(true);
    } else {
      const data = new FormData();
      data.append("file", image4);
      data.append("upload_preset", "shopandrent");
      data.append("cloud_name", "panuwitdev");
      fetch("https://api.cloudinary.com/v1_1/panuwitdev/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          set4Url(data.url);
          setReadyToPost(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getBlandData = () => {
    Axios.get("https://tranquil-beach-43094.herokuapp.com/showbland")
      .then((response) => {
        console.log(response);
        setBlandList(response.data);
        setisLoading(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    if (url1) {
      if (typeUpdate === "Shop") {
        fetch("https://tranquil-beach-43094.herokuapp.com/updateproduct", {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            name_product: nameProduct,
            description_product: descriptionProduct,
            price_product: priceProduct,
            bland_product: blandProduct,
            cpu_product: cpuProduct,
            mainboard_product: mainboardProduct,
            ram_product: ramProduct,
            vgacard_product: vgaProduct,
            harddisk_product: harddiskProduct,
            ssd_product: ssdProduct,
            monitor_product: monitorProduct,
            image_product: url1,
            image1_product: url2,
            image2_product: url3,
            image3_product: url4,
            id_product: idProduct,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.err) {
              console.log(data.err);
            } else {
              console.log("update succussfull");
              alert("อัพเดทสินค้าเรียบร้อย");
              setisLoading(true);
              router.push("/shop/homemanage");
            }
          })
          .catch((err) => console.log(err));
      } else if (typeUpdate === "Rent") {
        fetch("https://tranquil-beach-43094.herokuapp.com/updateproductrent", {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            name_product: nameProduct,
            description_product: descriptionProduct,
            price_product: priceProduct,
            bland_product: blandProduct,
            cpu_product: cpuProduct,
            mainboard_product: mainboardProduct,
            ram_product: ramProduct,
            vgacard_product: vgaProduct,
            harddisk_product: harddiskProduct,
            ssd_product: ssdProduct,
            monitor_product: monitorProduct,
            image_product: url1,
            image1_product: url2,
            image2_product: url3,
            image3_product: url4,
            id_product: idProduct,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.err) {
              console.log(data.err);
            } else {
              console.log("update succussfull");
              alert("อัพเดทสินค้าเรียบร้อย");
              setisLoading(true);
              router.push("/shop/homemanage");
            }
          })
          .catch((err) => console.log(err));
      }
    }
  }, [readyToPost]);

  if (!isLoading) {
    return null;
  } else {
    console.log(blandlist)
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="br">
          <NavbarManage show={show} setShow={setShow} />
          <HeaderManage setShow={setShow} user={user} />
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
            <h2 style={{ color: "black" }}>CPU</h2>
            <Input
              className="ip-iuput"
              value={cpuProduct}
              onChange={(e) => setCpuProduct(e.target.value)}
            />
            <h2 style={{ color: "black" }}>Mainboard</h2>
            <Input
              className="ip-iuput"
              value={mainboardProduct}
              onChange={(e) => setMainboardProduct(e.target.value)}
            />
            <h2 style={{ color: "black" }}>VGACard</h2>
            <Input
              className="ip-iuput"
              value={vgaProduct}
              onChange={(e) => setVgaProduct(e.target.value)}
            />
            <h2 style={{ color: "black" }}>RAM</h2>
            <Input
              className="ip-iuput"
              value={ramProduct}
              onChange={(e) => setRamProduct(e.target.value)}
            />
            <h2 style={{ color: "black" }}>Harddisk</h2>
            <Input
              className="ip-iuput"
              value={harddiskProduct}
              onChange={(e) => setHarddiskProduct(e.target.value)}
            />
            <h2 style={{ color: "black" }}>Solid State Drive</h2>
            <Input
              className="ip-iuput"
              value={ssdProduct}
              onChange={(e) => setSsdProduct(e.target.value)}
            />
            <h2 style={{ color: "black" }}>Monitor Display</h2>
            <Input
              className="ip-iuput"
              value={monitorProduct}
              onChange={(e) => setMonitorProduct(e.target.value)}
            />
            <h2 style={{ color: "black" }}>ราคาสินค้า</h2>
            <Input
              className="ip-iuput"
              value={priceProduct}
              onChange={(e) => setPriceProduct(e.target.value)}
            />
            <h2 style={{ color: "black" }}>แบรน์สินค้า</h2>
            <Select
              defaultValue={blandProduct}
              className="ip-iuput"
              onChange={(e) => setBlandProduct(e.target.value)}
            >
              {blandlist.map((data, index) => {
                return (
                  <Option key={index} value={`${data.name_bland}`}>
                    {data.name_bland}
                  </Option>
                );
              })}
            </Select>
            <h2 style={{ color: "black" }}>รูปสินค้า</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  //beforeUpload={beforeUpload}
                  onChange={(e) => handleChange(e, 1)}
                >
                  {image1Product ? (
                    <img
                      src={image1Product}
                      alt="avatar"
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    <UploadButton />
                  )}
                </Upload>
              </div>
              <div>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  onChange={(e) => handleChange(e, 2)}
                >
                  {image2Product ? (
                    <img
                      src={image2Product}
                      alt="avatar"
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    <UploadButton />
                  )}
                </Upload>
              </div>
              <div>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  onChange={(e) => handleChange(e, 3)}
                >
                  {image3Product ? (
                    <img
                      src={image3Product}
                      alt="avatar"
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    <UploadButton />
                  )}
                </Upload>
              </div>
              <div>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  onChange={(e) => handleChange(e, 4)}
                >
                  {image4Product ? (
                    <img
                      src={image4Product}
                      alt="avatar"
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    <UploadButton />
                  )}
                </Upload>
              </div>
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
}

export default InsertProduct;
