import React, { useEffect,useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import router from "next/router";
import { updateNavbar, updateTypeBland } from "../../store/actions/postAction";
import { useSelector, useDispatch } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;

function NavbarComponent(props) {
  const dispatch = useDispatch();
  const { Navbar } = useSelector((state) => state.post);
  const [isLoading, setisLoading] = useState(false);
  const ClickMenu = (link, number, bland) => {
    dispatch(updateNavbar(number));
    dispatch(updateTypeBland(bland));
    router.push(link);
    return null;
  };
  useEffect(()=>{
    if(props){
      setisLoading(true)
    }
  },[])

  if (!isLoading) {
    return null;
  } else {
      if (props.page === "description") {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            {props.status ? (
              <Menu.Item key="1" icon={<UserOutlined />}>
                ID : {props.user}
              </Menu.Item>
            ) : (
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => {
                  router.push("/page.login");
                }}
              >
                SignIn
              </Menu.Item>
            )}
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              onClick={() => ClickMenu("/page.shop", 2, "ACER")}
            >
              Acer
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<UploadOutlined />}
              onClick={() => ClickMenu("/page.shop", 3, "DELL")}
            >
              Dell
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UserOutlined />}
              onClick={() => ClickMenu("/page.shop", 4, "LENOVO")}
            >
              Lenovo
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  } else if (props.page === "Manage") {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["" + Navbar + ""]}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              ID :
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              onClick={() => {
                //
              }}
            >
              เพิ่มสินค้า
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<UploadOutlined />}
              onClick={() => {
                //
              }}
            >
              แก้ไขสินค้า
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UserOutlined />}
              onClick={() => {
                //
              }}
            >
              ออกจากระบบ
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  } else if (props.page === "Shop") {
    console.log(props.status);
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["" + Navbar + ""]}
          >
            {props.status ? (
                <Menu.Item key="1" icon={<UserOutlined />}>
                  ID : {props.user}
                </Menu.Item>
            ) : (
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => {
                  router.push("/page.login");
                }}
              >
                SignIn
              </Menu.Item>
            )}
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              onClick={() => {
                dispatch(updateTypeBland("ACER"));
                dispatch(updateNavbar("2"));
                props.loading(false);
              }}
            >
              Acer
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<UploadOutlined />}
              onClick={() => {
                dispatch(updateTypeBland("DELL"));
                dispatch(updateNavbar("3"));
                props.loading(false);
              }}
            >
              Dell
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UserOutlined />}
              onClick={() => {
                dispatch(updateTypeBland("LENOVO"));
                dispatch(updateNavbar("4"));
                props.loading(false);
              }}
            >
              Lenovo
            </Menu.Item>
            {props.status ? (
                <Menu.Item key="5" icon={<UserOutlined />} onClick={()=>{router.push('/page.payment')}} >
                  ไปที่ตระกร้า
                </Menu.Item>
            ) : (
              null
            )}
            {props.status ? (
                <Menu.Item key="6" icon={<UserOutlined />} onClick={()=>{router.push('/page.home')}} >
                  ออกจากระบบ
                </Menu.Item>
            ) : (
              null
            )}
          </Menu>
        </Sider>
      </Layout>
    );
  }
  }

}

export default NavbarComponent;
