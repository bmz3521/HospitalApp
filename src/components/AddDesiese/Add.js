import React from "react"
import { Row, Col,Button } from 'antd';
import { Link } from "react-router-dom";
import "./Add.css";
class AddDesiese extends React.Component{




  render() {

      return(

           <div className="body-style" >
           <br/>
           <h1 className="header-style">จงเลือกอาการของคนไข้</h1>
          <br/>
          <Button htmlType="submit" className="button-style" >เยื่อบุช่องปากอักเสบ</Button>
          <br/>
          <br/>
          <Button htmlType="submit" className="button-style" >ปากแห้งน้ำลายแห้ง</Button>
          <br/>
          <br/>
          <Button htmlType="submit" className="button-style" >ความยากลำบากในการเคี้ยว</Button>
          <br/>
          <br/>
          <Button htmlType="submit" className="button-style" >กลืนเจ็บ/กลืนลำบาก</Button>
          <br/>
          <br/>
          <Button htmlType="submit" className="button-style" >ภาพรวมของอาการ</Button>
          </div>
       );
  }
}

export default AddDesiese ;
