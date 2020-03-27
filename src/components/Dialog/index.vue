<script>
/**
 * @description ElDialog 扩展
 * @author fuwei
 */

import { Dialog } from 'element-ui'

const getWidth = (widthSize) => {
  switch (widthSize) {
    case 'medium':
      return '780px'

    default:
      return '450px'
  }
}

export default {
  name: Dialog.name,

  extends: Dialog,

  provide() {
    return {
      elDialog: this
    }
  },

  props: {
    widthSize: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '18vh'
    }
  },

  computed: {
    style() {
      const style = {}
      if (!this.fullscreen) {
        style.marginTop = this.top
        style.width = this.width ? this.width : getWidth(this.widthSize)
      }
      return style
    }
  }
}
</script>
