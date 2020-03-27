/**
 * 公共验证规则
 * @author fuwei
 */

const verifyPassword = (
  source,
  key,
  identical,
  message,
) => (
  rule,
  val,
  callback,
) => ((val === source[key]) === identical
  ? callback() : callback(message))

const Rules = {
  /**
   * 必填验证
   * @param {String} fieldName - 必填项的label名称，如“姓名”
   * @param {String} type - 数据类型，默认为string
   * @param {Array} trigger - 触发方式，默认为‘blur’
   * @param {String} message - 提示信息，默认为‘{fieldName}不能为空’
   */
  required: (fieldName, type = 'string', trigger = ['blur', 'change'], message = `${fieldName}不能为空`) => ({
    type,
    trigger,
    message,
    required: true
  }),
  // 姓名验证（中文包含少数民族如：买买提·陈奕迅·阿凡提，英文名支持由空格和·分隔开）
  name: {
    pattern: /^([\u4e00-\u9fa5]+|[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*|([a-zA-Z]+\s?)+|[a-zA-Z]+(·[a-zA-Z]+)*)$/,
    message: '姓名格式不正确',
    trigger: ['blur', 'change']
  }, // 账号 字母开头，允许5-16字节，允许字母数字下划线
  account: {
    pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{5,16}$/,
    message: '账号格式不正确（必须包含数字字母，允许5-16字节，允许下划线）',
    trigger: ['blur', 'change']

  },
  // 手机号码验证
  mobile: {
    pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|166|17[0135678]|18[0-9]|19[8-9])\d{8}$/,
    message: '手机号码格式不正确',
    trigger: ['blur', 'change']
  },
  // /^(([1-9]\d*)|\d)(\.\d{1,2})?$/
  money: {
    pattern: /^(([1-9]\d*)|\d)(\.\d{1,2})?$/,
    message: '金额格式错误',
    trigger: ['blur', 'change']
  },
  // 密码格式校验
  password: (required = true) => [
    { required, message: '密码不能为空', trigger: ['blur', 'change'] },
    {
      min: 6, max: 32, message: '密码长度为6~32位', trigger: ['blur', 'change']
    }
  ],

  // 确认密码校验规则
  repassword: (
    source,
    key = 'password',
    identical = true,
    required = true,
    message = identical
      ? '两次输入的密码不一致'
      : '新密码应与旧密码不同',
  ) => [
    {
      required,
      message: '密码不能为空',
      trigger: ['blur', 'change']
    },
    {
      min: 6,
      max: 32,
      message: '密码长度为6~32位',
      trigger: ['blur', 'change']
    },
    {
      validator: verifyPassword(source, key, identical, message),
      trigger: ['blur', 'change']
    }
  ],

  // 邮箱验证
  email: {
    type: 'email',
    message: '邮箱地址格式不正确',
    trigger: ['blur', 'change']
  },

  // 字符最大限制
  max: max => ({
    type: 'string',
    max,
    message: `字符长度不能超过 ${max} 位`,
    trigger: ['blur', 'change']
  }),

  // 字符最小限制
  min: min => ({
    type: 'string',
    min,
    message: `字符长度不能小于 ${min} 位`,
    trigger: ['blur', 'change']
  }),

  // 字符限制范围
  range: (min, max, type = 'string', trigger = ['blur', 'change']) => ({
    type,
    min,
    max,
    message: `字符长度为 ${min} ~ ${max} 位`,
    trigger
  }),
  // 身份证规则验证，简易版
  idCard: {
    pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    message: '身份证格式错误',
    trigger: ['blur', 'change']
  },
  // 正整数验证
  positiveInt: {
    pattern: /^[1-9][0-9]*$/,
    message: '内容必须是大于0的整数',
    trigger: ['blur', 'change']
  },

  // 正数验证
  positiveFloat: {
    pattern: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
    message: '内容必须是大于等于0',
    trigger: ['blur', 'change']
  },

  // 校验数值最小值
  numberMin: (field, min = 0, trigger = ['blur', 'change'], message) => ({
    type: 'number',
    trigger,
    validator: (rule, value, callback) => {
      if (value === '' || value === null) {
        return callback()
      }
      if (value < min) {
        return callback(message || `${field}必需大于等于${min}`)
      }
      return callback()
    }
  }),

  // 校验数值最大值
  numberMax: (field, max = Infinity, trigger = ['blur', 'change'], message) => ({
    type: 'number',
    trigger,
    validator: (rule, value, callback) => {
      if (value === '' || value === null) {
        return callback()
      }
      if (value > max) {
        return callback(message || `${field}必需小于等于${max}`)
      }
      return callback()
    }
  }),

  // 校验数值最小值
  numberMinNot: (field, min = 0, trigger = ['blur', 'change'], message) => ({
    type: 'number',
    trigger,
    validator: (rule, value, callback) => {
      if (value === '' || value === null) {
        return callback()
      }
      if (value <= min) {
        return callback(message || `${field}必需大于${min}`)
      }
      return callback()
    }
  }),

  // 校验数值最大值
  numberMaxNot: (field, max = Infinity, trigger = ['blur', 'change'], message) => ({
    type: 'number',
    trigger,
    validator: (rule, value, callback) => {
      if (value === '' || value === null) {
        return callback()
      }
      if (value >= max) {
        return callback(message || `${field}必需小于${max}`)
      }
      return callback()
    }
  })
}

export default {
  /* eslint-disable no-param-reassign */
  install(Vue) {
    Vue.prototype.$rules = Rules
  },
  ...Rules
}
