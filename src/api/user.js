import request from '@/utils/request'
export default {
  login: data => request({
    url: '/v1/api/login',
    method: 'post',
    data
  }), // 注册
  register: data => request({
    url: '/bg/user/client/register',
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
  // 短信验证码
  getCode: data => request({
    url: '/bg/client/sms',
    method: 'post',
    data
  }),
  // 图像验证
  getCodeGraphic: data => request({
    url: '/bg/client/getCheckCode',
    method: 'get',
    params: data
  }),
  // 忘记密码
  forgetPassword: data => request({
    url: '/bg/user/client/forgetPassword',
    method: 'post',
    data
  })
}
