import React from "react";
import 'antd/dist/antd.css';
import { Input,Form,Card } from 'antd';
import './Search.css';
import ListSearch from "../Search/ListSearch"
import ListSearchb from "./ListSearchbenz";

const Search = Input.Search;
class SearchCom extends React.Component{




    render() {

        return(

             <div>
                   <br/> 
                  <h1 className="header-style">พิมพ์ชื่อคนไข้หรือข้อมูลเบื้องต้น</h1>
                 <br/> 
                    <Search
                        placeholder="ค้นหาด้วย ชื่อ,อายุ,นามสกุล"
                         onSearch={value => console.log(value)}
                         style={{ width: 250 }}
            
                      />
                      <p/>
               
                <ListSearch />
                <ListSearchb/>
            
               
            </div>
         );
    }
}

export default SearchCom ;
