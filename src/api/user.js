import request from '@/utils/request'
export default {
  // 账号密码登录
  loginAccount: data => request({
    url: '/bg/client/login',
    method: 'post',
    data
  }),
  // 手机号码登录
  loginPhone: data => request({
    url: '/bg/client/phoneLogin',
    method: 'post',
    data
  }),
  // 注册
  register: data => request({
    url: '/bg/client/register',
    method: 'post',
    data
  }), // 修改密码
  // editPassword: data => request({
  //   url: '/v1/users/resetpassword',
  //   method: 'post',
  //   data
  // }), // 用户问题
  // getInfo: data => request({
  //   url: '/v1/account/info',
  //   method: 'get',
  //   params: data
  // }),
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
    url: '/bg/client/forgetPassword',
    method: 'put',
    data
  }),
  // 公共上传文件
  commonUpload: data => request({
    url: '/bg/client/common/upload',
    method: 'post',
    data
  }),
  // 密码修改
  updatePassword: data => request({
    url: '/bg/client/updatePassword',
    method: 'put',
    data
  })
}
