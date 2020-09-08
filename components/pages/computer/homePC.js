import React from 'react'
import HeaderNavbar from "../../HeaderNavbar";
import { Form } from "antd";
const FormItem = Form.Item;
import img1 from '../../../public/BUY.gif'
import img2 from '../../../public/RENT.jpg'

function HomePC(props) {
    return (
        <FormItem style={{ margin: "0px" }}>
          <div className="br">
            <HeaderNavbar page={"Home"} />
            <div className="br-body" style={{height:"auto"}}>
              <div className="card-res-home">
                <img src={img1} className="img-pc" onClick={()=>props.nextpage("Shop")} />
              </div>
              <div className="card-res-home" >
                <img src={img2} className="img-pc" onClick={()=>props.nextpage("Rent")} />
              </div>
            </div>
          </div>
        </FormItem>
    )
}

export default HomePC
