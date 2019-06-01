import React from "react";
import 'antd/dist/antd.css';
import { Input,Form,Card } from 'antd';
import './Search.css';
import MrBenz from "../XD/MrBenz.JPG"
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
const Search = Input.Search;
class ListSearchb extends React.Component{




    render() {

        return(

             <div>
                 <p/>
                      <p/>
                <div className="form-list">
                <Row>
                <Col span={8}>
                <a className="form-list-show">
                <img onClick={this.showModal} style={{ height: 130 }}src={MrBenz}/>
              
                </a></Col>
                <Col span={8} offset={1}>
                <a className="form-list-show-text">
                   นายชญาณิน กินประทัด
                   อายุสมอง : 2 ขวบ
                </a>
                </Col>
              </Row>
                
                 
                </div>
               
            </div>
         );
    }
}

export default ListSearchb ;