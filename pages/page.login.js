import { Form, Button, Input } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";

function loginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [namelogin, setNameLogin] = useState("");
  const [passwordlogin, setPasswordLogin] = useState("");

  useEffect(() => {
    localStorage.clear();
  }, []);

  const loginData = () => {
    if (!namelogin || !passwordlogin) {
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
          localStorage.setItem("type", "Shop");
          router.push("/page.shop");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const postData = () => {
    if (!name || !password || !firstname || !lastname) {
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
              localStorage.setItem("type", "Shop");
              router.push("/page.shop");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    }
  };

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="lg">
        <div className="lg-card">
          <div>
            <h2>สมัครสมาชิก</h2>
            <h3>ชื่อผู้ใช้งาน</h3>
            <Input
              className="lg-input"
              placeholder="ชื่อผู้ใช้งาน"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h3>รหัสผ่าน</h3>
            <Input
              className="lg-input"
              type="password"
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3>ชื่อ</h3>
            <Input
              className="lg-input"
              placeholder="ชื่อ"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <h3>นามสกุล</h3>
            <Input
              className="lg-input"
              placeholder="นามสกุล"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <Button className="lg-btn" onClick={() => postData()}>
              สมัครสมาชิก
            </Button>
          </div>
          <div>
            <h2>เข้าสู่ระบบ</h2>
            <h3>ชื่อผู้ใช้งาน</h3>
            <Input
              className="lg-input"
              placeholder="ชื่อผู้ใช้งาน"
              value={namelogin}
              onChange={(e) => setNameLogin(e.target.value)}
            />
            <h3>รหัสผ่าน</h3>
            <Input
              value={passwordlogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              className="lg-input"
              type="password"
              placeholder="รหัสผ่าน"
            />
            <Button className="lg-btn" onClick={() => loginData()}>
              เข้าสู่ระบบ
            </Button>
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default loginPage;
