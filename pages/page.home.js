import { Form, Button } from "antd";
const FormItem = Form.Item;
import React, { useEffect, useState } from "react";
import router from "next/router";
import Header from "./components/component.header";
import axios from "axios";
import LoadingComponent from "./components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeaderNavbar from "./components/HeaderNavbar";

function home() {
  const [isLoading, setisLoading] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");
  const nexthandle = (type) => {
    localStorage.setItem("type", type);
    router.push("/page.shop");
    return null;
  };
  useEffect(() => {
    console.log(matches);
  }, [matches]);
  useEffect(() => {
    localStorage.clear();
    axios
      .get("https://tranquil-beach-43094.herokuapp.com/")
      .then((res) => {
        console.log("Success", res);
        setisLoading(true);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  if (!isLoading) {
    return <LoadingComponent type={"pageloading"} status={true} />;
  } else {
    if (matches) {
      return (
        <FormItem style={{ margin: "0px" }}>
          <div className="br">
            <HeaderNavbar page={"Home"} />
            <div className="br-body">
              <div className="card-res-home">
                <Button
                  className="btn-res-home"
                  onClick={() => nexthandle("Shop")}
                >
                  FOR BUY
                </Button>
              </div>
              <div className="card-res-home">
                <Button
                  className="btn-res-home"
                  onClick={() => nexthandle("Rent")}
                >
                  FOR RENT
                </Button>
              </div>
            </div>
          </div>
        </FormItem>
      );
    } else {
      return (
        <FormItem style={{ margin: "0px" }}>
          <div className="br">
            <HeaderNavbar page={"Home"} />
            <div className="br-body-res">
              <div className="card-res-home">
                <Button
                  className="btn-res-home"
                  onClick={() => nexthandle("Shop")}
                >
                  FOR BUY
                </Button>
              </div>
              <div className="card-res-home">
                <Button
                  className="btn-res-home"
                  onClick={() => nexthandle("Rent")}
                >
                  FOR RENT
                </Button>
              </div>
            </div>
          </div>
        </FormItem>
      );
    }
  }
}

export default home;
