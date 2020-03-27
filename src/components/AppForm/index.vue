<template>
  <form
    v-loading="formLoading"
    :class="className"
    class="app-form el-form"
  >
    <!-- 表单内容 -->
    <div
      :class="{
        'app-form-body_small': widthSize === 'small'
      }"
      class="app-form-body"
    >
      <slot />
    </div>
    <!-- 表单底部内容 -->
    <div class="app-form-footer">
      <slot name="footer">
        <slot name="footer-before" />
        <ElButton
          v-if="showCancelButton"
          :disabled="submitLoading"
          class="app-form-footer__cancel"
          @click="cancelForm"
        >
          {{ cancelText }}
        </ElButton>
        <slot name="footer-center" />
        <ElButton
          v-if="showSubmitButton"
          :loading="submitLoading"
          class="app-form-footer__submit"
          type="primary"
          @click="submitForm"
        >
          {{ submitText }}
        </ElButton>
        <slot name="footer-after" />
      </slot>
    </div>
  </form>
</template>

<script>
import { Form } from 'element-ui'
import { mapState } from 'vuex'
import { emitter } from '@/mixins'

export default {
  name: 'AppForm',
  extends: Form,
  mixins: [emitter],
  props: {
    submitText: {
      type: String,
      default: '提交'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    alertInfo: {
      type: [Object, String, Error],
      default: () => ({})
    },
    widthSize: {
      type: String,
      default: null
    },
    labelWidth: {
      type: String,
      default: '11em'
    },
    autoCloseDialog: {
      type: Boolean,
      default: false
    },
    // // 编辑权限控制
    // editAccess: {
    //   type: String,
    //   default: ''
    // },
    // 控制提交按钮显示
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    // 控制取消按钮显示
    showCancelButton: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      submitLoading: false,
      // 服务端返回信息
      resInfo: {}
    }
  },
  computed: {
    className() {
      return [
        this.labelPosition ? `el-form--label-${this.labelPosition}` : '',
        { 'el-form--inline': this.inline }
      ]
    },
    elDialog() {
      return this.findAncestor('ElDialog')
    },
    ...mapState({
      formLoading: state => state.formLoading
    })
  },
  watch: {
    'elDialog.visible': function $elDialogVisible(val) {
      if (!val) {
        this.resInfo = {}
        this.submitLoading = false
        this.$nextTick().then(() => {
          this.resetFields()
        })
      }
    }
  },
  methods: {
    // 提交表单事件
    submitForm() {
      this.validate((valid) => {
        if (valid) {
          this.resInfo = {}
          this.submitLoading = true
          this.$emit('submit-form', (ajaxFun) => {
            // 回调执行事件
            ajaxFun()
              .then(() => {
                // 所属弹窗里是否自动关闭弹窗
                if (this.autoCloseDialog && this.elDialog) {
                  this.elDialog.handleClose()
                }
              })
              .catch((error) => {
                this.submitLoading = false
                this.resInfo = Object.keys(this.alertInfo).length
                  ? this.alertInfo
                  : error
              })
              .then(() => {
                this.submitLoading = false
              })
          })
        }
      })
    },

    // 取消表单事件
    cancelForm() {
      if (this.elDialog) {
        // 如果在弹窗里的表单取消并关闭弹窗
        this.elDialog.handleClose()
        this.$emit('cancel-form')
      } else if (this.$listeners['cancel-form']) {
        this.$emit('cancel-form')
      } else {
        this.$router.back()
      }
    }
  }
}
</script>

<style lang="scss">
.app-form-header {
  display: flex;
  align-items: center;
}

.app-form-body {

  &.app-form-body_small {
    & .el-form-item {
      width: 50%;
    }
  }
}

.app-form-item_small {
  width: 50%;
  min-width: 350px;
}

.app-form-item_large {
  width: 80%;
  min-width: 500px;
}

.app-form-item_small,
.app-form-item_large,
.app-form-item_auto {
  & .el-cascader,
  & .el-select {
    width: 100%;
  }
}

.app-form-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 18px;

  & .el-button {
    & + .el-button {
      margin-left: 20px;
    }

    &.app-form-footer__cancel,
    &.app-form-footer__submit {
      min-width: 88px;
      height: 34px;
      padding: 0;
    }

    &.app-form-footer__cancel {
      background-color: var(--bg-color-base);
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
}
</style>

