import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { updateNavbarres, updateTypeBland } from "../store/actions/postAction";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs({ loading, bland, page }) {
  const classes = useStyles();
  const [isLoading, setisLoading] = useState(false);
  const { TypeBland, Navbarres } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const menu = (
    <Menu onClick={handleMenuClick} style={{ width: "100%" }}>
      <style jsx>{`
        .ant-btn {
          width: 100% !important;
        }
      `}</style>
      {bland.map((data, index) => {
        return (
          <Menu.Item
            key={index}
            icon={<UserOutlined />}
            onClick={() => {
              dispatch(updateNavbarres(index));
              dispatch(updateTypeBland(data.name_bland));
            }}
            style={{ width: "100%" }}
          >
            {data.name_bland}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  if (page === "Mobile") {
    return (
      <>
        {/*<Dropdown.Button
          style={{ width: "100%" }}
          onClick={handleButtonClick}
          overlay={menu}
          placement="bottomRight"
        >
          {TypeBland}
        </Dropdown.Button>*/}
        <AppBar
          position="static"
          color="default"
          style={{ borderRadius: "20px", width: "235px",zIndex:0,background:"white" }}
        >
          <Tabs
            value={Navbarres}
            //onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            style={{ borderRadius: "20px" }}
          >
            {bland.map((data, index) => {
              return (
                <Tab
                  key={index}
                  label={data.name_bland}
                  onClick={() => {
                    dispatch(updateNavbarres(index));
                  }}
                />
              );
            })}
          </Tabs>
        </AppBar>
      </>
    );
  } else {
    return (
      <AppBar
        position="static"
        color="default"
        style={{ borderRadius: "20px", width: "500px",zIndex:0,background:"white" }}
      >
        <Tabs
          value={Navbarres}
          //onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          style={{ borderRadius: "20px" }}
        >
          {bland.map((data, index) => {
            return (
              <Tab
                key={index}
                label={data.name_bland}
                onClick={() => {
                  dispatch(updateNavbarres(index));
                }}
              />
            );
          })}
        </Tabs>
      </AppBar>
    );
  }
}

/*backup
/*<Paper className={classes.root} style={{ borderRadius: "20px" }}>
        <Tabs
          value={Navbarres}
          indicatorColor="primary"
          textColor="primary"
          centered
          style={{ borderRadius: "20px" }}
        >
          {bland.map((data, index) => {
            return (
              <Tab
                key={index}
                label={data.name_bland}
                onClick={() => {
                  dispatch(updateNavbarres(index));
                }}
              />
            );
          })}
        </Tabs>
        </Paper>*/
