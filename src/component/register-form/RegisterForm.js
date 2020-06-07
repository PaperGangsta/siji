import {Form, Input, Button, message} from 'antd';
import {UserOutlined, PhoneOutlined} from '@ant-design/icons';
import React, {Component} from 'react';
import {addActivityApply} from '../../api/activity';
import './style.less';

class RegisterForm extends Component {

  formRef = React.createRef();

  onFinish = async values => {
    values.activityId = this.props.activityId;
    const data = await addActivityApply(values);
    const result = data.data;
    if (result.code === 0) {
      message.success('报名成功');
      this.formRef.current.resetFields();
    } else {
      message.error(result.errMsg || result.data || '异常:报名失败');
    }
  };

  checkPhone = async (rule, value) => {
    if (value === '') {
      throw new Error('请输入您的手机号');
    } else if (!new RegExp('^1(3|4|5|6|7|8|9)[0-9]\\d{8}$').test(value)) {
      throw new Error('手机号格式有误');
    }
  };

  componentWillUnmount() {
    this.formRef.current.resetFields();
  }


  render() {
    return (
      <Form name="normal_login" className="login-form" onFinish={this.onFinish} ref={this.formRef}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: '请输入您的姓名!'
            }
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入您的姓名"/>
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {validator: this.checkPhone}
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon"/>}
            type="text"
            placeholder="请输入您的手机号"
          />
        </Form.Item>

        <div className='register-btn-wrapper'>
          <Button type="primary" htmlType="submit" className="register-btn login-form-button">
            现在报名!
          </Button>
        </div>
      </Form>
    );
  }
};

export default RegisterForm;
