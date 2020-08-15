import { Form, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Router from "next/router";
import React, { useState, useEffect } from "react";
import HeaderCovid from "./components/component.headercovid";
import QuestionCovid from "./components/component.question";
import { useSelector,useDispatch } from "react-redux";
import Axios from "axios";
import AudioPlayer from "./components/component.audioplayer";
import Duration from "./components/component.duration";
import Speechtotext from "./components/component.speechtotext";
import Copyright from "./components/component.footercopyright";
import ButtonQuestion from "./components/component.buttonquestion";
import ReactPlayer from "react-player";
import AudioAsk from '../public/SoundSuggestAsk.mp3'

var Array = [];
var mytimeout;
var mytimestart;
var form_questionid;
const FormItem = Form.Item;
function CovidQuestion() {
  //State จัดการเรื่องชุดคำถาม =========================
  const [page, setPage] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isEnd, setisEnd] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [options, setoptions] = useState("");
  const [question, setQuestion] = useState("");
  const [token, settoken] = useState(false);
  const [keyword, setKeyword] = useState([]);
  const { time } = useSelector((state) => state.post);

  //จัดการชุดคำตอบที่จะส่งไปตอนเสร็จ
  const [questionID, setQuestionID] = useState(null);
  const [CheckSuccess, setCheckSuccess] = useState(false);
  const [checkAudio, setcheckAudio] = useState(false);
  const dispatch = useDispatch();
  //=================================================

  //-----------------------------------------
  useEffect(() => {
    if (!isLoading) {
      Axios({
        method: "post",
        url: "https://www.nuscreening.kasemsanm.com/api/v1/query/question",
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
        data: { patient_no: "3640600077526", form_question_id: 1 },
      })
        .then((res) => {
          console.log("Import Data Success!", res);
          //Array[res.data.payload.length-1] = undefined
          form_questionid = 1;
          setTimeout(()=>{
            setPage(res.data.payload);
            settoken(true);
          },28000)
          
        })
        .catch((error) => {
          console.log("Not found Token or PatientNo", error.response.status);
          if (error.response.status === 401) {
            Axios({
              method: "GET",
              url: "https://www.nuscreening.kasemsanm.com/api/v1/manage/token",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt-refresh")}`,
              },
            })
              .then((res) => {
                localStorage.setItem("jwt", res.data["accessToken"]);
                localStorage.setItem("jwt-refresh", res.data["refreshToken"]);
                console.log("Update Token Success!");
              })
              .catch((error) => {
                console.log("Error Code", error.response.status);
                Router.push("/page.covid1");
              });
          }
          if (error.response.status === 404) {
            console.log("ไม่มีข้อมูลอยู่ในระบบ");
            Router.push("/page.covid2");
          }
        });
    }
  }, []);

  useEffect(() => {
    if (token) {
      console.log("Function Set Question Two!", page.length, currentQuestion);
      if (Array.length >= page.length) {
        for (var i = 0; i <= Array.length - 1; i++) {
          if (Array[i] === undefined) {
            console.log("break", Array[i], Array.length, i);
            break;
          }
          console.log("err", i + 1, Array.length);
          if (i === Array.length - 1) {
            console.log("Check Complete And Go to savedata!");
            setisEnd(true);
          }
        }
        //console.log("หลุดลูป");
      }
      if (page.length - 1 >= currentQuestion >= 0) {
        //console.log("CurrentQuestion in set question!", currentQuestion);
        setQuestion(page[currentQuestion].body);
        setoptions(page[currentQuestion].voice);
        setQuestionID(page[currentQuestion].question_id);
        setKeyword(page[currentQuestion].keywords);
        settoken(false);
        setisLoading(true);
        mytimeout = setTimeout(() => {
          alert("TimeOut!");
        }, [20500]);
      }
    }
  }, [token, currentQuestion]);
  useEffect(() => {
    console.log(time * 1000, "time");
    console.log("Time!", options.duration);
  }, [time]);

  const nextQuestionHandler = (answer, raw_answer) => {
    setcheckAudio(false);
    clearTimeout(mytimeout);
    Array[currentQuestion] = {
      question_id: questionID,
      answer: answer,
      rew_answer: raw_answer,
    };
    if (currentQuestion + 1 >= page.length) {
      //console.log("Final1111", currentQuestion + 1);
      setCurrentQuestion(currentQuestion);
      settoken(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      settoken(true);
      //console.log("Final3333", currentQuestion + 1);
    }
    //console.log("Question", currentQuestion);
    console.log("Array", Array);
    setisLoading(false);
    //}
  };

  const saveDataHandler = async () => {
    var cid = JSON.parse(localStorage.getItem("user"));
    let payload = {
      patient_no: cid.cid,
      form_questions_id: form_questionid,
      form_questions: Array,
    };
    console.log("Data ready to send backend!", payload);
    setCheckSuccess(true);
    await Axios({
      method: "post",
      url: "https://www.nuscreening.kasemsanm.com/api/v1/query/sendQuestion",
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      data: payload,
    })
      .then(function (res) {
        console.log("Success to Save Data!", res);
        const checknextform = res.data.payload;
        console.log("SSSS", res.data.payload);
        if (checknextform === undefined || checknextform === null) {
          Array = [];
          console.log("จบโปเสด");
          Router.push("/page.covidcomplete");
        } else {
          Array = [];
          console.log("Restart Array!", Array);
          console.log("Restart Data!", res.data);
          form_questionid = res.data.payload[0].form_question_id;
          console.log(form_questionid);
          setisLoading(false);
          setisEnd(false);
          setCurrentQuestion(0);
          setPage(res.data.payload);
          settoken(true);
          setCheckSuccess(false);
        }
      })
      .catch((error) => {
        console.log("Not found Token or PatientNo", error);
        if (error.response.status === 401) {
          Axios({
            method: "GET",
            url: "https://www.nuscreening.kasemsanm.com/api/v1/manage/token",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt-refresh")}`,
            },
          })
            .then((res) => {
              localStorage.setItem("jwt", res.data["accessToken"]);
              localStorage.setItem("jwt-refresh", res.data["refreshToken"]);
              console.log("Update Token Success!");
              setisLoading(false);
            })
            .catch((error) => {
              console.log("Error Code", error.response.status);
              Router.push("/page.covid1");
            });
        }
        if (error.response.status === 404) {
          console.log("ไม่มีข้อมูลอยู่ในระบบ");
          Router.push("/page.covid2");
        }
      });
  };

  const ButtonNext = (condition) => {
    setcheckAudio(false);
    clearTimeout(mytimeout);
    if ("next" === condition) {
      if (currentQuestion + 1 >= page.length) {
        //console.log("Final Question", currentQuestion, page.length);
        setCurrentQuestion(currentQuestion);
        settoken(true);
        setisLoading(false);
      } else {
        //console.log("Simple Question", currentQuestion, page.length);
        setCurrentQuestion(currentQuestion + 1);
        settoken(true);
        setisLoading(false);
      }
    } else if ("back" === condition) {
      if (currentQuestion === 0) {
        //console.log("First Question", currentQuestion, page.length);
        setCurrentQuestion(currentQuestion);
        settoken(true);
        setisLoading(false);
      } else {
        //console.log("Simple Question", currentQuestion, page.length);
        setCurrentQuestion(currentQuestion - 1);
        settoken(true);
        setisLoading(false);
      }
    }
    console.log("Array", Array);
  };

  const Showbar = () => {
    return (
      <div className="w3-light-grey">
        <div className="nu-boxbar-covidqt" />
      </div>
    );
  };
  const handleDuration = (duration) => {
    //dispatch(updateTime(duration));
    mytimestart = duration
    setcheckAudio(true)
  };
  //====================================================
  if (isLoading) {
    if (isEnd) {
      clearTimeout(mytimeout);
      if (!CheckSuccess) {
        saveDataHandler();
      }
      return null;
    } else {
      console.log("Re-Render1");
      if (checkAudio) {
        console.log("Re-Render2");
        return (
          <FormItem>
            <div className="nu-font-covid">
              <div className="nu-flex-column-fs">
                <div>
                  <HeaderCovid link={"/page.covid4"} />
                </div>
                <div className="nu-flex-row-bsauto-h100">
                  <div className="nu-fs10-covidqt nu-flexleft-covid">
                    <Button
                      shape="circle"
                      size="middle"
                      className="nu-btn-left-covidqt"
                      onClick={() => ButtonNext("back")}
                    >
                      <LeftOutlined style={{ fontSize: "35px" }} />
                    </Button>
                  </div>
                  <div className="nu-flex-column-bsauto-w100 nu-center-covidss nu-h100-covidqt">
                    <div className="nu-dp-name-covidqt">
                      <QuestionCovid text={question} check={token} />
                    </div>
                    <div className="nu-center-covidss nu-dp-btn-covidqt">
                      <ButtonQuestion
                        click={nextQuestionHandler}
                        question={question}
                        check={Array[currentQuestion]}
                      />
                    </div>
                  </div>
                  <div className="nu-fs10-covidqt nu-flexright-covid">
                    <Button
                      shape="circle"
                      size="middle"
                      className="nu-btn-right-covidqt"
                      onClick={() => ButtonNext("next")}
                    >
                      <RightOutlined style={{ fontSize: "35px" }} />
                    </Button>
                  </div>
                </div>
                <div className="nu-dp-ud-covidqt">
                  <div className="nu-dp-pgnt-covidqt">
                    <div className="nu-pgnt-covidqt">
                      <div
                        className="nu-box-covid1"
                        style={{ marginLeft: "70px" }}
                      >
                        {page.map((page, index) => {
                          if (index === currentQuestion) {
                            return (
                              <span
                                className="nu-box1-covid1"
                                style={{ background: "white" }}
                              />
                            );
                          }
                          return <span className="nu-box1-covid1" />;
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <AudioPlayer
                      url={options}
                      token={localStorage.getItem("jwt")}
                      isLoading={isLoading}
                    />
                  </div>
                </div>
                <div className="nu-dptm-covidqt">
                  <h5 className="nu-h5-covidqt">
                    <Duration seconds={mytimestart} />
                  </h5>
                </div>
                <div>
                  <Showbar text={question} />
                </div>
                <div
                  className="nu-dp-ud-covidqt"
                  style={{ flexBasis: "180px" }}
                >
                  <div className="nu-dp-pgnt-covidqt">
                    <div
                      className="sound-icon disabled"
                      style={{ marginLeft: "80px" }}
                    >
                      <div className="sound-wave">
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                        <i className="bar"></i>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "100%", marginTop: "20px" }}>
                    <Speechtotext
                      speech={nextQuestionHandler}
                      keyword={keyword}
                      page={"covidquestion"}
                      time={mytimestart}
                      formquestionid={form_questionid}
                    />
                  </div>
                </div>
                <div className="nu-flex-btn-covid1">
                  <Copyright />
                </div>
              </div>
            </div>
          </FormItem>
        );
      } else {
        console.log('Re-Render3')
        return (
          <div>
            <ReactPlayer
              controls={true}
              light={false}
              playing={false}
              width="0%"
              height="0%"
              url={options}
              onDuration={handleDuration}
            />
          </div>
        );
      }
    }
  } else {
       return (
          <FormItem>
            <div className="nu-font-covid">
              <div className="nu-flex-column-fs">
                <div>
                  <HeaderCovid link={"/page.covid4"} />
                </div>
                <div className="nu-flex-row-bsauto-h100" style={{padding:"200px"}}>
                  <div style={{background:"#FFFFFF0A 0% 0% no-repeat padding-box",width:"100%",borderRadius:"35px",padding:"20px",textAlign:"center"}}>
                    <h1 style={{fontSize:"50px"}}>คำแนะนำ</h1>
                    <h2 style={{fontSize:"25px"}}>กรุณาฟังเสียงคำถามให้จบก่อน แล้วจะมีเสียงแจ้งเตือนเพื่อบอกว่า การบันทึกเสียงพร้อมใช้งานแล้ว หลังจากนั้นให้คุณสามารถตอบแบบฟอร์มโดยพูดว่า ใช่ หรือ ไม่ใช่ การตอบคำถามที่ดีคือเน้นตอบให้ชัดเจน และถ้ายิ่งตอบแค่ว่า ใช่ หรือ ไม่ใช่ จะดีที่สุดต่อการประมวลผล</h2>
                  </div>
                  <ReactPlayer url={AudioAsk} playing={true} width="0%" height="0%" />
                </div>
                <div className="nu-flex-btn-covid1">
                  <Copyright />
                </div>
              </div>
            </div>
          </FormItem>
        );
  }
}

export default CovidQuestion;
