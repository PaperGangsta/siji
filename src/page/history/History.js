import React, {Component} from 'react';
import './style.less';
import PageTitle from '../../component/page-title/PageTitle';
import Card from '../../component/card/Card';
import {getOldActivity} from '../../api/history';
import {Button, message, Result, Spin} from 'antd';
import {NavLink} from 'react-router-dom';

const pageTitle = {
  icon: '\ue636',
  title: '历史活动'
};
const history = 'history';

class History extends Component {

  state = {
    historyList: [],
    loading: false,
    content: ''
  };

  getHistory = async () => {
    this.setState({
      loading: true
    });
    const data = await getOldActivity();
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
            subTitle="历史活动暂无数据,去了解下主培项目吧！"
            extra={
              <NavLink to='/term'>
                <Button type="primary">主培项目</Button>
              </NavLink>
            }
          />
        });
      } else {
        this.setState({
          historyList: result.data
        });
      }
    } else {
      message.error(data.data || data.errMsg || '网络异常');
    }
  };

  async componentDidMount() {
    await this.getHistory();
  }

  render() {
    const {content, historyList} = this.state;
    return (
      <div className='activity-wrapper'>
        <PageTitle pageTitle={pageTitle}/>
        <div className='activity-container'>
          <Spin tip="Loading..." spinning={this.state.loading} delay={500}>
            {content}
            {
              historyList.length > 1 && historyList.map((item) => {
                return <Card data={item} type={history} key={item.id}/>;
              })
            }
          </Spin>
        </div>
      </div>
    );
  }
}

export default History;
