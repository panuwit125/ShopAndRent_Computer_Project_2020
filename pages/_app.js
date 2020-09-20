import App from "next/app";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import Router from "next/router";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
