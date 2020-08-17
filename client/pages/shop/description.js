import { Form, Button } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import Header from "../components/component.header";
import Navbar from "../components/component.navbar";
//import router from "next/router";
import { useRouter } from "next/router";
import Axios from "axios";

function DescriptionPage() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  //const [Id,setID] = useState('')
  const [user, setUser] = useState("");
  const [product, setProduct] = useState();
  const router = useRouter();
  const { id, comment } = router.query;
  const Id = id;

  useEffect(() => {
    if (Id) {
      console.log("id", Id);
      let token = localStorage.getItem("token");
      let user = JSON.parse(localStorage.getItem("user"));
      console.log("token", token, user);
      if (token) {
        setUser(user.user_name);
        setCheckLogin(true);
      }
      getProductByid();
    }
  }, [Id]);

  const getProductByid = () => {
    let data = { id: "" + id + "" };
    Axios.post("http://localhost:5000/productbyid", data)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ButtonShow = () => {
    if (checkLogin) {
      return (
        <div>
          <Button className="dt-btn">ซื้อสินค้า</Button>
          <Button className="dt-btn" style={{ marginTop: "5px" }}>
            หยิบใส่ตระกร้า
          </Button>
        </div>
      );
    } else {
      return (
        <Button className="dt-btn" onClick={() => router.push("/page.login")}>
          กรุณาเข้าสู่ระบบ
        </Button>
      );
    }
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="br">
          <div className="br-header">
            <Header />
          </div>
          <div className="br-body">
            <div className="sp-body-1">
              <Navbar page={"description"} status={checkLogin} user={user} />
            </div>
            <div className="sp-body-2">
              <div className="dt-body-2-header">
                <h1 style={{ color: "black", textAlign: "center" }}>
                  {/*Post :{id}*/}
                  {product.name_product}
                </h1>
              </div>
              <div className="dt-body-2-body">
                <img
                  className="dt-img"
                  src={product.image_product}
                />
                <div>
                  <img
                    className="dt-img-1"
                    src="https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg"
                  />
                  <img
                    className="dt-img-1"
                    src="https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg"
                  />
                  <img
                    className="dt-img-1"
                    src="https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg"
                  />
                </div>
              </div>
              <div className="dt-decription">
                <div>
                  <h1 style={{ color: "black" }}>รายละเอียด</h1>
                </div>
                <div>
                  <h2 style={{ color: "black" }}>
                    {product.description_product}
                  </h2>
                </div>
              </div>
              <ButtonShow />
            </div>
          </div>
        </div>
      </FormItem>
    );
  }
}

export default DescriptionPage;
