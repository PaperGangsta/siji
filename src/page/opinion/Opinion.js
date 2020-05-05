import React, {Component} from 'react';
import QuestionImg from '../../assets/img/siji_question.jpg';
import {Rate, Form, Button, Input} from 'antd';
import './style.less';

// const pageTitle = {
//   icon: '\ue63b',
//   title: '意见箱'
// };

const {TextArea} = Input;

class Opinion extends Component {

  onFinish = value => {
    console.log(value);
  };

  render() {
    return (
      <div className='opinion-wrapper'>
        <div className='opinion-container'>
          <div className='opinion-img'>
            <img src={QuestionImg} alt='问卷调查'/>
          </div>
          <div className='opinion-card'>
            <div className='t-opinion-card'>
              <span className='t-opinion-card-item'>四季惠享,会做更好！</span>
            </div>
            <div className='opinion-card-form'>
              <Form
                onFinish={this.onFinish}
                initialValues={{rate: 4.5}}
              >
                <Form.Item
                  name='assess'
                >
                  <TextArea
                    onChange={this.onChange}
                    placeholder="欢迎您留下宝贵建议及意见,我们会认真听取您的想法,努力改进,变得更好!"
                    autoSize={{minRows: 6, maxRows: 10}}
                  />
                </Form.Item>
                <div className='rate-wrapper'>
                  <div className='opinion-rate'>服务评价:</div>
                  <Form.Item name="rate">
                    <Rate/>
                  </Form.Item>
                </div>

                <Form.Item>
                  <Button className='opinion-btn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Opinion;
