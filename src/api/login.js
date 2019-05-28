import request from '@/utils/request'

export function login(userInfo) {
  return request.userInfo({
    url: '/v1/token/user',
    method: 'post',
    data: userInfo
  })
}

export function getInfo() {
  return request.userInfo({
    url: '/v1/user',
    method: 'get'
  })
}
