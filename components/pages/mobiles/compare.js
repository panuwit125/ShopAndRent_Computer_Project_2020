import React from "react";
import NavbarSide from "../../Navbar";
import { Form } from "antd";
import HeaderNavbar from "../../HeaderNavbar";

const FormItem = Form;

function CompareMobile({
  showNavbar,
  setShowNavbar,
  checkLogin,
  user,
  setCheckListShow,
  setisLoading,
  product,
  type,
  userId,
  checkListShow,
  ShowTableCompare
}) {
  return (
    <FormItem style={{ margin: "0px" }}>
      {type === "Rent" && checkLogin ? (
        <ShowListRentComponent
          check={checkListShow}
          user={userId}
          click={setCheckListShow}
        />
      ) : null}
      <NavbarSide
        show={showNavbar}
        setshow={setShowNavbar}
        status={checkLogin}
        user={user}
        type={type}
        click={setCheckListShow}
      />
      <div className="sp">
        <HeaderNavbar page={"Shop"} setshow={setShowNavbar} />
        <div className="des-res-body">
          <ShowTableCompare />
        </div>
      </div>
    </FormItem>
  );
}

export default CompareMobile;
