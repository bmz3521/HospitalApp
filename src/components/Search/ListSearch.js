import React from "react";
import 'antd/dist/antd.css';
import { Input,Form,Card } from 'antd';
import './Search.css';
import MyPicture from "../XD/MyPicture.jpg"
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
const Search = Input.Search;
class ListSearch extends React.Component{




    render() {

        return(

             <div>
                 
                 <h2>ผลการค้นหา 'คนบ้า'</h2>
                <div className="form-list">
                <Row>
                <Link to="../ProFile">
                <Col span={8}>
                <a className="form-list-show">
                <img onClick={this.showModal} style={{ height: 130 }}src={MyPicture}/>
              
                </a></Col>
                
                <Col span={8} offset={1}>
                <a to="/register" className="form-list-show-text">
                   นายอนุรักข์ ชักไม่หยุด
                   อายุ : 23 ปี
                </a>
                 
                </Col>
                </Link>
              </Row>
                
                 
                </div>
               
            </div>
         );
    }
}

export default ListSearch ;