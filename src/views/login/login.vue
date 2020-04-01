<template>
  <div class="app-login_code">
    <div class="loginType">

      <el-radio-group
        v-model="loginType"
        class="loginType"
        @change="changeType"
      >
        <el-radio-button :label="1">
          验证码登录
        </el-radio-button>
        <el-radio-button :label="2">
          密码登录
        </el-radio-button>
      </el-radio-group>
    </div>
    <AppForm
      ref="form"
      :model="form"
      label-width="70px"
      :rules="loginType===2?authRules:rulesType"
    >

      <div
        v-if="loginType===2"
      >
        <el-form-item
          label="账号"
          prop="username"
        >
          <el-input
            v-model="form.username"
            placeholder="请输入账号"
            type="number"
          />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            type="password"
          />
        </el-form-item>
        <el-form-item
          label="验证码"
          class="app-code_box"
          prop="captcha"
        >
          <el-input
            v-model="form.captcha"
            class="authCode"
            placeholder="请输入验证码"
          />
          <span
            class="authCode_btn img_btn"
          >
            <JGraphicCode
              remote
              :content-width="110"
              :content-height="36"
              @succeeCodeGraphic="getCodeGraphic"
            />
          </span>
        </el-form-item>
      </div>
      <div
        v-if="loginType===1"
      >
        <el-form-item
          label="手机号"
          prop="phone"
        >
          <el-input
            v-model="form.phone"
            placeholder="请输入手机号"
            type="number"
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
      </div>
      <div slot="footer" class="footer_box">
        <el-button
          style="width:100%"
          type="primary"
          @click="login"
        >登录
        </el-button>
        <el-row class="open-box">
          <el-col :span="12">
            <router-link to="/home/register">
              <span style="color:#0070EE;">
                注册
              </span>
              (第一次使用)
            </router-link>
          </el-col>
          <el-col :span="12" style="text-align: right;">
            <router-link to="/home/forgetPwd">
              忘记密码?
            </router-link>
          </el-col>
        </el-row>
      </div>
    </AppForm>
  </div>
</template>

<script>
import AppForm from '@/components/AppForm'
import code from './mixins/code'
import JGraphicCode from '@/components/AppGraphicCode'
export default {
  name: 'Login',
  components: {
    AppForm,
    JGraphicCode
  },
  mixins: [code],
  data() {
    return {
      loginType: 2,
      form: {
        username: null,
        password: null,
        captcha: null,
        checkKey: null
      }
    }
  },
  computed: {
    rulesType() {
      return {
        smscode: [
          this.$rules.required('验证码')
        ],
        phone: [
          this.$rules.required('手机号'),
          this.$rules.mobile
        ]
      }
    },
    authRules() {
      return {
        username: [
          this.$rules.required('账号')
        ],
        password: [
          this.$rules.required('密码'),
          ...this.$rules.password()
        ],
        captcha: [
          this.$rules.required('验证码')
        ]

      }
    }
  },
  methods: {
    login() {
      this.$refs.form.validate((valida) => {
        if (valida) {
          const form = this.form
          const loginType = this.loginType
          this.$store.dispatch('user/login', { form, loginType })
            .then(() => {
              this.$router.push({ path: '/' })
            })
        }
      })
    },
    getCodeGraphic(obj) {
      console.log(obj)
      // this.form.captcha = obj.code;
      this.form.checkKey = obj.checkKey
    },
    changeType(val) {
      if (+val === 2) {
        this.form = {
          username: null,
          password: null,
          captcha: null,
          checkKey: null
        }
      } else {
        this.form = {
          phone: null,
          smscode: null
        }
      }
    }
  }
}
</script>

<style lang="scss">
    .app-login_code {
        padding: 20px;
           .footer_box {
        width: 100%;
    }
    .open-box {
        line-height: 40px;
        margin-top: 30px;
    }
    .loginType {
        text-align: center;
        margin: 20px 0;
    }
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
