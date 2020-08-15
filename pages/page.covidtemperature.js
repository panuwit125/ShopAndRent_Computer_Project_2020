import React, { useEffect } from "react";
import router from 'next/router'
import HeaderCovid from "./components/component.headercovid";
import ShowProfile from "./components/component.showprofile";
import Copyright from "./components/component.footercopyright";
import { Form, Spin, Space } from "antd";

const FormItem = Form.Item;

function CovidTemperature() {

    useEffect(()=>{
        setTimeout(()=>{
            console.log('move page')
            router.push('/page.covidquestion')
        },10000)
    },[])


  return (
    <FormItem>
      <div className="nu-font-covid">
        <div className="nu-flex-column-fs">
          <div>
            <HeaderCovid link={"/page.takephoto"} />
          </div>
          <div
            className="nu-flex-row-bsauto-h100 nu-center-covid4"
            style={{ flexDirection: "column" }}
          >
            <div>
                <Space >
                    <Spin size="large" />
                </Space>
            </div>
            <div>
              <h1>กรุณายืนอยู่กับที่เพื่อตรวจวัดอุณหภูมิ</h1>
            </div>
          </div>
          <div className="nu-flex-row-bsauto nu-name-covid1">
            <Copyright />
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default CovidTemperature;
