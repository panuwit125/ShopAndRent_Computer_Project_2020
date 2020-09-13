import { useState, useEffect } from "react";
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
import router from "next/router";
import Axios from "axios";

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
  const [productShop, setProductShop] = useState();
  const [productRent, setProductRent] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage"))
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
      console.log(JSON.parse(localStorage.getItem("usermanage")));
      postDataProduct(JSON.parse(localStorage.getItem("usermanage")));
    } else {
      router.push("/shop/loginSeller");
    }
  }, []);

  const postDataProduct = (user) => {
    let body = { owner_product: user };
    Axios.post("https://tranquil-beach-43094.herokuapp.com/showproductbyuser", body)
      .then((response) => {
        console.log(response);
        setProductShop(response.data);
        postDataProductRent(user);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const postDataProductRent = (user) => {
    let body = { owner_product: user };
    Axios.post("https://tranquil-beach-43094.herokuapp.com/showproductrentbyuser", body)
      .then((response) => {
        console.log(response);
        setProductRent(response.data);
        setisLoading(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const deleteProduct = (id, type) => {
    console.log(id);
    let data = { _id: id };
    if (type === "Shop") {
      Axios({
        method: "delete",
        url: "https://tranquil-beach-43094.herokuapp.com/deleteproduct",
        headers: { Authorization: `Bearer ${token}` },
        data,
      })
        .then((response) => {
          console.log(response);
          location.reload();
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else if (type === "Rent") {
      Axios({
        method: "delete",
        url: "https://tranquil-beach-43094.herokuapp.com/deleteproductrent",
        headers: { Authorization: `Bearer ${token}` },
        data,
      })
        .then((response) => {
          console.log(response);
          location.reload();
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    if (productRent || productShop) {
      console.log(productShop);
      console.log(productRent);
    }
  }, [productRent, productShop]);

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
          <div
            className="mg-body"
            style={{
              paddingTop: 0,
              flexWrap: "nowrap",
              flexDirection: "column",
            }}
          >
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
                dataSource={productShop}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 7,
                }}
                renderItem={(item) => (
                  <List.Item>
                    <Tag
                      color="success"
                      onClick={() => {
                        localStorage.setItem("typeUpdate", "Shop");
                        router.push(`/shop/updateproduct?id=${item._id}`);
                      }}
                    >
                      Update
                    </Tag>
                    <Tag
                      color="error"
                      onClick={() => {
                        deleteProduct(item._id, "Shop");
                      }}
                    >
                      Delete
                    </Tag>{" "}
                    {item.name_product}
                  </List.Item>
                )}
              />
            ) : (
              <List
                header={<div>รายการสินค้าสำหรับเช่า</div>}
                bordered
                dataSource={productRent}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 7,
                }}
                renderItem={(item) => (
                  <List.Item>
                    <Tag
                      color="success"
                      onClick={() => {
                        localStorage.setItem("typeUpdate", "Rent");
                        router.push(`/shop/updateproduct?id=${item._id}`);
                      }}
                    >
                      Update
                    </Tag>
                    <Tag
                      color="error"
                      onClick={() => {
                        deleteProduct(item._id, "Rent");
                      }}
                    >
                      Delete
                    </Tag>{" "}
                    {item.name_product}
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
