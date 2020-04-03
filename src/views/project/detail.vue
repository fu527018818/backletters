<template>
  <div class="app-project_detail">
    项目详情
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      detailInfo: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$api.projectInfo({
        id: this.$route.query.id
      }).then(res => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
