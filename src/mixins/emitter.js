/**
 * 查找当前祖先组件
 * @param {String} componentName
 * @param {Object} parent
 */
function findAncestor(componentName, parent) {
  let currentParent = parent
  let name = currentParent && (currentParent.$options.componentName || currentParent.$options.name)

  while (currentParent && (!name || name !== componentName)) {
    currentParent = currentParent.$parent

    if (currentParent) {
      name = (currentParent.$options.componentName || currentParent.$options.name)
    }
  }
  return currentParent
}

/**
 * 查找指定的所有后代组件
 * @param {String} componentName
 * @param {Array} children
 */
function findDescendants(componentName, children) {
  let descendants = []
  if (children && children && children.length) {
    children.forEach((child) => {
      const name = child.$options.componentName || child.$options.name
      if (name === componentName) {
        descendants = [...descendants, child]
      } else {
        descendants = [...descendants, ...findDescendants(componentName, child.$children)]
      }
    })
  }

  return descendants
}

export default {
  methods: {
    findAncestor(componentName) {
      return componentName
        ? findAncestor(componentName, this.$parent)
        : {}
    },

    async dispatch(componentName, eventName, ...params) {
      const parent = this.$parent || this.$root
      const ancestor = await findAncestor(componentName, parent)

      if (ancestor) {
        ancestor.$emit(...[eventName].concat(params))
        return ancestor
      }
      return []
    },

    findDescendants(componentName) {
      if (!componentName) return []
      const descendants = findDescendants.call(this, componentName, this.$children)
      return descendants.length
        ? descendants
        : []
    },

    async broadcast(componentName, eventName, ...params) {
      const descendants = await this.findDescendants(componentName)
      if (descendants.length) {
        descendants.forEach(descendant => descendant.$emit(eventName, ...params))
        return Promise.resolve(descendants)
      }
      return Promise.reject(new Error(false))
    }
  }
}
