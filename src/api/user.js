import request from '@/utils/request'
export default {
  login: data => request({
    url: '/v1/api/login',
    method: 'post',
    data
  }), // 注册
  register: data => request({
    url: '/jeecg-boot/sys/user/client/register',
    method: 'post',
    data
  }), // 修改密码
  editPassword: data => request({
    url: '/v1/users/resetpassword',
    method: 'post',
    data
  }), // 用户问题
  getInfo: data => request({
    url: '/v1/account/info',
    method: 'get',
    params: data
  }),
  getCode: data => request({
    url: '/jeecg-boot/sys/client/sms',
    method: 'post',
    data
  }),
  getCodeGraphic: data => request({
    url: '/jeecg-boot/sys/client/getCheckCode',
    method: 'get',
    params: data
  }),
  forgetPassword: data => request({
    url: '/jeecg-boot/sys/user/client/forgetPassword',
    method: 'post',
    data
  })
}
