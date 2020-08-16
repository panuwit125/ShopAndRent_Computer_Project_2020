import { Form, Button,  } from "antd";
const FormItem = Form.Item;
import React , {useState} from "react";
import Header from "./components/component.header";
import Navbar from "./components/component.navbar";

function DescriptionPage() {
  const [nameproduct , setNameproduct] = useState('LENOVO')
  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="br">
        <div className="br-header">
          <Header />
        </div>
        <div className="br-body">
          <div className="sp-body-1">
          <Navbar setname={setNameproduct} page={"description"} />
          </div>
          <div className="sp-body-2">
            <div className="dt-body-2-header">
              <h1 style={{color:"black",textAlign:"center"}}>ACER 205PI CORE7</h1>
            </div>
            <div className="dt-body-2-body">
              <img
                className="dt-img"
                src="https://www.techmoblog.com/uploads/content_images/202004/img_1586763485_6180709595af.jpg"
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
                  จอภาพแบ็คไลท์แบบ LED ขนาด 13.3 นิ้ว (แนวทแยง) พร้อมเทคโนโลยี
                  IPS ความละเอียดปกติ 2560 x 1600 ที่ 227 พิกเซลต่อนิ้ว
                  และรองรับสีสันนับล้านสี
                </h2>
              </div>
            </div>
            <Button className="dt-btn">RENT NOW</Button>
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default DescriptionPage;
