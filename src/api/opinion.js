import request from '../utils/request';
import {json} from '../utils/postHeaderUtil';

export function submitOpinion(data) {
  return request({
    headers: {
      'Content-Type': json
    },
    url: '/opinion/submit',
    method: 'POST',
    data: data
  });
}
