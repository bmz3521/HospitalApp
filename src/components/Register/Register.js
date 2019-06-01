import React from 'react'
import { Form,Input,Tooltip,Icon,Cascader, Select,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Register.css';
import { Radio } from 'antd';
import { Link } from "react-router-dom";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('รหัสผ่านที่คุณป้อนไม่เหมือนกัน!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      
      
      <Form className="lefttexbox" {...formItemLayout} onSubmit={this.handleSubmit}>
      <br/>
        <Form.Item label="อีเมลล์" >
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'อีเมลล์ของคุณมีรูปแบบที่ไม่ถูกต้อง',
              },
              {
                required: true,
                message: 'โปรดกรอกที่อยู่อีเมลล์เท่านั้น',
              },
            ],
          })(<Input placeholder="โปรดกรอกอีเมลล์ของคุณ" />)}
        </Form.Item>
        <Form.Item  label="รหัสผ่าน" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'รหัสผ่านจะเป็นตัวเลขเท่านั้น',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password placeholder="กรอกรหัสผ่าน" />)}
        </Form.Item>
        <Form.Item label="ยันยันรหัสผ่าน" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'กรอกรหัสผ่านอีกครั้งตรงนี้',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password placeholder="กรอกรหัสผ่านอีกครั้งตรงนี้" onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        
        <Form.Item 
          label={
            <span >
              ชื่อ-นามสกุล&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname',  {
            rules: [{ required: true, message: 'โปรดกรอกชื่อและนามสกุลจริง', whitespace: true }],
          })(<Input placeholder="โปรดกรอกชื่อและนามสกุลในช่องนี้" />)}
        </Form.Item>
       
        <Form.Item label="เบอร์โทรศัพท์">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'กรอกข้อมูลที่เป็นตัวเลขเท่านั้น' }],
          })(<Input placeholder="099-989-" style={{ width: '100%' }} />)}
        </Form.Item>

        <Form.Item 
        label={
          <span >
            อายุ&nbsp;
            <Tooltip title="กรอกอายุปัจจุบันของคุณ">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator('Age',  {
          rules: [{ required: true, message: 'โปรดกรอกอายุเป็นตัวเลข', whitespace: true }],
        })(<Input placeholder="โปรดกรอกอายุของคุณในช่องนี้" />)}
      </Form.Item>

        <Form.Item 
        label={
          <span >
            น้ำหนัก&nbsp;
            <Tooltip title="กรอกน้ำหนักปัจจุบันของคุณ">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator('weight',  {
          rules: [{ required: true, message: 'โปรดกรอกน้ำหนักเป็นตัวเลข', whitespace: true }],
        })(<Input placeholder="โปรดกรอกน้ำหนักของคุณในช่องนี้" />)}
      </Form.Item>
       
      <Form.Item 
        label={
          <span >
            ส่วนสูง&nbsp;
            <Tooltip title="กรอกส่วนสูงปัจจุบันของคุณ">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator('heigh',  {
          rules: [{ required: true, message: 'โปรดกรอกส่วนสูงเป็นตัวเลข', whitespace: true }],
        })(<Input placeholder="โปรดกรอกส่วนสูงของคุณในช่องนี้" />)}
      </Form.Item>
      <Form.Item label="โปรดระบุเพศของคุณ" >
      
      <RadioGroup  defaultValue="a" size="large">
      <RadioButton value="a">ชาย</RadioButton>
      <RadioButton value="b">หญิง</RadioButton>
      </RadioGroup>
          </Form.Item>
        {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item> */}
        
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              คลิกเพื่อ <a href="/ProFile">ยอมรับ</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
         <Link to="/ProFile">
          <Button type="primary" htmlType="submit" className="register-form-login">
          
            ลงทะเบียน
          </Button>
         </Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);



export default WrappedRegistrationForm;