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
  mode,
  setMode,
}) {
  if (mode === "login") {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="lg-res-card">
          <div className="lg-res-header-name">
            <h2 className="lg-res-name">SECONDHAND</h2>
            <h2 className="lg-res-name">NOTEBOOK</h2>
          </div>
          <div className="lg-res-ip">
            <Input
              value={namelogin}
              placeholder="Username"
              className="lg-res-input"
              onChange={(e) => setNameLogin(e.target.value)}
            />
            <Input
              value={passwordlogin}
              type="password"
              placeholder="Password"
              className="lg-res-input lg-res-ip-mg"
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
          </div>
          <div className="lg-res-footer-btn">
            <Button className="lg-res-btn" onClick={() => loginData()}>
              LOGIN
            </Button>
            <h2
              className="lg-res-under-btn"
              onClick={() => setMode("register")}
            >
              Don't have an account.
            </h2>
          </div>
        </div>
      </FormItem>
    );
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="lg-res-card">
          <div className="lg-res-header-name">
            <h2 className="lg-res-name">SECONDHAND</h2>
            <h2 className="lg-res-name">NOTEBOOK</h2>
          </div>
          <div className="lg-res-ip">
            <Input
              value={name}
              placeholder="Username"
              className="lg-res-input"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              value={password}
              type="password"
              placeholder="Password"
              className="lg-res-input lg-res-ip-mg"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              value={firstname}
              type="text"
              placeholder="FirstName"
              className="lg-res-input lg-res-ip-mg"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Input
              value={lastname}
              type="text"
              placeholder="LastName"
              className="lg-res-input lg-res-ip-mg"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="lg-res-footer-btn">
            <Button className="lg-res-btn" onClick={() => postData()}>
              REGISTER
            </Button>
            <h2
              className="lg-res-under-btn"
              onClick={() => setMode("login")}
            >
              Back to login.
            </h2>
          </div>
        </div>
      </FormItem>
    );
  }
}

export default SignInMobile;
