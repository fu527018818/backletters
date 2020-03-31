<template>
  <div class="app-login_code">
    <div class="loginType">

      <el-radio-group
        v-model="loginType"
        class="loginType"
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
      ref="loginForm"
      :model="loginForm"
      label-width="60px"
    >
      <el-form-item label="手机号">
        <el-input
          v-model.number="loginForm.mobile"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <div
        v-if="loginType===2"
      >
        <el-form-item

          label="密码"
        >
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item
          label="验证码"
          class="app-code_box"
        >
          <el-input
            v-model="loginForm.code"
            class="authCode"
            placeholder="请输入验证码"
          />
          <span
            class="authCode_btn"
          >
            1212
          </span>
        </el-form-item>
      </div>

      <el-form-item
        v-if="loginType===1"
        label="验证码"
        class="app-code_box"
      >
        <el-input
          v-model="loginForm.code"
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
      <div slot="footer" class="footer_box">
        <el-button
          style="width:100%"
          type="primary"
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
export default {
  name: 'Login',
  components: {
    AppForm
  },
  mixins: [code],
  data() {
    return {
      loginType: 2,
      loginForm: {
        mobile: null,
        password: null
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
