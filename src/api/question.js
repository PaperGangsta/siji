import request from '../utils/request';
import {json} from '../utils/postHeaderUtil';

export function getQuestionList() {
  return request({
    headers: {
      'Content-Type': json
    },
    url: '/question/getAll',
    method: 'GET'
  });
}
