<template>
  <div class="app-register_box">
    <div class="register-head_box">
      <i
        class="el-icon-arrow-left"
        @click="$router.back()"
      >
        返回
      </i>
      注册账号
    </div>
    <div class="app-register_body">
      <AppForm
        ref="appForm"
        label-width="80px"
        :model="form"
        :rules="authRules"
        cancel-text="返回"
        @submit-form="submit"
      >
        <el-form-item
          prop="phone"
          label="手机号"
        >
          <el-input
            v-model="form.phone"
            placeholder="请输入手机号"
          />
        </el-form-item>
        <el-form-item
          label="验证码"
          class="app-code_box"
          prop="smscode"
        >
          <el-input
            v-model="form.smscode"
            class="authCode"
            placeholder="请输入验证码"
          />
          <span
            class="authCode_btn"
          >
            <el-button
              type="info"
              plain
              @click="getCode"
            >
              {{ !status?'获取验证码': count + 's' }}
            </el-button>
          </span>

        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item
          label="姓名"
          prop="realname"
        >
          <el-input
            v-model="form.realname"
            placeholder="请输入姓名"
          />
        </el-form-item>
        <!-- <el-form-item>
          <el-checkbox
            v-model="form.agreement"
          >我已阅读并同意《用户协议》
          </el-checkbox>
        </el-form-item> -->
        <div slot="footer" class="footer_box">
          <el-button
            style="width:100%"
            type="primary"
            @click="submit"
          >注册
          </el-button>
        </div>
      </AppForm>
    </div>

  </div>
</template>

<script>
import AppForm from '@/components/AppForm'
import code from './mixins/code'
// 用户注册和修改密码
export default {
  name: 'Register',
  components: {
    AppForm
  },
  mixins: [code],
  data() {
    return {
      form: {
        phone: null,
        password: null,
        smscode: null,
        realname: null
        // agreement: true
      }
    }
  },
  computed: {
    authRules() {
      return {
        phone: [
          this.$rules.required('手机号'),
          this.$rules.mobile
        ],
        realname: [
          this.$rules.required('账号'),
          this.$rules.account
        ],
        smscode: [
          this.$rules.required('验证码')
        ],
        password: [
          this.$rules.required('密码'),
          ...this.$rules.password()
        ]
      }
    }
  },
  mounted() {
    // this.$api.register(
    //   this.form
    // ).then(res => {
    //   this.$message.success('注册成功')
    //   this.$router.push({
    //     path: '/home/login'
    //   })
    // })
  },
  methods: {
    submit() {
      this.$refs.appForm.validate((valid) => {
        if (valid) {
          this.$api.register(
            this.form
          ).then(res => {
            this.$message.success('注册成功')
            this.$router.push({
              path: '/home/login'
            })
          })
        }
      })
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
