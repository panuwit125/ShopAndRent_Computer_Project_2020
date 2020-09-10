import React from "react";
import NavbarSide from "../../Navbar";
import { Form } from "antd";
import HeaderNavbar from "../../HeaderNavbar";
import CompareSelectComponent from "../../component.CompareSelect";

const FormItem = Form.Item;

function CompareMobile({
  showNavbar,
  setShowNavbar,
  checkLogin,
  user,
  setCheckListShow,
  setisLoading,
  product1,
  type,
  userId,
  checkListShow,
  ShowTableCompare,
  compareSelectShow,
  setCompareSelectShow,
  productAll,
  setSelectCompare,
  selectCompare,
  SelectProduct
}) {
  return (
    <FormItem style={{ margin: "0px" }}>
      <CompareSelectComponent
        compareSelectShow={compareSelectShow}
        setCompareSelectShow={setCompareSelectShow}
        productAll={productAll}
        setSelectCompare={setSelectCompare}
        SelectProduct={SelectProduct}
      />
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
        <div className="des-res-body" style={{ padding: "10px" }}>
          <ShowTableCompare />
        </div>
      </div>
    </FormItem>
  );
}

export default CompareMobile;
