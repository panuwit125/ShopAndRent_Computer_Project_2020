import { Form, Button, Select } from "antd";
const FormItem = Form.Item;
import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
const { Option } = Select;
import router from 'next/router'

function PaymentPage() {
  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="br">
        <div className="br-header">
          <h1>Header</h1>
        </div>
        <div className="pm-body">
          <div className="pm-back">
            <Button onClick={()=>router.push("/page.home")}>Back</Button>
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
          <div className="pm-product">
            <img
              className="pm-product-img"
              src="https://img.bfmtv.com/c/1256/708/142/19260742b4b174e572508d9093b60.jpg"
            />
            <div className="pm-product-des">
              <h2 style={{ color: "black" }}>Macbook Pro</h2>
              <h3 style={{ color: "black" }}>Version SSD 128 GB CPU Core I7</h3>
              <div className="pm-product-des-1">
                <h3 style={{ color: "red" }}>20,000 THB</h3>
                <h3>x 3 days </h3>
              </div>
            </div>
          </div>
          <div className="pm-option">
            <div className="pm-option-1">
              <h3 style={{ color: "black" }}>ตัวเลือกการจัดส่ง</h3>
              <h2 style={{ color: "black" }}>THAI POST (EMS)</h2>
            </div>
            <div className="pm-option-2">100 THB.</div>
          </div>
          <div className="pm-payment">
            <div className="pm-payment-header">
              <h3 style={{color:"black"}}>วิธีการชำระเงิน</h3>
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
                    <h3 style={{color:"black"}}>ยอดการเช่า/ซื้อ ( x3 days )</h3><h3 style={{color:"black"}}>600 THB</h3>
                </div>
                <div className="pm-payment-body-1">
                    <h3 style={{color:"black"}}>ค่าจัดส่ง</h3><h3 style={{color:"black"}}>600 THB</h3>
                </div>
                <div className="pm-payment-body-1">
                    <h3 style={{color:"black"}}>ค่ามัดจำสินค้า( ได้คืนหลังการส่งคืนสินค้า )</h3><h3 style={{color:"black"}}>600 THB</h3>
                </div>
            </div>
          </div>
          <div className="pm-footer">
              <h2 style={{color:"black",margin:"10px"}}>ยอดชำระทั้งหมด</h2>
              <h2 style={{color:"red",margin:"10px"}}>1700 THB.</h2>
              <Button className="pm-footer-btn">BUY</Button>
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default PaymentPage;
