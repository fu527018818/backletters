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
export default {
  isEmpty,
  downloadBlobFile,
  getQuery
}
