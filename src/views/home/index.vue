<template>
  <div class="app-home">
    <div class="banner">
      <img src="../../assets/images/home/banner.png" alt="">
    </div>
    <div class="home-title">
      功能与服务
    </div>
    <div class="home-body_box">
      <el-row :gutter="30">
        <el-col
          v-for="(item,index) in list"
          :key="index"
          :md="8"
          :sm="8"
          :xs="24"
          class="card-item_box"
        >
          <el-card
            shadow="hover"
            @click.native="goTo(item)"
          >
            <div class="card-box">
              <div class="card-img">
                <img :src="item.img" alt="">
              </div>
              <div class="card-des">
                {{ item.tit }}
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data() {
    return {
      list: [
        {
          img: require('@/assets/images/home/baohanshenqing.png'),
          tit: '保函申请',
          url: '/apply/index'
        },
        {
          img: require('@/assets/images/home/xiangmuchaxun.png'),
          tit: '保函查询',
          url: '/project/search'
        },
        {
          img: require('@/assets/images/home/baohanchaxun.png'),
          tit: '保函查询&申请电子发票',
          url: '/project/order'
        },
        {
          img: require('@/assets/images/home/gerenzhongxin.png'),
          tit: '个人中心'
        },
        {
          img: require('@/assets/images/home/woyaorenzheng.png'),
          tit: '我要认证'
        },
        {
          img: require('@/assets/images/home/woyaobaoan.png'),
          tit: '正在开发'
        }
      ]
    }
  },
  methods: {
    goTo(item) {
      this.$router.push({
        path: item.url
      })
    }
  }
}
</script>

<style lang="scss">
  .app-home {
    .el-card__body {
    padding: 0;
  }
  .banner {
    & > img {
      width: 100%;
    }
  }
  .home-title {
    text-align: center;
    font-size: 32px;
    color: #333333;
    line-height: 106px;
  }
  .home-body_box {
    max-width: 1000px ;
    margin: 0 auto;
    padding: 20px;
    & .card-item_box {
      margin-bottom: 30px;
    }
  }
  .card-box {
     cursor: pointer;
    & .card-img {
      width: 76px;
      height: 78px;
      margin: 61px auto;
      & > img {
        width: 76px;
        height: 78px;
      }
    }
    & .card-des {
      line-height: 40px;
      text-align: center;
      background-color: #0070EE;
      font-size: 26px;
      color:#fff;
      cursor: pointer;
    }
  }
  }

</style>
