import React, {Component} from 'react';
import PageTitle from '../../component/page-title/PageTitle';
import QuestionCard from '../../component/question-card/QuestionCard';
import {getQuestionList} from '../../api/question';
import {message, Skeleton} from 'antd';
import './style.less';

const pageTitle = {
  icon: '\ue6cb',
  title: '常见问题'
};

class Question extends Component {

  state = {
    questionList: [],
    loading: false
  };

  async componentDidMount() {
    await this.getQuestion();
  }

  getQuestion = async () => {
    this.setState({
      loading: true
    });
    const result = await getQuestionList();
    const data = result.data;
    console.log(data);
    if (data.code === 0) {
      this.setState({
        questionList: data.data,
        loading: false
      });
    } else {
      message.error(data.data || data.errMsg || '网络异常');
    }
  };

  render() {

    const {loading, questionList} = this.state;


    return (
      <div className='question-wrapper'>
        <PageTitle pageTitle={pageTitle}/>

        <div className='question-container'>
          <Skeleton active loading={loading}>
            {
              questionList.map((item) => {
                return <QuestionCard questionContent={item.questionContent} questionTitle={item.questionTitle}
                                     key={item.id}/>;
              })
            }
          </Skeleton>
        </div>
      </div>
    );
  }
}

export default Question;
