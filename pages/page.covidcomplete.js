import {
  Form,
  Button,
} from "antd";
import Link from "next/link";
import router from "next/router"
import img1 from "../public/1.png";
import { useState, useEffect } from "react";

const FormItem = Form.Item;

var user = null;
function covidComplete() {
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setisLoading(true)
  }, []);

  if (isLoading) {
    setTimeout(()=> {
      router.push("/page.covid1")
    },20000)
    return (
      <FormItem>
        <div className="nu-font-covid">
          <div className="nu-complete">
            <div className="nu-complete1">
              <h2
                style={{
                  color: "white",
                  fontSize: "32px",
                  marginBottom: "0px",
                  marginTop: "5%",
                }}
              >
                {user.fisrt_name + " " + "   " +user.last_name}
              </h2>
              <h1
                style={{
                  color: "#EC6600",
                  fontSize: "80px",
                  textAlign: "center",
                  marginBottom: "-15px",
                }}
              >
                มีความเสี่ยง
              </h1>
              <h2
                style={{
                  color: "white",
                  fontSize: "32px",
                  marginBottom: "0px",
                }}
              >
                แบบประเมินโรคไวรัส COVID-19
              </h2>
              <h3
                style={{
                  color: "white",
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                แบบประเมินสงสัยโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 (COVIDE
                19)
              </h3>
              <Link href="/page.covid1">
                <Button className="nu-btn-complete" type="primary">
                  กลับหน้าหลัก
                </Button>
              </Link>
              <Button className="nu-btn-complete">ประเมินอีกครั้ง</Button>
            </div>
            <div className="nu-complete2">
              <img src={img1} style={{ marginBottom: "10px" }} />
              <h5 style={{ color: "#FFFFFF80" }}>
                Copyright © All rights reserved. 2020 มหาวิทยาลัยนเรศวร Naresuan
                University
              </h5>
            </div>
          </div>
        </div>
      </FormItem>
    );
  } else {
    return null;
  }
}

export default covidComplete;
