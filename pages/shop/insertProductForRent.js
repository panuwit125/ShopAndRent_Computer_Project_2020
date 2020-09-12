import { Form, Button, Input, Select } from "antd";
const FormItem = Form.Item;
const { Option } = Select;
import React, { useState, useEffect } from "react";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";
import router from "next/router"
import LoadingComponent from "../../components/component.loading"

function InsertProductRent() {
  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [blandProduct, setBlandProduct] = useState("ACER");
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

  const [readyToPost, setReadyToPost] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage"))
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
      setisLoading(true);
    } else {
      router.push("/shop/loginSeller");
    }
  }, []);

  useEffect(() => {
    if (url1) {
      fetch("https://tranquil-beach-43094.herokuapp.com/insertproductrent", {
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
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.err) {
            console.log(data.err);
          } else {
            console.log("create succussfull");
            alert("เพิ่มสินค้าสำเร็จ")
            setisLoading(true);
            router.push("/shop/homemanage")
          }
        })
        .catch((err) => console.log(err));
    }
  }, [readyToPost]);

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
      set2Url("")
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
      set3Url("")
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
      set4Url("")
      setReadyToPost(true)
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
          setReadyToPost(true)
        })
        .catch((err) => {
          console.log(err);
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
      alert("กรุณาใส่ข้อมูลหรือเลือกรูปภาพ");
      setisLoading(true);
    } else {
      imagefetch(image1Product, set1Url);
    }
  };

  if (!isLoading) {
    return <LoadingComponent type={"pageloading"} status={true} />;
  } else {
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
            <h2 style={{ color: "black" }}>ราคาเช่าต่อวัน</h2>
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
              onChange={(e) => setBlandProduct(e)}
            >
              <Option value="ACER">ACER</Option>
              <Option value="LENOVO">LENOVO</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="DELL">DELL</Option>
            </Select>
            <h2 style={{ color: "black" }}>รูปสินค้า</h2>
            <div>
              <input
                type="file"
                onChange={(e) => setIamge1Product(e.target.files[0])}
                style={{ color: "black", marginBottom: "10px" }}
              />
              <input
                type="file"
                onChange={(e) => setIamge2Product(e.target.files[0])}
                style={{ color: "black", marginBottom: "10px" }}
              />
              <input
                type="file"
                onChange={(e) => setIamge3Product(e.target.files[0])}
                style={{ color: "black", marginBottom: "10px" }}
              />
              <input
                type="file"
                onChange={(e) => setIamge4Product(e.target.files[0])}
                style={{ color: "black", marginBottom: "10px" }}
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
}

export default InsertProductRent;
