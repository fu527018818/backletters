// import { mapState } from 'vuex'

// const WarningDialog = () => import('@/components/Dialog/WarningDialog.vue');
// const ResourceDownloadDialog = () => import('@/components/Dialog/ResourceDownloadDialog.vue');

export default {
  data() {
    return {
      dialogVisible: false,
      // 当前弹窗组件对象
      currentDialog: {}
    }
  },
  computed: {
    // ...mapState({
    //   dialogLoading: state => state.dialogLoading
    // })
  },
  methods: {
    // 弹窗公共方法
    openDialog(options) {
      const {
        visible = 'dialogVisible',
        $props = {},
        $events = {},
        componentName,
        // loading = true,
        ...render
      } = options

      this[`${visible}`] = true

      this.$nextTick(() => {
        this.currentDialog = this.$appDialog({
          $props: {
            visible: `${visible}`,
            ...$props
          },

          $events: {
            'update:visible': (val) => {
              this[`${visible}`] = val

              this.$nextTick(() => {
                window.setTimeout(() => {
                  this.dialogRemove()
                }, 300)
              })
            },
            ...$events
          }
        },
        createElement => [
          createElement(componentName, {
            directives: [
              {
                // name: 'loading'
                // value: loading && this.dialogLoading
              }
            ],
            ...render
          })
        ], true)
      })
    },

    // 销毁当前弹窗对象
    dialogRemove() {
      !this.$util.isEmpty(this.currentDialog) && this.currentDialog.remove()
    }
  },

  beforeDestroy() {
    this.dialogRemove()
    // this.clearDialogStoreBefore()
  }
}
