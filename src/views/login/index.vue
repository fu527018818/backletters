<template>
  <div class="app-login">
    <div class="head-box">
      <img src="../../assets/images/common/logo.png" alt="">
    </div>
    <div class="app-login_box">
      <el-row :gutter="20">
        <el-col style="margin-bottom:50px" :xs="24" :md="12">
          <div class="login-lf-tit">
            <div class="tit1">公共资源交易中心</div>
            <h2 class="tit2">电子保函在线管理系统</h2>
            <img src="http://chajianshi.cn/DZBH/public/static/images/wxgzh1.png" alt="">
          </div>
        </el-col>
        <el-col :xs="24" :md="12">
          <div class="form-rg_box">
            <router-view />
            <!-- <el-form
                ref="loginForm"
                :model="loginForm"
                :rules="loginRules"
                class="login-form"
                auto-complete="on"
                label-position="left"
              > -->
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex'
}
</script>

<style lang="scss" scoped>
  .head-box {
    height: 44px;
    margin: 40px;
    & > img {
      height: 100%;
    }
  }
    .app-login_box {
    background-color: #0070ee;
    padding:50px 120px;
  }
  .login-lf-tit {
    display: inline-block;
    & .tit1 {
      font-size: 32px;
      color: #fff;
    }
    & .tit2 {
      font-size: 38px;
      color: #fff;
      margin: 10px 0;
    }
    & img {
      width: 258px;
      height: 258px;
      display: block;
      margin: 40px auto 0;
    }
  }
  .form-rg_box {
    background-color: #fff;
    border-radius: 3px;
    max-width: 500px;
    margin: 0 auto;
  }

</style>
