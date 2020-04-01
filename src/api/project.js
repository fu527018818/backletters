import request from '@/utils/request'
export default {
  getProjectList: data => request({
    url: '/bg/client/project/list',
    method: 'post',
    data
  }),
  projectInfo: data => request({
    url: '/bg/client/project/projectInfo',
    method: 'post',
    data
  }),
  projectLetter: data => request({
    url: '/bg/client/letter/list',
    method: 'post',
    data
  }),
  projectOrderDelete: data => request({
    url: `/bg/client/letter/del`,
    method: 'delete',
    data
  })

}
