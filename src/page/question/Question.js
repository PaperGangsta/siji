import React, {Component} from 'react';
import PageTitle from '../../component/page-title/PageTitle';
import QuestionCard from '../../component/question-card/QuestionCard';
import './style.less';

const pageTitle = {
  icon: '\ue6cb',
  title: '常见问题'
};

class Question extends Component {
  render() {
    return (
      <div className='question-wrapper'>
        <PageTitle pageTitle={pageTitle}/>

        <div className='question-container'>

          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
        </div>
      </div>
    );
  }
}

export default Question;
