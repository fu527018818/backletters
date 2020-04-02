import request from '@/utils/request'
export default {
  companyInfo: data => request({
    url: '/bg/client/company/getInfo',
    method: 'get',
    params: data
  }),
  companySave: data => request({
    url: '/bg/client/company/saveInfo',
    method: 'post',
    data
  })
}
