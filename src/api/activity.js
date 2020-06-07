import request from '../utils/request';
import {json} from '../utils/postHeaderUtil';

export function getNewActivity() {
  return request({
    headers: {
      'Content-Type': json
    },
    url: '/activity/getNewActivity',
    method: 'GET'
  });
}

export function addActivityApply(data) {
  return request({
    headers: {
      'Content-Type': json
    },
    url: '/activity/apply',
    method: 'POST',
    data
  });
}
