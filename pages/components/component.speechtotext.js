import React, { useState, useEffect, useMemo } from "react";
import { Form } from "antd";
import { AudioFilled, AudioMutedOutlined } from "@ant-design/icons";
import Router from "next/router";
const FormItem = Form.Item;

const Dictaphone = (props) => {
  const [Text, SetText] = useState("");
  const [Keyword, SetKeyword] = useState([]);
  const [isReady, SetisReady] = useState(0);
  const [start, SetStart] = useState(false);
  const [value, SetValue] = useState(0);
  const [Status, SetStatus] = useState(0);
  const [StatusOne , SetStatusOne] = useState(false)
  const [Success, SetSuccess] = useState(false);

  useMemo(() => {
    clearTimeout(setTimeoutMic);
    SetSuccess(false);
    if (props.page === "covidquestion") {
      var setTimeoutMic = setTimeout(() => {
        SetSuccess(true);
        SetKeyword(props.keyword);
        console.log("Keyword", props.keyword,((props.time*1000)+2000));
      }, ((props.time*1000)+2000));
    } else {
      var setTimeoutMic = setTimeout(() => {
        SetSuccess(true);
        SetKeyword(props.keyword);
        console.log("Keyword", props.keyword);
      }, props.time);
    }
    
  }, [props.keyword]);

  useEffect(() => {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    if (StatusOne) {
      recognition.continuous = false;
      recognition.lang = "th-TH";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      SetText("");
      recognition.start();
      recognition.onstart = () => {
        console.log("START Recording!", Status);
      };
      const c = () => {
        recognition.onend = (event) => {
          console.log("END Recording!");
          SetStatus(Status + 1);
        };
      };
      const b = () => {
        recognition.onresult = (event) => {
          SetText(event.results[0][0].transcript);
          SetValue(value + 1);
          console.log("WaitText!", Text);
        };
      };
      b();
      c();
    } else {
      recognition.abort();
      SetStatusOne(true);
    }
  }, [isReady, Keyword]);

  useEffect(() => {
    if (start) {
      if (Text === "") {
        SetisReady(isReady + 1);
      } else {
        const word = Keyword; //ใช่
        const sentence = Text; //ไม่ใช่ฉันไม่ได้ไป
        const a = [];
        const checkCovid4 = [];
        var check = false;
        console.log("Word,Sentence", word, sentence);
        const AA = () => {
          return new Promise(function (resolve, reject) {
            const result = word.map((word, n) => {
              if (sentence.includes("ไม่" + word)) {
                if (props.page === "covid4") {
                  console.log(
                    "มีคำว่า : " + "ไม่" + word + " : ครั้งที่ : " + value
                  );
                  checkCovid4.push(
                    "มีคำว่า : " + "ไม่" + word + " : ครั้งที่ : " + value
                  );
                  return "มีคำว่า : " + "ไม่" + word + " : ครั้งที่ : " + value;
                } else {
                  console.log(
                    "มีคำว่า : " + "ไม่" + word + " : ครั้งที่ : " + value
                  );
                  return "มีคำว่า : " + "ไม่" + word + " : ครั้งที่ : " + value;
                }
              } else if (sentence.includes(word)) {
                console.log("มีคำว่า : " + word + " : ครั้งที่ : " + value);
                a.push("มีคำว่า : " + word + " : ครั้งที่ : " + value);
                return "มีคำว่า : " + word + " : ครั้งที่ : " + value;
              } else {
                console.log("ไม่มีคำว่า : " + word + " : ครั้งที่ : " + value);
                return "ไม่มีคำว่า : " + word + " : ครั้งที่ : " + value;
              }
            });
            resolve();
          });
        };
        const BB = () => {
          console.log("Succcccccccccccc!!!", sentence);
          console.log(a);
          if (a.length >= 1) {
            if (props.page === "covid1" || props.page === "covid4") {
              Router.push(props.speech);
              console.log("สำเร็จ");
            } else if (props.page === "covidquestion") {
              console.log("สำเร็จ ตอบว่าใช่ใช้");
              props.speech(true, sentence);
              console.log("สำเร็จ ตอบว่าใช่");
            } else if (props.page === "covidsnapshot") {
              props.speech();
              console.log("สำเร็จ! ถ่ายสำเร็จแล้ว");
            }
          } else {
            if (props.page === "covid1") {
              SetisReady(isReady + 1);
            } else if (props.page === "covidquestion") {
              console.log("สำเร็จ ตอบว่าไม่");
              props.speech(false, sentence);
            } else if (props.page === "covidsnapshot") {
              SetisReady(isReady + 1);
              console.log("อีกครั้ง");
            } else if (props.page === "covid4") {
              if (checkCovid4.length >= 1) {
                alert("กรุณาพบพยาบาลเพื่อตรวจสอบข้อมูล");
                Router.push("/page.covid1");
              } else {
                SetisReady(isReady + 1);
              }
            }
          }
        };
        async function Startt() {
          await AA();
          await BB();
        }
        Startt();
      }
    } else {
      SetStart(true);
    }
  }, [Status]);

  const Micshow = () => {
    if (Success) {
      return (
        <div
          style={{
            background:
              "transparent linear-gradient(137deg, #E88300 0%, #EF5800 100%) 0% 0% no-repeat padding-box",
            width: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            padding: "5px",
          }}
        >
          <AudioFilled
            style={{
              color: "white",
              fontSize: "30px",
            }}
          />
        </div>
      );
    } else {
      return (
        <div
          style={{
            background:
              "transparent linear-gradient(137deg, #E88300 0%, #EF5800 100%) 0% 0% no-repeat padding-box",
            width: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            padding: "5px",
          }}
        >
          <AudioMutedOutlined
            style={{
              color: "white",
              fontSize: "30px",
            }}
          />
        </div>
      );
    }
  };
  if (props.page === "covidquestion") {
    return (
      <div style={{ marginRight: "10px" }}>
        <FormItem>{Success ? <Micshow /> : <Micshow />}</FormItem>
      </div>
    );
  } else {
    return null;
  }
};

export default Dictaphone;
