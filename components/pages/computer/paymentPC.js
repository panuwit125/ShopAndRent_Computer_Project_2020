import React, { useEffect, useState } from "react";
import { Form, Button, Select, Upload, message } from "antd";
import LoadingComponent from "../../component.loading";
import Navbar from "../../componentspc/NavbarPc";
import router from "next/router";
import UploadBillComponent from "../../component.UploadBill";
import { EnvironmentOutlined, UploadOutlined } from "@ant-design/icons";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import NumberFormat from "react-number-format";
const FormItem = Form.Item;
const { Option } = Select;

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function PaymentMobile({
  fetchLoading,
  inventory,
  price,
  postBuyProduct,
  type,
  CardShowProduct,
  CardShowProductRes,
  dayforrent,
  postRentProduct,
  checkLogin,
  user,
  UploadBillShow,
  setUploadBillShow,
  address,
  setShowAddress,
}) {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(false);
  }, []);

  const ShowProduct = () => {
    if (type === "Shop") {
      return (
        <>
          {inventory.map((data, index) => {
            return <CardShowProductRes key={index} data={data} />;
          })}
        </>
      );
    } else {
      return <CardShowProduct data={inventory} />;
    }
  };

  if (!isLoading) {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="shop-res-container">
          <UploadBillComponent
            UploadBillShow={UploadBillShow}
            setUploadBillShow={setUploadBillShow}
            postBuyProduct={postBuyProduct}
            type={type}
            postRentProduct={postRentProduct}
            inventory={inventory}
          />
          <Navbar
            status={checkLogin}
            user={user.user_name}
            type={type}
            //setshow={setShowNavbar}
          />
          <div className="shop-res-body" style={{ padding: "0px" }}>
            <div className="pm-body">
              <div
                className="pm-back"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Button onClick={() => router.push("/")}>Back</Button>
                <h2 style={{ color: "black", margin: "0px" }}>PAYMENT SELL</h2>
                <a
                  onClick={() => {
                    setShowAddress("block");
                  }}
                  style={{ color: "black" }}
                >
                  Edit
                </a>
              </div>
              <div className="pm-address">
                <EnvironmentOutlined
                  style={{
                    color: "black",
                    fontSize: "37px",
                    marginTop: "5px",
                  }}
                />
                <div className="pm-address-2">
                  <h2
                    style={{
                      color: "black",
                      textDecorationLine: "underline",
                      fontSize: "16px",
                    }}
                  >
                    ที่อยู่ในการจัดส่ง
                  </h2>
                  <h3 style={{ color: "black", fontSize: "16px" }}>
                    {address}
                  </h3>
                </div>
              </div>
              <ShowProduct />
              <div className="pm-option">
                <h3
                  style={{
                    color: "black",
                    marginBottom: 0,
                    fontSize: "16px",
                    textDecorationLine: "underline",
                  }}
                >
                  ตัวเลือกการจัดส่ง
                </h3>
                <Select
                  defaultValue="lucy"
                  style={{ width: "auto" }}
                  //onChange={handleChange}
                >
                  <Option value="jack">Thai Express</Option>
                  <Option value="lucy">Kerry Express</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                </Select>
              </div>
              <div className="pm-payment">
                <div className="pm-payment pay-font-hd">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "11px 26px 5px 26px",
                    }}
                  >
                    {type === "Shop" ? null : (
                      <>
                        <h3 style={{ fontSize: "16px" }}>รูปบัตรประชาชน</h3>
                        <Upload {...props}>
                          <Button>
                            <UploadOutlined /> Click to Upload
                          </Button>
                        </Upload>
                      </>
                    )}
                  </div>
                  <div className="pm-payment-body1">
                    <div
                      className="pm-payment-body2"
                      style={{ marginRight: 5 }}
                    >
                      <MonetizationOnIcon style={{ fontSize: "34px" }} />
                    </div>
                    <div className="pm-payment-body3" >
                      <div className="pm-payment-header">
                        <h3
                          style={{ color: "black", margin: "5px 0px 5px 0px" }}
                        >
                          วิธีการชำระเงิน
                        </h3>
                      </div>
                      <div className="pm-payment-body-1">
                        {type === "Shop" ? (
                          <>
                            <h3 style={{ color: "black", margin: "0px" }}>
                              รวมการสั่งซื้อ
                            </h3>
                            <NumberFormat
                              value={price}
                              displayType={"text"}
                              thousandSeparator={true}
                              renderText={(value) => (
                                <h3 style={{ color: "black", margin: "0px" }}>
                                  {value} THB
                                </h3>
                              )}
                            />
                          </>
                        ) : (
                          <>
                            <h3 style={{ color: "black", margin: "0px" }}>
                              ยอดการเช่า( x{dayforrent}DAYS)
                            </h3>
                            <NumberFormat
                              value={inventory.price_product * dayforrent}
                              displayType={"text"}
                              thousandSeparator={true}
                              renderText={(value) => (
                                <h3 style={{ color: "black", margin: "0px" }}>
                                  {value} THB
                                </h3>
                              )}
                            />
                          </>
                        )}
                      </div>
                      <div className="pm-payment-body-1">
                        {type === "Shop" ? null : (
                          <>
                            <h3 style={{ color: "black", margin: "0px" }}>
                              ค่ามัดจำสินค้า
                            </h3>
                            <h3 style={{ color: "black", margin: "0px" }}>
                              600 THB
                            </h3>
                          </>
                        )}
                      </div>
                      <div className="pm-payment-body-1">
                        <h3 style={{ color: "black", margin: "0px" }}>
                          การจัดส่ง
                        </h3>
                        <h3 style={{ color: "black", margin: "0px" }}>
                          600 THB
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pm-footer">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    padding: "15px 14px",
                  }}
                >
                  <h2
                    style={{
                      color: "black",
                      fontSize: "18px",
                      marginBottom: 0,
                      marginRight: 5,
                    }}
                  >
                    ยอดชำระทั้งหมด
                  </h2>
                  {type === "Shop" ? (
                    <NumberFormat
                      value={price + 600}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(value) => (
                        <h2
                          style={{ color: "red", fontSize: "18px", margin: 0 }}
                        >
                          {value} THB
                        </h2>
                      )}
                    />
                  ) : (
                    <NumberFormat
                      value={inventory.price_product * dayforrent + 600 + 600}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(value) => (
                        <h2
                          style={{ color: "red", fontSize: "18px", margin: 0 }}
                        >
                          {value} THB
                        </h2>
                      )}
                    />
                  )}
                </div>
                <div>
                  {type === "Shop" ? (
                    <button
                      className="btn-res-pm"
                      onClick={() => setUploadBillShow("block")}
                    >
                      สั่งซื้อสินค้า
                    </button>
                  ) : (
                    <button
                      className="btn-res-pm"
                      onClick={() => setUploadBillShow("block")}
                    >
                      เช่าสินค้า
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormItem>
    );
  } else {
    return null;
  }
}

export default PaymentMobile;
