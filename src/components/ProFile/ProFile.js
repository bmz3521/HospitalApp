import React from "react";
import { Avatar, Form, AutoComplete } from "antd";
import MyPicture from "../XD/MyPicture.jpg";
import { Card, Upload, Icon, Modal, Button } from "antd";

const { Meta } = Card;
class ProFile extends React.Component {
  state = {
    visible: false,
    previewImage: "",
    previewVisible: false
  };

  handlePreview = file => {
    this.setState({
      previewImage: MyPicture,
      previewVisible: true,
      checkData: true
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="App-header">
        <p />
        <a className="PicturePro">
          <img
            onClick={this.showModal}
            style={{ height: 150 }}
            src={MyPicture}
          />
          <Modal
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <img style={{ width: "100%" }} src={MyPicture} />
          </Modal>
        </a>
        <br />
        <h3>ไมลวย ควยโต</h3>
        <Form className="App">
          <Card style={{ width: 350 }}>
            <p>เบอร์โทร 0999999999</p>
            <p>อายุ 2000 ปี</p>
            <p>น้ำหนัก 600 กิโลกรัม</p>
            <p>ส่วนสูง 100 เซ็นติเมตร</p>
          </Card>
          <br />
          <br />
          <Button htmlType="submit" className="login-form-button">
            แก้ไข
          </Button>
        </Form>
      </div>
    );
  }
}
export default ProFile;
