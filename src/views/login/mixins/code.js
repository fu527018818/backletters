export default {
  data() {
    return {
      status: false,
      count: 59,
      interval: null
    }
  },
  mounted() {
    console.log(this.$route)
  },
  methods: {
    setInter() {
      this.interval = setInterval(
        () => {
          if (this.count === 0) {
            this.status = false
            clearInterval(this.interval)
          } else {
            --this.count
          }
        }, 1000)
    },

    getCode() {
      // 0 .登录模板、1.注册模板、2.忘记密码模板
      // this.$route
      this.$api.getCode({
        phone: this.form.phone,
        smsmode: this.$route.path === '/home/register' ? '1' : this.$route.path === '/home/login' ? '0' : '2'
      })
        .then(res => {
          this.status = true
          this.setInter()
        })
    }
  }
}
