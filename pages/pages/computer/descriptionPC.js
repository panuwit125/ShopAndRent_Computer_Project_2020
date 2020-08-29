import React from 'react'
import { Form, Button } from "antd";
const FormItem = Form.Item;
import Header from "../../components/component.header";
import Navbar from "../../components/component.navbar";
import LoadingComponent from "../../components/component.loading";

function DescriptionPC({fetchLoading,type,checkLogin,user,product,checkProductByid,checkStatus}) {

    const ButtonShow = () => {
        if (checkLogin) {
          if (type === "Shop") {
            return (
              <div>
                <Button className="dt-btn" onClick={() => checkProductByid("buy")}>
                  ซื้อสินค้า
                </Button>
                <Button
                  className="dt-btn"
                  onClick={() => checkProductByid("push")}
                  style={{ marginTop: "5px" }}
                >
                  หยิบใส่ตระกร้า
                </Button>
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
              กรุณาเข้าสู่ระบบ
            </Button>
          );
        }
      };
    
      const DescriptionShow = () => {
        if (type === "Shop") {
          return (
            <div className="dt-decription">
              <div>
                <h1 style={{ color: "black" }}>รายละเอียด</h1>
              </div>
              <div>
                <h2 style={{ color: "black" }}>{product.description_product}</h2>
              </div>
            </div>
          );
        } else {
          return (
            <div className="dt-decription">
              <div>
                <h1 style={{ color: "black" }}>รายละเอียด</h1>
              </div>
              <div>
                <h2 style={{ color: "black" }}>{product.description_product}</h2>
              </div>
              <div>
                <h1 style={{ color: "black" }}>สถานะ</h1>
              </div>
              <div>
                {product.status_product ? (
                  <h2 style={{ color: "black" }}>พร้อมให้เช่า</h2>
                ) : (
                  <h2 style={{ color: "black" }}>ไม่พร้อมให้เช่า</h2>
                )}
              </div>
            </div>
          );
        }
      };

    return (
        <FormItem style={{ margin: "0px" }}>
          <LoadingComponent type={"fetchloading"} status={fetchLoading} />
          <div className="br">
            <div className="br-header">
              <Header page={type} />
            </div>
            <div className="br-body">
              <div className="sp-body-1">
                <Navbar
                  page={"description"}
                  status={checkLogin}
                  user={user.user_name}
                />
              </div>
              <div className="sp-body-2">
                <div className="dt-body-2-header">
                  <h1 style={{ color: "black", textAlign: "center" }}>
                    {/*Post :{id}*/}
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
                <DescriptionShow />
                <ButtonShow />
              </div>
            </div>
          </div>
        </FormItem>
      );
}

export default DescriptionPC
