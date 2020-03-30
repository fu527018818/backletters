export default {
  data() {
    return {
      status: false,
      count: 59,
      interval: null
    }
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
      this.$api.getCode({
        phone: this.form.phone,
        smsmode: '1'
      })
        .then(res => {
          this.status = true
          this.setInter()
        })
    }
  }
}
