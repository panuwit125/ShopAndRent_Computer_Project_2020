import React from 'react'
import HeaderNavbar from "../../components/HeaderNavbar";
import { Form, Button } from "antd";
const FormItem = Form.Item;

function HomePC() {
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
    )
}

export default HomePC
