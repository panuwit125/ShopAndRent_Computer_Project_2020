import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "./components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import router from 'next/router'

//import page -> start
import HomeMobile from "./pages/mobiles/home";
import HomePC from "./pages/computer/homePC";
//import page -> end

function home() {
  const [isLoading, setisLoading] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");

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

  const nexthandle = (type) => {
    localStorage.setItem("type", type);
    router.push("/page.shop");
    return null;
  };

  if (!isLoading) {
    return <LoadingComponent type={"pageloading"} status={true} />;
  } else {
    if (matches) {
      return <HomePC nextpage={nexthandle} />;
    } else {
      return <HomeMobile nextpage={nexthandle} />;
    }
  }
}

export default home;
