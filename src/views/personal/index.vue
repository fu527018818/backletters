<template>
  <div class="app-content">
    <div class="apply-title_box">
      <div class="apply-title">
        个人中心
      </div>
    </div>
    <div class="personal-body_box">
      <el-row :gutter="12">
        <el-col
          v-for="i in list"
          :key="i.name"
          :span="8"
          @click.native="goTo(i)"
        >
          <el-card shadow="hover" style="margin:20px 0 20px;">
            <div class="personal-lf">
              <img :src="i.img" alt="">
            </div>
            <div class="personal-rg">
              {{ i.name }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalIndex',
  data() {
    return {
      list: [
        {
          name: '我的企业',
          url: '/certification/index',
          img: require('@/assets/images/personal/gr_qiye.png')
        },
        {
          name: '保函订单',
          url: '/project/order',
          img: require('../../assets/images/personal/gr_bh.png')
        },
        {
          name: '修改密码',
          url: '/personal/changePassword',
          img: require('@/assets/images/personal/gr_zh.png')
        }
        // {
        //   name: '我的消息',
        //   url: '/project/order',
        //   img: require('../../assets/images/personal/grzx_xx.png')
        // }
      ]
    }
  },
  methods: {
    goTo(val) {
      this.$router.push({
        path: val.url
      })
    }
  }
}
</script>

<style lang="scss">
    .app-content {
        max-width: 1000px;
        margin: 0 auto;
         & .apply-title_box{
              text-align: center;
              margin: 50px 0 0;
              padding-bottom: 30px;
              border-bottom: 2px solid #0070ee;
            & .apply-title {
            font-size: 26px;
        }
    }
    }
    .personal-body_box {
        .personal-lf {
        width: 70px;
        height: 70px;
        background: #ebf4fb;
        border-radius: 50%;
        text-align: center;
         line-height: 100px;
         float: left;

            & > img {
                width: 40px;
                height: 38px;
            }
        }
        .personal-rg {
            width: 100%;
            height: 100%;
            padding-left: 70px;
            text-align: center;
             line-height: 70px;
        }
    }
</style>
