import { Form, Button, Input } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";
import LoadingComponent from "../components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TitleHeader from "../components/component.titleheader";

//import page -> start
import SignInMobile from "../components/pages/mobiles/signin";
import SignInPC from "../components/pages/computer/signinPC";
//import page -> end

function loginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [fetchLoading, setfetchLoading] = useState(false);
  const [namelogin, setNameLogin] = useState("");
  const [passwordlogin, setPasswordLogin] = useState("");
  const matches = useMediaQuery("(min-width:600px)");
  const [mode, setMode] = useState("login");

  useEffect(() => {
    //localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setisLoading(true);
  }, []);

  const loginData = () => {
    setfetchLoading(true);
    if (!namelogin || !passwordlogin) {
      setfetchLoading(false);
      alert("กรุณากรอกข้อมูลให้ครบ");
    } else {
      let data = {
        user_name: namelogin,
        pass_word: passwordlogin,
      };
      axios({
        method: "post",
        url: "https://tranquil-beach-43094.herokuapp.com/signin",
        data: data,
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.savedUser));
          setfetchLoading(false);
          router.push("/shop");
        })
        .catch((err) => {
          setfetchLoading(false);
          console.log(err.response);
          alert(err.response.data.error);
        });
    }
  };

  const postData = () => {
    setfetchLoading(true);
    if (!name || !password || !firstname || !lastname) {
      setfetchLoading(false);
      alert("กรุณากรอกข้อมูลให้ครบ");
    } else {
      let data = {
        user_name: name,
        pass_word: password,
        first_name: firstname,
        last_name: lastname,
      };
      axios({
        method: "post",
        url: "https://tranquil-beach-43094.herokuapp.com/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      })
        .then((res) => {
          console.log(res);
          let data = {
            user_name: name,
            pass_word: password,
          };
          axios({
            method: "post",
            url: "https://tranquil-beach-43094.herokuapp.com/signin",
            data: data,
          })
            .then((res) => {
              console.log(res);
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.savedUser));
              setfetchLoading(false);
              router.push("/shop");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log("ERROR", error.response);
          alert(error.response.data.error);
        });
    }
  };

  if (!isLoading) {
    return <LoadingComponent type={"pageloading"} status={true} />;
  } else {
    if (matches) {
      return (
        <>
          <TitleHeader name={"SignIn"} />
          <SignInPC
            fetchLoading={fetchLoading}
            setName={setName}
            setPassword={setPassword}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setNameLogin={setNameLogin}
            setPasswordLogin={setPasswordLogin}
            loginData={loginData}
            name={name}
            password={password}
            firstname={firstname}
            lastname={lastname}
            namelogin={namelogin}
            passwordlogin={passwordlogin}
            postData={postData}
            mode={mode}
            setMode={setMode}
          />
        </>
      );
    } else {
      return (
        <>
          <TitleHeader name={"SignIn"} />
          <SignInMobile
            fetchLoading={fetchLoading}
            setName={setName}
            setPassword={setPassword}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setNameLogin={setNameLogin}
            setPasswordLogin={setPasswordLogin}
            loginData={loginData}
            name={name}
            password={password}
            firstname={firstname}
            lastname={lastname}
            namelogin={namelogin}
            passwordlogin={passwordlogin}
            postData={postData}
            mode={mode}
            setMode={setMode}
          />
        </>
      );
    }
  }
}

export default loginPage;
