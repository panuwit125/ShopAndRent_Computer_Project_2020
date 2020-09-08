import { Form, Button, Input,Layout } from "antd";
const { Header, Sider, Content } = Layout;
const FormItem = Form.Item;
import React, { useEffect, useState } from "react";
import Axios from "axios"
import router from 'next/router'

function LoginSeller() {
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();

  useEffect(()=>{
    localStorage.clear();
  },[])

  const postSignIn = () => {
    if (!username || !password) {
      console.log("กรุณากรอกข้อมูลให้ครบ")
    } else {
      let data = {
        user_name: username,
        pass_word: password,
      };
      Axios({
        method: "post",
        url: "http://localhost:5000/managesignin",
        data: data,
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem("tokenmanage", res.data.token);
          localStorage.setItem("usermanage", JSON.stringify(res.data.savedUser));
          router.push("/shop/homemanage");
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data.error)
        });
    }
  }

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="lg">
        <div className="lg-card">
          <div>
          <h2>Login For Seller</h2>
          <h3>Username</h3>
          <Input type="text" onChange={(e)=>setUsername(e.target.value)}  />
          <h3>Password</h3>
          <Input type="password" onChange={(e)=>setPassword(e.target.value)} />
          <Button onClick={()=>postSignIn()} style={{marginTop:"20px"}} type="primary">เข้าสู่การจัดการ</Button>
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default LoginSeller;
