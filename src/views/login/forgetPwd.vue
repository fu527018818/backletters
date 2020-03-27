<template>
  <div class="app-register_box">
    <div class="register-head_box">
      <i
        class="el-icon-arrow-left"
        @click="$router.back()"
      >
        返回
      </i>
      忘记密码
    </div>
    <div class="app-register_body">
      <AppForm
        label-width="80px"
        :model="form"
        :rules="authRules"
        cancel-text="返回"
        @submit-form="submit"
      >
        <el-form-item label="手机号">
          <el-input
            v-model.number="form.mobile"
            placeholder="请输入手机号"
          />
        </el-form-item>
        <el-form-item
          label="验证码"
          class="app-code_box"
        >
          <el-input
            v-model="form.code"
            class="authCode"
            placeholder="请输入验证码"
          />
          <span class="authCode_btn">获取验证码</span>
        </el-form-item>
        <el-form-item
          label="新密码"
        >
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <div slot="footer" class="footer_box">
          <el-button
            style="width:100%"
            type="primary"
          >提交
          </el-button>
        </div>
      </AppForm>
    </div>

  </div>
</template>

<script>
import AppForm from '@/components/AppForm'
// 用户注册和修改密码
export default {
  name: 'ForgetPwd',
  components: {
    AppForm
  },
  data() {
    return {
      form: {
        mobile: null,
        password: null,
        code: null
      }
    }
  },
  computed: {
    authRules() {
      return {
        mobile: [
          this.$rules.required('手机号'),
          this.$rules.mobile
        ],
        userName: [
          this.$rules.required('账号'),
          this.$rules.account
        ],
        oldPassword: [
          this.$rules.required('密码'),
          ...this.$rules.password()
        ],
        password: [
          this.$rules.required('密码'),
          ...this.$rules.password()
        ],
        repass: [
          this.$rules.required('密码'),
          ...this.$rules.repassword(this.form, 'password')
        ]
      }
    }
  },
  mounted() {

  },
  methods: {
    submit(callBack) {
      callBack(() => {

      }
      )
    }
  }

}
</script>

<style lang="scss">
  .footer_box {
    width: 100%;
  }
  .app-register_box {
    & .el-icon-arrow-left {
     cursor: pointer;
     position: absolute;
     left: 12px;
     top:12px;
    }
     .app-register_body {
        padding: 30px;
    }
  }
  .register-form_box {

  }
  .register-head_box {
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    position: relative;
  }
    .app-code_box {
         .authCode {
        float: left;
        width: 60%;
    }
    .authCode_btn {
        float: left;
        width: 40%;
        text-align: center;
        cursor: pointer;
    }
  }
</style>
