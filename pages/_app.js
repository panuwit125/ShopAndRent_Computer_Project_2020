import App from "next/app";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import Router from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }) => {
  /*useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);*/

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
