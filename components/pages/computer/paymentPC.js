import React, { useEffect, useState } from "react";
import { Form, Button, Select, Upload, message } from "antd";
import LoadingComponent from "../../component.loading";
import Navbar from "../../componentspc/NavbarPc";
import router from "next/router";
import UploadBillComponent from "../../component.UploadBill"
import {
  EnvironmentOutlined,
  UploadOutlined
} from "@ant-design/icons";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
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
  setUploadBillShow
}) {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(false);
  }, []);

  const ShowProduct = () => {
    if (type === "Shop") {
      return (
        <>
          {inventory.map((data) => {
            return <CardShowProductRes data={data} />;
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
        <UploadBillComponent UploadBillShow={UploadBillShow} setUploadBillShow={setUploadBillShow} postBuyProduct={postBuyProduct} type={type} postRentProduct={postRentProduct} />
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
                <Button onClick={() => router.push("/shop")}>Back</Button>
                <h2 style={{ color: "black", margin: "0px" }}>PAYMENT SELL</h2>
                <a style={{ color: "black" }}>Edit</a>
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
                    โมจิ เอนยูสแคว์ซอย 3 ม.1 ต.ท่าโพธิ์ อ.เมือง จ.พิษณุโลก 65000
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
                    <h3 style={{ fontSize: "16px" }}>รูปบัตรประชาชน</h3>
                    <Upload {...props}>
                      <Button>
                        <UploadOutlined /> Click to Upload
                      </Button>
                    </Upload>
                  </div>
                  <div className="pm-payment-body1">
                    <div className="pm-payment-body2">
                      <MonetizationOnIcon style={{ fontSize: "34px" }} />
                    </div>
                    <div className="pm-payment-body3">
                      <div className="pm-payment-header">
                        <h3 style={{ color: "black" }}>วิธีการชำระเงิน</h3>
                        <Select
                          defaultValue="lucy"
                          style={{ width: "auto" }}
                          //onChange={handleChange}
                        >
                          <Option value="jack">ธนาคารกสิกร</Option>
                          <Option value="lucy">ธนาคารกรุงไทย</Option>
                          <Option value="disabled" disabled>
                            Disabled
                          </Option>
                          <Option value="Yiminghe">ธนาคารกรุงเทพ</Option>
                        </Select>
                      </div>
                      <div className="pm-payment-body-1">
                        {type === "Shop" ? (
                          <>
                            <h3 style={{ color: "black", margin: "0px" }}>
                              รวมการสั่งซื้อ
                            </h3>
                            <h3 style={{ color: "black", margin: "0px" }}>
                              {price} THB
                            </h3>
                          </>
                        ) : (
                          <>
                            <h3 style={{ color: "black", margin: "0px" }}>
                              ยอดการเช่า( x{dayforrent}DAYS)
                            </h3>
                            <h3 style={{ color: "black", margin: "0px" }}>
                              {inventory.price_product * dayforrent} THB
                            </h3>
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
                    <h2 style={{ color: "red", fontSize: "18px", margin: 0 }}>
                      {price + 600 + 600} THB
                    </h2>
                  ) : (
                    <h2 style={{ color: "red", fontSize: "18px", margin: 0 }}>
                      {inventory.price_product * dayforrent + 600 + 600} THB
                    </h2>
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
    return (
      <FormItem style={{ margin: "0px" }}>
        <LoadingComponent type={"fetchloading"} status={fetchLoading} />
        <div className="br">
          <div className="br-header">
            <h1>Header</h1>
          </div>
          <div className="pm-body">
            <div className="pm-back">
              <Button onClick={() => router.push("/shop")}>Back</Button>
              <h2 style={{ color: "black" }}>PAYMENT SELL</h2>
              <a style={{ color: "black" }}>Edit</a>
            </div>
            <div className="pm-address">
              <div className="pm-address-1">
                <EnvironmentOutlined
                  style={{ color: "black", fontSize: "30px" }}
                />
                <h2 style={{ color: "black" }}>Address</h2>
              </div>
              <div className="pm-address-2">
                <h3 style={{ color: "black" }}>โมจิ กิ้นกิ้น 096-0000000</h3>
                <h3 style={{ color: "black" }}>
                  เอนยูสแคว์ ซอย 3 ม.1 จ.พิษณุโลก 65000
                </h3>
              </div>
            </div>
            {inventory.map((data) => {
              return <CardShowProduct data={data} />;
            })}
            <div className="pm-option">
              <div className="pm-option-1">
                <h3 style={{ color: "black" }}>ตัวเลือกการจัดส่ง</h3>
                <h2 style={{ color: "black" }}>THAI POST (EMS)</h2>
              </div>
              <div className="pm-option-2">100 THB.</div>
            </div>
            <div className="pm-payment">
              <div className="pm-payment-header">
                <h3 style={{ color: "black" }}>วิธีการชำระเงิน</h3>
                <Select
                  defaultValue="lucy"
                  style={{ width: "auto" }}
                  //onChange={handleChange}
                >
                  <Option value="jack">ธนาคารกสิกร</Option>
                  <Option value="lucy">ธนาคารกรุงไทย</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">ธนาคารกรุงเทพ</Option>
                </Select>
              </div>
              <div className="pm-payment-body">
                <div className="pm-payment-body-1">
                  <h3 style={{ color: "black" }}>
                    ยอดการเช่า/ซื้อ ( x3 days )
                  </h3>
                  <h3 style={{ color: "black" }}>{price} THB</h3>
                </div>
                <div className="pm-payment-body-1">
                  <h3 style={{ color: "black" }}>ค่าจัดส่ง</h3>
                  <h3 style={{ color: "black" }}>600 THB</h3>
                </div>
                <div className="pm-payment-body-1">
                  <h3 style={{ color: "black" }}>
                    ค่ามัดจำสินค้า( ได้คืนหลังการส่งคืนสินค้า )
                  </h3>
                  <h3 style={{ color: "black" }}>600 THB</h3>
                </div>
              </div>
            </div>
            <div className="pm-footer">
              <h2 style={{ color: "black", margin: "10px" }}>ยอดชำระทั้งหมด</h2>
              <h2 style={{ color: "red", margin: "10px" }}>
                {price + 600 + 600} THB.
              </h2>
              <Button
                className="pm-footer-btn"
                onClick={() => postBuyProduct()}
              >
                ทำรายการซื้อ
              </Button>
            </div>
          </div>
        </div>
      </FormItem>
    );
  }
}

export default PaymentMobile;
