import React, {Component} from 'react';
import './style.less';
import Card from '../../component/card/Card';
import PageTitle from '../../component/page-title/PageTitle';
import {getNewActivity} from '../../api/activity';
import {message, Spin, Result, Button} from 'antd';
import {NavLink} from 'react-router-dom';

const pageTitle = {
  icon: '\ue64d',
  title: '精彩活动'
};
const activity = 'activity';

class Activity extends Component {

  state = {
    activityList: [],
    loading: false,
    content: ''
  };

  getActivity = async () => {
    this.setState({
      loading: true
    });
    const data = await getNewActivity();
    const result = data.data;
    this.setState({
      loading: false
    });
    if (result.code === 0) {
      if (result.data.length === 0) {
        this.setState({
          content: <Result
            status="404"
            title="暂无数据"
            subTitle="目前没有新的活动啦,去回顾下历史的精彩活动吧！"
            extra={
              <NavLink to='/history'>
                <Button type="primary">历史活动</Button>
              </NavLink>
            }
          />
        });
      } else {
        this.setState({
          activityList: result.data
        });
      }
    } else {
      message.error(data.data || data.errMsg || '网络异常');
    }
  };

  async componentDidMount() {
    await this.getActivity();
  }

  render() {
    const {content, activityList} = this.state;
    return (
      <div className='activity-wrapper'>
        <PageTitle pageTitle={pageTitle}/>
        <div className='activity-container'>
          <Spin tip="Loading..." spinning={this.state.loading} delay={500}>
            {content}
            {
              activityList.length > 0 && activityList.map((item) => {
                return <Card data={item} type={activity} key={item.id}/>;
              })
            }
          </Spin>
        </div>
      </div>
    );
  }
}

export default Activity;
