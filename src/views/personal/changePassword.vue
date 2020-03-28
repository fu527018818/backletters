<template>
  <div class="app-content">
    <div class="apply-title_box">
      <div class="apply-title">
        修改密码
      </div>
    </div>
    <div class="edit_box">
      <AppForm
        label-width="120px"
        :model="form"
        :rules="authRules"
        cancel-text="返回"
        @submit-form="submit"
      >
        <el-form-item
          label="新密码："
          prop="password"
        >
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item
          label="确认新密码："
          prop="repass"
        >
          <el-input
            v-model="form.repass"
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
export default {
  name: 'ChangePassword',
  components: {
    AppForm
  },
  data() {
    return {
      form: {
        password: null,
        repass: null
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
  methods: {
    submit() {

    }
  }
}
</script>

<style lang="scss" scoped>
    .edit_box {
        padding: 50px;
    }
</style>
