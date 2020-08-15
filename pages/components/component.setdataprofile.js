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
import img1 from "../../public/16.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  updateFirstName,
  updateLastName,
  updateSsid,
  updateBird,
  updatePost,
} from "../../store/actions/postAction";
import axios from "axios";
import Router from "next/router";
const FormItem = Form.Item;
const { Search } = Input;

function setDataProfile() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const { SSID } = useSelector((state) => state.post);
  const pino = "3640600077526";
  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
    console.log('set')
  });

  const handlecheckssid = async () => {
    await axios({
      method: "post",
      url: "https://www.nuscreening.kasemsanm.com/api/v1/patient/patientDetail",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { "patient_no": SSID },
    })
      .then(function (res) {
        localStorage.setItem("user", res.data["payload"]);
        dispatch(updateFirstName(res.data.payload.firstName));
        dispatch(updateLastName(res.data.payload.lastName));
        dispatch(updateSsid(res.data.payload.pid));
        dispatch(updateBird(res.data.payload.birthDate));
        dispatch(updatePost(res.data.payload.provinceID));
        Router.push("/page.covid4");
      })
      .catch((err) => {
        console.log("เตือนไม่พอข้อมูล", err.response.status);
        if (err.response.status === 401) {
          axios({
            method: "GET",
            url: "https://www.nuscreening.kasemsanm.com/api/v1/manage/token",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt-refresh")}`,
            },
          })
            .then((res) => {
              localStorage.setItem("jwt", res.data["accept-token"]);
              console.log("Update Token Success!");
              handlecheckssid();
            })
            .catch((error) => {
              console.log("Error Code", error.response.status);
              Router.push("/page.covid1");
            });
        }
        if (err.response.status === 404) {
          console.log("ไม่มีข้อมูลอยู่ในระบบ");
          dispatch(updateFirstName(""));
          dispatch(updateLastName(""));
          dispatch(updateSsid(""));
          dispatch(updateBird(""));
          dispatch(updatePost(""));
          Router.push("/page.covid3");
        }
      });
  };

  return (
    <FormItem>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>กรุณาใส่เลขบัตรประชาชน</h1>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div>
              <Input
                style={{
                  padding: "25px",
                  borderRadius: "50px 0px 0px 50px",
                  fontSize: "22px",
                  color: "white",
                }}
                placeholder="เลขบัตรประชาชน"
                value={SSID}
                onChange={(e) => dispatch(updateSsid(e.target.value))}
              />
            </div>
            <div>
              <Button
                style={{ height: "100%", borderRadius: "0px 50px 50px 0px" }}
                type="primary"
                onClick={handlecheckssid}
              >
                ตรวจสอบ
              </Button>
            </div>
            {/*<div
              style={{
                display: "flex",
                flexBasis: "auto",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                flexDirection: "column",
              }}
            >
              <Link href="/page.covid3" >
                <div
                  style={{
                    background: "white",
                    width: "220px",
                    height: "220px",
                    padding: "23px",
                    background: "#FFFFFF0A 0% 0% no-repeat padding-box",
                    borderRadius: "47px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px 40px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "50px",
                      width: "100%",
                      background:
                        "transparent linear-gradient(107deg, #E88300 0%, #EF5800 100%) 0% 0% no-repeat padding-box",
                      borderRadius: "146px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "25px",
                        height: "31px",
                        background: "white",
                        borderRadius: "58px",
                        margin:"0px 4px"
                      }}
                    />
                    <div
                      style={{
                        width: "25px",
                        height: "31px",
                        background: "white",
                        borderRadius: "58px",
                        margin:"0px 4px"
                      }}
                    />
                    <div
                      style={{
                        width: "25px",
                        height: "31px",
                        background: "white",
                        borderRadius: "58px",
                        margin:"0px 4px"
                      }}
                    />
                    <div
                      style={{
                        width: "25px",
                        height: "31px",
                        background: "white",
                        borderRadius: "58px",
                        margin:"0px 4px"
                      }}
                    />
                    <div
                      style={{
                        width: "25px",
                        height: "11px",
                        background: "white",
                        borderRadius: "58px",
                        margin:"16px 4px 0px 4px"
                      }}
                    />
                  </div>
                </div>
              </Link>
              <h3 style={{ fontSize: "22px" }}>กำหนดเอง</h3>
            </div>

            <div
              style={{
                display: "flex",
                flexBasis: "auto",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  background: "white",
                  width: "220px",
                  height: "220px",
                  padding: "10px",
                  background: "#FFFFFF0A 0% 0% no-repeat padding-box",
                  borderRadius: "47px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  margin: "20px 40px",
                }}
              >
                <img src={img1} />
              </div>
              <h3 style={{ fontSize: "22px" }}>ระบุตัวตนด้วยใบหน้า</h3>
              </div>*/}
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default setDataProfile;
