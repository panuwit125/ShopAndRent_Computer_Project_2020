import React, { useEffect, useState, useInterval } from "react";
import Webcam from "react-webcam";
import { Form, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateSsid,
  updateToken,
} from "../../store/actions/postAction";
import Router from "next/router";
import Axios from "axios";
import SuggestComponent from './component.suggestion'

const FormItem = Form.Item;
var textAlertOne;
var textAlertTwo;

const WebcamCapture = () => {
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const { token } = useSelector((state) => state.post);
  const [isLoading, setisLoading] = useState(false);
  const [isReadyCapture, setisReacyCapture] = useState(10);
  const [check, setCheck] = useState("block");
  const [Alert,setAlert] = useState('none');

  useEffect(() => {
    dispatch(updateToken(localStorage.getItem("jwt")));
    if (localStorage.getItem("jwt")) {
      setisLoading(true);
    } else {
      Router.push("/page.covid1");
    }
  }, []);

  useEffect(() => {
    if (isReadyCapture === 0) {
      setAlert('block');
      textAlertOne = "กรุณารอสักครู่"
      capture();
    } else {
      if (isReadyCapture <= 0) {
        return null;
      } else {
        setTimeout(() => {
          setisReacyCapture(isReadyCapture - 1);
          if (isReadyCapture === 1) {
            setCheck("none");
          }
        }, [1000]);
      }
    }
  }, [isReadyCapture]);

  const Axiosphoto = (value) => {
    setAlert('none')
    const Command = value;
    console.log(Command);
    if (Command.code === "111") {
      //alert("กรุณาถอดหน้ากาก");
      textAlertOne = "กรุณาถอดหน้ากาก"
      textAlertTwo = "จะเริ่มทำการบันทึกภาพใหม่"
      setAlert('block')
      setTimeout(()=>{
        setAlert('none');
        textAlertOne = "";
        textAlertTwo = "";
        setisReacyCapture(10);
        setCheck('block');
      },[5000])
    } else if (Command.code === "100") {
      console.log(Command.code)
      localStorage.setItem("user", JSON.stringify(value.payload));
      dispatch(updateSsid(value.payload.cid));
      dispatch(updateFirstName(value.payload.fisrt_name));
      dispatch(updateLastName(value.payload.last_name));
      //alert("พบข้อมูล");
      textAlertOne = "พบข้อมูล"
      textAlertTwo = "กำลังไปหน้าต่อไป"
      setAlert('block')
      setTimeout(()=>{
        textAlertOne = "";
        textAlertTwo = "";
        Router.push("/page.covid4");
      },[2000])
    } else if (Command.code === "110") {
      //alert("ไม่พบข้อมูล,กรุณาโชว์บัตรประชาชนแทน");
      textAlertOne = "ไม่พบข้อมูล"
      textAlertTwo = "กรุณาโชว์บัตรประชาชนแทน"
      setAlert('block')
      setTimeout(()=>{
        setAlert('none');
        textAlertOne = "";
        textAlertTwo = "";
        setisReacyCapture(10);
        setCheck('block')
      },[5000])
    }
  };
  function taskOne() {
    return new Promise(async (resolve) => {
      const A = async () => {
        const imageSrc = await webcamRef.current.getScreenshot();
        localStorage.setItem("image", imageSrc);
        var block = await imageSrc.split(";");
        var contentType = await block[0].split(":")[1];
        var realData = await block[1].split(",")[1];
        var blob = await b64toBlob(realData, contentType);
        resolve(blob);
      };
      await A();
    });
  }
  function taskTwo(value) {
    return new Promise(async (resolve) => {
      const B = async () => {
        await console.log("A", value);
        const formData = await new FormData();
        await formData.append("picture", value);
        return formData;
      };
      const postimage = async () => {
        console.log('FormData',formData)
        /*await Axios.post(
          "https://www.nuscreening.kasemsanm.com/api/v1/faceDetect/1",
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
          .then((res) => {
            console.log("success", res.data);
            Axiosphoto(res.data);
          })
          .catch((err) => {
            console.log("เตือนไม่พอข้อมูล", err.response.status);
            if (err.response.status === 401) {
              Axios({
                method: "GET",
                url:
                  "https://www.nuscreening.kasemsanm.com/api/v1/manage/token",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    "jwt-refresh"
                  )}`,
                },
              })
                .then((res) => {
                  localStorage.setItem("jwt", res.data["accessToken"]);
                  localStorage.setItem("jwt-refresh", res.data["refreshToken"]);
                  dispatch(updateToken(res.data["accessToken"]));
                  console.log("Update Token Success!", res);
                  postimage();
                })
                .catch((error) => {
                  console.log("Error Code", error.response.status);
                  Router.push("/page.covid1");
                });
            }
          });*/
          let data = {
            "code":"100",
            "payload":{
              "cid":3640600077526,
              "fisrt_name":"Panuwit",
              "last_name":"Makmee"
            }
          }
          Axiosphoto(data);
      };
      var formData = await B();
      await postimage();
    });
  }

  const main = async () => {
    var result = await taskOne();
    await taskTwo(result);
  };

  const capture = () => {
    main();
  };

  /*const [statee, setStatee] = useState(null);
  const fileSelectedHandler = (event) => {
    setStatee(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const fileUploadHandler = () => {
    console.log("TEST", statee);
    const fd = new FormData();
    fd.append("picture", statee);
    Axios.post("http://34.87.54.114:8003/api/v1/file/uploadphoto", fd, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };*/

  function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || "";
    sliceSize = sliceSize || 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  /*const test = () => {
    var ImageURL = data;
    console.log(ImageURL);
    var block = ImageURL.split(";");
    var contentType = block[0].split(":")[1];
    var realData = block[1].split(",")[1];
    var blob = b64toBlob(realData, contentType);
    console.log(blob);
    const fd = new FormData();
    fd.append("picture", blob);
    Axios.post("http://34.87.54.114:8003/api/v1/file/uploadphoto", fd, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };*/

  if (isLoading) {
    const keyword = ["พร้อมถ่าย"];
    return (
      <div>
        <FormItem>
          <div style={{ display: check }} className="modal">
            <div className="modal-content">
              <h1 style={{ fontSize: "100px", opacity: "0.8" }}>
                {isReadyCapture}
              </h1>
            </div>
          </div>

          <div style={{ display: Alert }} className="modal cl-modal">
            <div className="modal-content cl-modal-content">
              <SuggestComponent page={"snapshot"} textAlertOne={textAlertOne} textAlertTwo={textAlertTwo} />
            </div>
          </div>

          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              style={{ borderRadius: "20px", color: "white" }}
            />
          </div>
        </FormItem>
      </div>
    );
  } else {
    return null;
  }
};

export default WebcamCapture;
