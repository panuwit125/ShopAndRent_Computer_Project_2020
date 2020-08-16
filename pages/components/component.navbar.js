import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import router from 'next/router'

const { Header, Content, Footer, Sider } = Layout;

function NavbarComponent(props) {


  if(props.page === "description") {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>{router.push('/page.login')}} >
              SignIn
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={()=>{router.push('/page.shop')}}  >
              Acer
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={()=>{router.push('/page.shop')}} >
              Dell
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />} onClick={()=>{router.push('/page.shop')}} >
              Lenovo
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
  );
  } else {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>{router.push('/page.login')}} >
              SignIn
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={()=>{props.setname("ACER")}}  >
              Acer
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={()=>{props.setname("DELL")}} >
              Dell
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />} onClick={()=>{props.setname("LENOVO")}} >
              Lenovo
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
  ); 
  }
  
}

export default NavbarComponent;
