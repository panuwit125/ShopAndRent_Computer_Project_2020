import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from "antd";
const FormItem = Form.Item;
import { LeftOutlined } from "@ant-design/icons";
import img1 from "../../public/logo1.png";
import Router from 'next/router'


function headerCovid(props) {
  return (
    <FormItem>
      <div className="nu-font-covid">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexBasis: "auto",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
                <Button
                  style={{
                    height: "42px",
                    fontSize: "22px",
                    marginLeft: "20px",
                  }}
                  type="primary"
                  onClick={()=>{Router.push(props.link)}}
                >
                  <LeftOutlined />
                  ย้อนกลับ
                </Button>
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                marginRight: "10px",
              }}
            >
              <div
                style={{
                  textAlign: "right",
                  flexDirection: "column",
                  flexBasis: "auto",
                  width: "100%",
                  marginTop: "15px",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "32px",
                    marginBottom: "-5px",
                  }}
                >
                  แบบประเมินโรคไวรัส COVID-19
                </h1>
                <h2
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginBottom: "0px",
                  }}
                >
                  แบบประเมินโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 (COVID-19)
                </h2>
              </div>
              <div
                style={{
                  flexBasis: "auto",
                }}
              >
                <div
                  style={{
                    width: "74px",
                    height: "74px",
                    background:
                      "transparent linear-gradient(137deg, #E88300 0%, #EF5800 100%) 0% 0% no-repeat padding-box",
                    borderRadius: "26px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "15px 10px 0px 10px",
                  }}
                >
                  <img src={img1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormItem>
  );
}
export default headerCovid;
