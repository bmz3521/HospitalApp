import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "./FormAdd.css";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {
  Menu,
  Dropdown,
  Icon,
  message,
  Comment,
  Avatar,
  Form,
  List,
  Input
} from "antd";
import { Select } from "antd";
import moment from "moment";

const { TextArea } = Input;
const onClick = ({ key }) => {
  message.info(`คุณเลือก ${key}`);
};


const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${
      comments.length > 1 ? "ข้อมูลเข้ามา" : "ข้อมูลเข้ามา"
    }`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div className="btn-align">
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        เพิ่มอาการ
      </Button>
    </Form.Item>
  </div>
);
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

//////////////////////////////////////////////////////
class FormAdd extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: ""
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "ไมโล โชว์ควย",
            avatar:
              "https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/60046430_2712595292115184_2754002376737161216_n.jpg?_nc_cat=100&_nc_oc=AQkrjMoCtKf3OIBlX5odJk36R7eRm1UVLlp3edop3oWb_8g75U37vDlg0q063fzA1yI&_nc_ht=scontent.fbkk8-3.fna&oh=a59d999729f6d8228987c6ed6c8f6ff2&oe=5D5A8B4A",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        <div>
          <p />
          <h1 className="header-style">บันทึกอาการของคุณในวันนี้</h1>
          <br />
          <Col span={24} xs={24} sm={24} md={24} lg={24} xl={10}>
            <h3 className="header-D">ความรุนแรงของอาการ</h3>
          </Col>
          <div>
            <p />
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="เลือกระดับความรุนแรง"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="normal">ระดับปกติ</Option>
              <Option value="very">ระดับมาก</Option>
              <Option value="danger">ระดับรุนแรง</Option>
            </Select>
          </div>
          <br />
          <br />
          <Col span={24} xs={24} sm={24} md={24} lg={24} xl={10}>
            <h3 className="header-D">เมื่อจัดการตนเองแล้วเป็นอย่างไร</h3>
          </Col>
          <div >
            <p />
            <Select

              showSearch
              style={{ width: 200 }}
              placeholder="เลือกระดับอาการ"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="bad">อาการแย่ลง</Option>
              <Option value="better">อาการดีขึ้น</Option>
              <Option value="same">อาการคงเดิม</Option>
            </Select>
          </div>

          <br />
          <Col span={24} xs={24} sm={24} md={24} lg={24} xl={10}>
            <div>
              {comments.length > 0 && <CommentList comments={comments} />}
              <Comment
                avatar={
                  <Avatar
                    src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/60046430_2712595292115184_2754002376737161216_n.jpg?_nc_cat=100&_nc_oc=AQkrjMoCtKf3OIBlX5odJk36R7eRm1UVLlp3edop3oWb_8g75U37vDlg0q063fzA1yI&_nc_ht=scontent.fbkk8-3.fna&oh=a59d999729f6d8228987c6ed6c8f6ff2&oe=5D5A8B4A"
                    alt="Han Solo"
                  />
                }
                content={
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                }
              />
            </div>
          </Col>
        </div>
        <Link to="/ProFile">
          <Button htmlType="submit" className="login-form-button">
            บันทึกข้อมูล
          </Button>
        </Link>
      </div>
    );
  }
}

export default FormAdd;
