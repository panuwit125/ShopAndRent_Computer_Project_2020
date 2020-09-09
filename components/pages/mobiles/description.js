import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
const FormItem = Form.Item;
import HeaderNavbar from "../../HeaderNavbar";
import DescriptionProduct from "../../DescriptionProduct";
import NavbarSide from "../../Navbar";
import LoadingComponent from "../../component.loading";
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
  imageExpand,
  setImageExpand,
  ImageExpandShow,
  setImageForExpand,
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
        <Button className="dt-btn" onClick={() => router.push("/signin")}>
          Login Plese
        </Button>
      );
    }
  };

  const SetImage = (image) => {
    setImageForExpand(image);
    setImageExpand("block");
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        <LoadingComponent type={"fetchloading"} status={fetchLoading} />
        <ImageExpandShow />
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
            <div
              className="sp-body-2"
              style={{ padding: "10px 20px 30px 20px" }}
            >
              <div
                className="dt-body-2-header"
                style={{ justifyContent: "center" }}
              >
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
                <img
                  className="dt-img"
                  onClick={() => SetImage(product.image_product)}
                  src={product.image_product}
                />
                <div>
                  {product.image1_product ? (
                    <img
                      className="dt-img-1"
                      onClick={() => SetImage(product.image1_product)}
                      src={product.image1_product}
                    />
                  ) : (
                    <img className="dt-img-1" src={"/noimage.jpg"} />
                  )}
                  {product.image2_product ? (
                    <img
                      className="dt-img-1"
                      onClick={() => SetImage(product.image2_product)}
                      src={product.image2_product}
                    />
                  ) : (
                    <img className="dt-img-1" src={"/noimage.jpg"} />
                  )}
                  {product.image3_product ? (
                    <img
                      className="dt-img-1"
                      onClick={() => SetImage(product.image3_product)}
                      src={product.image3_product}
                    />
                  ) : (
                    <img className="dt-img-1" src={"/noimage.jpg"} />
                  )}
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
