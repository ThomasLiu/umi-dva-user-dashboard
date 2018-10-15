import { PAFE_SIZE } from '../constants';
import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&limit=${PAFE_SIZE}`)
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  })
}