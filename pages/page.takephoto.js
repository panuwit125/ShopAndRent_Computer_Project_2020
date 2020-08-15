import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from "antd";
import Link from "next/link";
import HeaderCovid from "./components/component.headercovid";
import Copyright from "./components/component.footercopyright";
import Snapshot from "./components/component.snapshot";
import { useEffect, useState } from "react";

const FormItem = Form.Item;

function CovidPage2() {
  useEffect(() => {
    localStorage.removeItem("User");
  }, []);
  return (
    <div style={{ marginTop: 0 }}>
      <FormItem>
        <div className="nu-font-covid">
          <div className="nu-flex-column-fs">
            <div>
              <HeaderCovid link={"/page.covid1"} />
            </div>
            <div className="nu-flex-row-bsauto-h100 nu-center-covidss">
              <Snapshot />
            </div>
            <div className="nu-flex-row-bsauto nu-name-covid1">
              <Copyright />
            </div>
          </div>
        </div>
      </FormItem>
    </div>
  );
}

export default CovidPage2;
