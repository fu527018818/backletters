<template>
  <div class="app-certification_box">
    <div class="apply-title_box">
      <div class="apply-title">
        我要认证
      </div>
      <div class="apply-dec">
        应监管要求，您需要完成以下认证
      </div>
      <div />
    </div>
    <div class="apply-status_box">
      <img src="../../assets/images/home/woyaorenzheng.png" alt="">
      <div>企业认证</div>
      <div class="dec">完成认证后可申请保函</div>
      <el-button type="primary">
        <router-link to="/certification/company">
          我要认证
        </router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificationIndex'
}
</script>

<style lang="scss" scoped>
    .app-certification_box {
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
        & .apply-dec {
            text-align: center;
            color: #7c7c7c;
            line-height: 32px;
        }

    }
}
.apply-status_box {
    text-align: center;
    & > img {
        width: 76px;
        height: 78px;
        margin: 80px 0 20px;
    }
    & .dec {
        color: #7c7c7c;
        margin-top: 16px;
        font-size: 16px;
        margin-bottom: 20px;
    }
}
</style>
