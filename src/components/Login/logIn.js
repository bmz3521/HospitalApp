import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./logIn.css";
import { Form, Icon, Input, Button, Checkbox, Alert, Card } from "antd";
import Letter from "../XD/Letter.svg";
import Lock from "../XD/Lock.svg";

import Keed from "../XD/Keed.svg";
import Line1 from "../XD/Line1.svg";
import HeadLogo from "../XD/HeadLogo.svg";
import { Link } from "react-router-dom";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    console.log("this.props.location.pathname ", this.props.location.pathname);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-form">
        <img
          src={HeadLogo}
          style={{
            width: 270,
            height: 150
          }}
        />
        <br />
        <img
          src={Keed}
          style={{
            width: 200,
            height: 50
          }}
        />
        <br />
        <br />

        <Form>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Please input your username!"
                }
              ]
            })(
              <Input
                prefix={
                  <img
                    src={Letter}
                    style={{
                      width: 15,
                      height: 15
                    }}
                  />
                }
                type="user"
                name="username"
                placeholder="ชื่อบัญชีของคุณ"
              />
            )}
            <p />
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ]
            })(
              <Input
                prefix={
                  <img
                    src={Lock}
                    style={{
                      width: 15,
                      height: 15
                    }}
                  />
                }
                type="password"
                name="password"
                placeholder="รหัสผ่านของคุณ"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox className="checkbox-po"> จำรหัสผ่านไว้ </Checkbox>)}
            <a className="login-form-forgot" href="">
              ลืมรหัสผ่าน
            </a>
            <Button htmlType="submit" className="login-form-button">
              เข้าสู่ระบบ
            </Button>
            <br />
            <br />

            <a href="">
              <img class src={Line1} style={{ width: 40, height: 2 }} />
              <Link to="/register">สร้างบัญชีของคุณ</Link>
            </a>
            <img class src={Line1} style={{ width: 40, height: 2 }} />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const LogIn = Form.create({
  name: "normal_login"
})(NormalLoginForm);

export default LogIn;
