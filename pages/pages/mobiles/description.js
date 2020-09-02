import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
const FormItem = Form.Item;
import HeaderNavbar from "../../components/HeaderNavbar";
import DescriptionProduct from "../../components/DescriptionProduct";
import NavbarSide from "../../components/Navbar";
import LoadingComponent from "../../components/component.loading";
import router from "next/router";

function DescriptionMobile({
  fetchLoading,
  showNavbar,
  setShowNavbar,
  checkLogin,
  user,
  product,
  type,
  checkProductByid,
  checkStatus,
}) {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
  }, []);

  const ButtonShowRes = () => {
    if (checkLogin) {
      if (type === "Shop") {
        return (
          <div className="des-res-flex-btn">
            <div
              className="des-res-flex-body"
              style={{ marginLeft: "18px", marginRight: "0.5px" }}
            >
              <Button
                className="des-res-btn"
                onClick={() => checkProductByid("push")}
                style={{ borderRadius: "35px 0px 0px 35px" }}
              >
                PUSH INVENTORY
              </Button>
            </div>
            <div
              className="des-res-flex-body"
              style={{ marginRight: "18px", marginLeft: "0.5px" }}
            >
              <Button
                className="des-res-btn"
                style={{ borderRadius: "0px 35px 35px 0px" }}
                onClick={() => checkProductByid("buy")}
              >
                BUY
              </Button>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <Button className="dt-btn" onClick={() => checkStatus()}>
              เช่าสินค้า
            </Button>
          </div>
        );
      }
    } else {
      return (
        <Button className="dt-btn" onClick={() => router.push("/page.login")}>
          Login Plese
        </Button>
      );
    }
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        <LoadingComponent type={"fetchloading"} status={fetchLoading} />
        <NavbarSide
          show={showNavbar}
          setshow={setShowNavbar}
          status={checkLogin}
          user={user.user_name}
          type={type}
        />
        <div className="br">
          <HeaderNavbar page={"Shop"} setshow={setShowNavbar} />
          <div className="des-res-body">
            <div className="sp-body-2" style={{padding:"10px 20px 30px 20px"}}>
              <div className="dt-body-2-header" style={{justifyContent:"center"}}>
                <h1
                  style={{
                    color: "black",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    fontWeight: "bold",
                    fontSize: "20px ",
                  }}
                >
                  {product.name_product}
                </h1>
              </div>
              <div className="dt-body-2-body">
                <img className="dt-img" src={product.image_product} />
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
            </div>
            <DescriptionProduct
              description={product.description_product}
              price={product.price_product}
              type={type}
            />
            <ButtonShowRes />
          </div>
        </div>
      </FormItem>
    );
  }
}

export default DescriptionMobile;
