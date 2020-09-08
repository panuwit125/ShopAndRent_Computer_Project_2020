import { useState , useEffect } from "react";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";
import { List, Typography, Divider, Form, Tag } from "antd";
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Router from "next/router";

const FormItem = Form;
const { TabPane } = Tabs;

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const ShowProduct = () => {
  const [show, setShow] = useState(0);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);

  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage"))
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
      setisLoading(true);
    } else {
      router.push("/shop/loginSeller");
    }
  }, []);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="mg-container">
          <NavbarManage setShow={setShow} show={show} />
          <div className="mg-navbar">
            <HeaderManage setShow={setShow} user={user} />
          </div>
          <div className="mg-body" style={{ paddingTop: 0 }}>
            <Paper square style={{ marginBottom: 10 }}>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="สินค้าขาย" />
                <Tab label="สินค้าเช่า" />
              </Tabs>
            </Paper>
            {value === 0 ? (
              <List
                header={<div>รายการสินค้าสำหรับขาย</div>}
                bordered
                dataSource={data}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 7,
                }}
                renderItem={(item) => (
                  <List.Item>
                    <Tag color="success" >
                      Update
                    </Tag>
                    <Tag color="error">Delete</Tag> {item}
                  </List.Item>
                )}
              />
            ) : (
              <List
                header={<div>รายการสินค้าสำหรับเช่า</div>}
                bordered
                dataSource={data}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 7,
                }}
                renderItem={(item) => (
                  <List.Item>
                    <Tag color="success">
                      Update
                    </Tag>
                    <Tag color="error">Delete</Tag> {item}
                  </List.Item>
                )}
              />
            )}
          </div>
        </div>
      </FormItem>
    );
  }
};

export default ShowProduct;
