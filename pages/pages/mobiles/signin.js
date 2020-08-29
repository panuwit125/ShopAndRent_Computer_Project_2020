import React from "react";
import { Form, Button, Input } from "antd";
const FormItem = Form.Item;

function SignInMobile({
  fetchLoading,
  setName,
  setPassword,
  setFirstname,
  setLastname,
  setNameLogin,
  setPasswordLogin,
  loginData,
  name,
  password,
  firstname,
  lastname,
  namelogin,
  passwordlogin,
  postData,
}) {
  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="lg-res-card">
        <div className="lg-res-header-name">
          <h2 className="lg-res-name">SECONDHAND</h2>
          <h2 className="lg-res-name">NOTEBOOK</h2>
        </div>
        <div className="lg-res-ip">
          <Input value={namelogin} placeholder="Username" className="lg-res-input" onChange={(e)=>setNameLogin(e.target.value)} />
          <Input value={passwordlogin} type="password" placeholder="Password" className="lg-res-input lg-res-ip-mg" onChange={(e)=>setPasswordLogin(e.target.value)} />
        </div>
        <div className="lg-res-footer-btn">
          <Button className="lg-res-btn" onClick={()=>loginData()}>LOGIN</Button>
          <h2 className="lg-res-under-btn">Don't have an account.</h2>
        </div>
      </div>
    </FormItem>
  );
}

export default SignInMobile;
