import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from "antd";
import Link from "next/link";
import HeaderCovid from './components/component.headercovid'
import SetData from './components/component.setdataprofile'

const FormItem = Form.Item;

function CovidPage2() {
  return (
    <div style={{ marginTop: 0 }}>
      <FormItem>
        <div className="nu-font-covid">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
            }}
          >
            <div
              style={{
                flexBasis: "auto",
              }}
            >
              <HeaderCovid />
            </div>
            <div
              style={{
                display: "flex",
                flexBasis: "auto",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SetData />
            </div>
            <div
              style={{
                flexBasis: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h5 style={{color:"#FFFFFF80"}}>
                Copyright © All rights reserved. 2020 มหาวิทยาลัยนเรศวร Naresuan
                University
              </h5>
            </div>
          </div>
        </div>
      </FormItem>
    </div>
  );
}

export default CovidPage2;
