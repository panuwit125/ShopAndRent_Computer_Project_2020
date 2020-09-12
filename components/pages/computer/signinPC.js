import React from "react";
import { Form, Button, Input } from "antd";
import LoadingComponent from "../../component.loading";
const FormItem = Form.Item;

function SignInPC({
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
        <div className="lg" style={{ background: "#f2f2f2" }}>
          <div className="lg-res-card-pc">
            <div className="lg-res-header-name" style={{ marginBottom: 20 }}>
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
              <Button
                className="lg-res-btn"
                style={{ marginTop: 16 }}
                onClick={() => loginData()}
              >
                LOGIN
              </Button>
              <h2
                className="lg-res-under-btn"
                onClick={() => setMode("register")}
                style={{ textAlign: "center" }}
              >
                Don't have an account.
              </h2>
            </div>
          </div>
        </div>
      </FormItem>
    );
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="lg" style={{ background: "#f2f2f2" }}>
          <div className="lg-res-card-pc">
            <div className="lg-res-header-name" style={{ marginBottom: 20 }}>
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
              <Button
                className="lg-res-btn"
                style={{ marginTop: 16 }}
                onClick={() => postData()}
              >
                REGISTER
              </Button>
              <h2
                className="lg-res-under-btn"
                onClick={() => setMode("login")}
                style={{ textAlign: "center" }}
              >
                Don't have an account.
              </h2>
            </div>
          </div>
        </div>
      </FormItem>
    );
  }

  /*return (
    <FormItem style={{ margin: "0px" }}>
      <LoadingComponent type={"fetchloading"} status={fetchLoading} />
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
  );*/
}

export default SignInPC;
