/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin']
  // admin  字母开头，允许5-16字节，允许字母数字下划线
  return valid_map.indexOf(str.trim()) >= 0 || /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(str)
}
