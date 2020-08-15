import { Form, Button } from "antd";
import Link from "next/link";
import img1 from "../public/1.png";
import backcovid from "../public/backcovid.png";
import { CaretRightFilled } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { updateToken } from "../store/actions/postAction";
import Speechtotext from "./components/component.speechtotext";
import Copyright from "./components/component.footercopyright";
const FormItem = Form.Item;

function CovidPage1() {
  const dispatch = useDispatch();
  const [statusToken, setStatusToken] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    localStorage.clear();
    Axios.get("https://www.nuscreening.kasemsanm.com/api/v1/auth/login", {
      auth: {
        username: "kkk",
        password: "kkk",
      },
    })
      .then((data) => {
        localStorage.setItem("jwt", data.data["accept-token"]);
        localStorage.setItem("jwt-refresh", data.data["refresh-token"]);
        setToken(data.data["accept-token"]);
        setStatusToken(data.data.result);
        dispatch(updateToken(data.data["accept-token"]));
      })
      .catch((error) => {
        console.log("Error", error.response.status);
      });
  }, []);

  if (statusToken) {
    const keyword = ["เริ่มประเมิน"];
    console.log("Success to find token.");
    return (
      <FormItem>
        <div style={{ marginTop: 0 }}>
          <div
            className="nu-font-covid nu-bg-covid1"
            style={{
              backgroundImage: `url(${backcovid})`,
            }}
          >
            <div className="nu-bgcover-covid1">
              <div className="nu-flex-column-fs">
                <div className="nu-flex-row-bsauto-h100" />
                <div className="nu-flex-row-bsauto">
                  <div className="nu-flex-btntab-covid1">
                    <div className="nu-flex-btn-start-covid1 nu-flex-btn-covid1">
                      <Speechtotext
                        speech={"/page.takephoto"}
                        keyword={keyword}
                        page={"covid1"}
                        time={5000}
                      />
                      <Link href="/page.takephoto">
                        <Button
                          type="primary"
                          size="large"
                          className="nu-antd-btn-covid1"
                          htmlType="submit"
                        >
                          <div className="nu-antd-btn-start-covid1">
                            <CaretRightFilled style={{ fontSize: "50px" }} />
                            เริ่มประเมิน
                          </div>
                        </Button>
                      </Link>
                    </div>
                    <div className="nu-flex-btn-covid1">
                      <Button
                        className="nu-antd-btn-des-covid1"
                        size="large"
                        htmlType="submit"
                      >
                        รายละเอียด
                      </Button>
                    </div>
                  </div>
                  <div className="nu-flex-column-bsauto-w100">
                    <h1 style={{ fontSize: "42px", marginBottom: "0px" }}>
                      แบบประเมินโรคไวรัส COVID-19
                    </h1>
                    <h3 style={{ fontSize: "18px" }}>
                      แบบประเมินสงสัยโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019
                      (COVID 19)
                    </h3>
                    <h4 style={{ fontSize: "18px" }}>
                      22 สิงหาคม 2563 โดยโรงพยาบาลมหาวิทยาลัยนเรศวร{" "}
                      <img src={img1} />
                    </h4>
                  </div>
                </div>
                <div className="nu-name-covid1 nu-flex-row-bsauto">
                  <div className="nu-box-covid1" style={{ margin: "10px 0" }}>
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                    <span className="nu-box1-covid1" />
                  </div>
                </div>
                <div className="nu-name-covid1 nu-flex-row-bsauto">
                  <Copyright />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormItem>
    );
  } else {
    return null;
  }
}

export default CovidPage1;
