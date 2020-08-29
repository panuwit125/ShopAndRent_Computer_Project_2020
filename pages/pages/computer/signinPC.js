import React from "react";
import { Form, Button, Input } from "antd";
import LoadingComponent from "../../components/component.loading";
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
  postData
}) {
  return (
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
  );
}

export default SignInPC;
