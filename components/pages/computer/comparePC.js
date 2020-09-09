import React from "react";
import ShowListRentComponent from "../../component.listRentItem";
import Navbar from "../../componentspc/NavbarPc";
import CardProduct from "../../component.cardproduct";
import CompareSelectComponent from "../../component.CompareSelect";
import Tabs from "../../Tabs";
import { Form } from "antd";
const FormItem = Form.Item;

function comparePC({
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
  productAll,
  setSelectCompare,
  selectCompare,
  compareSelectShow,
  setCompareSelectShow,
  SelectProduct
}) {
  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="shop-res-container">
        <CompareSelectComponent
          compareSelectShow={compareSelectShow}
          setCompareSelectShow={setCompareSelectShow}
          productAll={productAll}
          setSelectCompare={setSelectCompare}
          SelectProduct={SelectProduct}
        />
        <Navbar
          status={checkLogin}
          user={user}
          type={type}
          click={setCheckListShow}
          setshow={setShowNavbar}
          status={checkLogin}
        />
        <div className="shop-res-body">
          <div className="shop-res-body-header">
            <div className="shop-res-card-type">{type}</div>
            <div className="shop-res-card-type" style={{ width: "100%" }}>
              Compare Notebook Spec
            </div>
          </div>
          <div className="shop-res-body-body">
            <ShowTableCompare />
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default comparePC;
