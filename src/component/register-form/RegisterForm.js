import {Form, Input, Button} from 'antd';
import {UserOutlined, PhoneOutlined } from '@ant-design/icons';
import React from 'react';
import './style.less'

const RegisterForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const checkPhone = async (rule, value, callback) => {
    if (value === '') {
     await callback('请输入您的手机号')
    } else if (!new RegExp('^1(3|4|5|6|7|8|9)[0-9]\\d{8}$').test(value)) {
      await callback('手机号格式有误')
    } else {
      await callback()
    }
  };

  return (
    <Form name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!'
          }
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入您的姓名"/>
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {validator:checkPhone}
        ]}
      >
        <Input
          prefix={<PhoneOutlined  className="site-form-item-icon"/>}
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
};

export default RegisterForm;
