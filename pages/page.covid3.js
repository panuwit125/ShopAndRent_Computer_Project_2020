import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Input,
} from "antd";
import Link from "next/link";
import HeaderCovid from "./components/component.headercovid";
import SelectData from "./components/component.setdata";
import { RightOutlined } from "@ant-design/icons";
import Axios from "axios";
import { useSelector } from 'react-redux'
import Router from "next/router";

const FormItem = Form.Item;

function CovidPage3() {
  const {FirstName,LastName,SSID,BirdDay,PostId} = useSelector(state=>state.post)
  const handleSaveData = async () =>{
    await Axios.post('https://smxv3.sse.codesandbox.io/patient',{
      FirstName: FirstName,
      LastName: LastName,
      SSID: SSID,
      PostID: PostId,
      BirdDay: BirdDay
    })
    .then(function(res){
      console.log("sucsess",res)
      Router.push('/page.covid4')
    })
    .catch(function(){
      console.log('error')
    })
  }
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
                flexDirection: "column",
              }}
            >
              <SelectData />
            </div>
            <div
              style={{
                display: "flex",
                flexBasis: "auto",
                justifyContent: "flex-end",
              }}
            >
                <Button
                  type="primary"
                  style={{
                    fontSize: "24px",
                    height: "50px",
                    borderRadius: "33px",
                    padding: "0px 25px",
                    marginRight: "20px",
                  }}
                  onClick={handleSaveData}
                >
                  ยืนยันตัวตน <RightOutlined />
                </Button>
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

export default CovidPage3;
