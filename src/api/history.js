import request from '../utils/request';
import {json} from '../utils/postHeaderUtil';

export function getOldActivity() {
  return request({
    headers: {
      'Content-Type': json
    },
    url: '/activity/getOldActivity',
    method: 'GET'
  });
}
