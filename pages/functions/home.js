import router from "next/router";

export const nexthandle = (type) => {
    localStorage.setItem("type", type);
    router.push("/page.shop");
    return null;
  };