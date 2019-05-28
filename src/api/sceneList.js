import request from '@/utils/request'

export function getScene(theme, tab, ci, limit) {
  return request.sceneList({
    url: '/ptapi/getScenesList?theme=${theme}&tab=${tab}&ci=${ci}&limit=${limit}',
    method: 'get'
  })
}
