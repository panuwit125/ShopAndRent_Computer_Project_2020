import React, { useEffect, useState } from "react";
import { Form, Button, Select, Upload, message } from "antd";
import LoadingComponent from "../../component.loading";
import HeaderNavbar from "../../HeaderNavbar";
import NavbarSide from "../../Navbar";
import UploadBillComponent from "../../component.UploadBill";
import router from "next/router";
import { EnvironmentOutlined, UploadOutlined } from "@ant-design/icons";
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
  UploadBillShow,
  setUploadBillShow,
  address,
  setShowAddress,
  user,
  showNavbar,
  setShowNavbar,
  checkLogin
}) {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
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
    return null;
  } else {
    console.log(user)
    return (
      <FormItem style={{ margin: "0px" }}>
        <LoadingComponent type={"fetchloading"} status={fetchLoading} />
        <UploadBillComponent
          UploadBillShow={UploadBillShow}
          setUploadBillShow={setUploadBillShow}
          postBuyProduct={postBuyProduct}
          type={type}
          postRentProduct={postRentProduct}
        />
        <NavbarSide
          show={showNavbar}
          setshow={setShowNavbar}
          status={checkLogin}
          user={user.user_name}
          type={type}
        />
        <div className="br-res-mobile">
          <HeaderNavbar page={"Payment"} setshow={setShowNavbar} />
          <div className="pm-body">
            <div className="pm-back pay-font-hd">
              <a
                onClick={() => router.push("/shop")}
                style={{ color: "#AFAFAF", margin: "0px" }}
              >
                Back
              </a>
              <h2
                style={{
                  color: "black",
                  fontSize: "18px",
                  margin: "0px",
                }}
              >
                PAYMENT
              </h2>
              <a onClick={()=>{setShowAddress("block")}} style={{ color: "#AFAFAF", margin: "0px" }}>Edit</a>
            </div>
            <div className="pm-address pay-font-hd">
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

            <div className="pm-option pay-font-hd">
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
                    <h3 style={{ color: "black", margin: "0px" }}>การจัดส่ง</h3>
                    <h3 style={{ color: "black", margin: "0px" }}>600 THB</h3>
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
                    onClick={() =>
                      /*postBuyProduct()*/ setUploadBillShow("block")
                    }
                  >
                    สั่งซื้อสินค้า
                  </button>
                ) : (
                  <button
                    className="btn-res-pm"
                    onClick={() =>
                      /*postRentProduct()*/ setUploadBillShow("block")
                    }
                  >
                    เช่าสินค้า
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </FormItem>
    );
  }
}

export default PaymentMobile;
