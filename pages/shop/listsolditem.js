import { useState, useEffect } from "react";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";
import UpdateTrack from "./componentManage/UpdateTrack";
import UpdateStatusRent from "./componentManage/UpdateStatusRent";
import { List, Typography, Divider, Form, Tag, Popconfirm } from "antd";
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

const ListSoldItem = () => {
  const [show, setShow] = useState(0);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [productShop, setProductShop] = useState();
  const [productRent, setProductRent] = useState();

  const [checkUpdate, setCheckUpdate] = useState("none");

  const [trackid, setTrackid] = useState();
  const [trackNumber, setTrackNumber] = useState("");

  const [checkStatus , setCheckStatus] = useState("none")

  useEffect(() => {
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage"))
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
      getDataSoldItem(localStorage.getItem("tokenmanage"));
    } else {
      router.push("/shop/loginSeller");
    }
  }, []);

  const getDataSoldItem = (token) => {
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/showsolditemseller",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response);
        setProductShop(response.data.data);
        getDataSoldRentItem(token);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getDataSoldRentItem = (token) => {
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/showitemlistrentseller",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response);
        setProductRent(response.data.data);
        setisLoading(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

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
          <NavbarManage
            setShow={setShow}
            show={show}
            token={token}
            trackid={trackid}
          />
          <UpdateTrack
            check={checkUpdate}
            click={setCheckUpdate}
            trackNumber={trackNumber}
            setTrackNumber={setTrackNumber}
            trackid={trackid}
            setTrackid={setTrackid}
            token={token}
            value={value}
          />
          {value === 1 ? (
            <UpdateStatusRent
              check={checkStatus}
              click={setCheckStatus}
              trackid={trackid}
              setTrackid={setTrackid}
              token={token}
              value={value}
            />
          ) : null}
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
                    {item.track_product ? (
                      <Tag
                        color="success"
                        onClick={() => {
                          setTrackid(item._id);
                          setTrackNumber(item.track_product);
                          setCheckUpdate("block");
                        }}
                        style={{cursor:"pointer"}}
                      >
                        อัพเดท TrackEms แล้ว
                      </Tag>
                    ) : (
                      <Tag
                        color="blue"
                        onClick={() => {
                          setTrackid(item._id);
                          setTrackNumber("");
                          setCheckUpdate("block");
                        }}
                        style={{cursor:"pointer"}}
                      >
                        ยังไม่มี TrackEms
                      </Tag>
                    )}
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
                    {item.track_product ? (
                      <Tag
                        color="success"
                        onClick={() => {
                          setTrackid(item._id);
                          setTrackNumber(item.track_product);
                          setCheckUpdate("block");
                        }}
                        style={{cursor:"pointer"}}
                      >
                        อัพเดท TrackEms แล้ว
                      </Tag>
                    ) : (
                      <Tag
                        color="blue"
                        onClick={() => {
                          setTrackid(item._id);
                          setTrackNumber("");
                          setCheckUpdate("block");
                        }}
                        style={{cursor:"pointer"}}
                      >
                        ยังไม่มี TrackEms
                      </Tag>
                    )}
                    {item.status_rent ? (
                      <Tag
                        color="success"
                      >
                        พร้อมให้เช่าอยู่
                      </Tag>
                    ) : (
                      <Tag
                        color="volcano"
                        onClick={() => {
                          setTrackid(item._id);
                          setCheckStatus("block");
                        }}
                        style={{cursor:"pointer"}}
                      >
                        ถูกเช่าอยู่
                      </Tag>
                    )}{" "}
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

export default ListSoldItem;
