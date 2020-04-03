const isEmpty = (val) => {
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (!Object.keys(val).length) return true
  } else {
    if (val === 'null' || val === null || val === 'undefined' || val === undefined || val === '') return true
    return false
  }
  return false
}
/* 下载远程文件
  * @param {Object} blob
  * @param {String} fileName
  */
const downloadBlobFile = (res, fileName) => {
  const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  const filename = fileName
  a.href = url
  a.download = filename
  a.click()
  window.URL.revokeObjectURL(url)
}

const getQuery = (url = window.location.href) => {
  const query = {}
  const num = url.indexOf('?')
  if (num !== -1 && url.indexOf('=') > 1) {
    let str = url.substr(1)
    str = str.substr(num)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i += 1) {
      // eslint-disable-next-line
      query[strs[i].split('=')[0]] = (strs[i].split('=')[1]);
    }
  }
  return query
}
// 对象参数转为url参数
const parse = (query) => {
  return Object.keys(query)
    .filter(key => !isEmpty(query[key]))
    .reduce((result, key) => {
      const value = query[key]
      // in查询特殊处理
      if (Array.isArray(value) && !isEmpty(value)) {
        return `${result}&${value.reduce((val, cVal) => `${val ? `${val}&` : val}${key}=${cVal}`, '')}`
      }

      // between查询做特殊处理
      if (typeof value === 'object' && !isEmpty(value)) {
        const [start, end] = value
        return `${result}&${key}[]=${start}&${key}[]=${end}`
      }

      return `${result}&${key}=${value}`
    }, '')
    .replace(/^&/, '?')
}
export default {
  isEmpty,
  downloadBlobFile,
  getQuery,
  parse
}
