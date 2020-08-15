import {
  Form,
  Button,
} from "antd";
import Link from "next/link";
import HeaderCovid from "./components/component.headercovid";
import ShowProfile from "./components/component.showprofile";
import Copyright from "./components/component.footercopyright";
import SuggestComponent from './components/component.suggestion'
import { RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import AudioSuggestProfile from '../public/SoundSuggestProfile.mp3'

const FormItem = Form.Item;
function CovidPage4() {
  const [isLoading, setisLoading] = useState(false);
  const [Alert,setAlert] = useState('block');
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setisLoading(true);
      setTimeout(()=>{
        setAlert('none')
      },[12000])
    } else {
      Router.push("/page.covid1");
    }
  }, []);

  if (isLoading) {
    return (
      <div style={{ marginTop: 0 }}>
        <FormItem>
        <div style={{ display: Alert }} className="modal cl-modal">
            <div className="modal-content cl-modal-content">
              <SuggestComponent page={"showprofile"} textAlertOne={"คำแนะนำ"} textAlertTwo={"ถ้าข้อมูลเป็นของคุณจริง โปรดพูดคำว่า ใช่ ถ้าไม่ใช่ของคุณโปรดพูดว่า ไม่ใช่"} />
              <ReactPlayer url={AudioSuggestProfile} playing={true} width="0%" height="0%" />
            </div>
          </div>

          <div className="nu-font-covid">
            <div className="nu-flex-column-fs">
              <div>
                <HeaderCovid link={"/page.takephoto"} />
              </div>
              <div className="nu-flex-row-bsauto-h100 nu-center-covid4">
                <ShowProfile />
              </div>
              <div className="nu-tabbtn-covid4">
              <Link href="/page.covid1">
                  <Button type="primary" className="nu-antd-btn-covid4">
                    ไม่ใช่ฉัน 
                  </Button>
                </Link>
                <Link href="/page.covidtemperature">
                  <Button type="primary" className="nu-antd-btn-covid4">
                    เริ่มประเมิน <RightOutlined />
                  </Button>
                </Link>
              </div>
              <div className="nu-flex-row-bsauto nu-name-covid1">
                <Copyright />
              </div>
            </div>
          </div>
        </FormItem>
      </div>
    );
  } else {
    return null;
  }
}

export default CovidPage4;
