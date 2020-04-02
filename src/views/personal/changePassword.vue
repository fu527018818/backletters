<template>
  <div class="app-content">
    <div class="apply-title_box">
      <div class="apply-title">
        修改密码
      </div>
    </div>
    <div class="edit_box">
      <AppForm
        ref="appForm"
        label-width="120px"
        :model="form"
        :rules="authRules"
        cancel-text="返回"
        @submit-form="submit"
      >
        <el-form-item
          label="旧密码："
          prop="oldpassword"
        >
          <el-input
            v-model="form.oldpassword"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
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
          prop="confirmpassword"
        >
          <el-input
            v-model="form.confirmpassword"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <div slot="footer" class="footer_box">
          <el-button
            style="width:100%"
            type="primary"
            @click="submit"
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
        oldPassword: null,
        password: null,
        confirmpassword: null
      }
    }
  },
  computed: {
    authRules() {
      return {
        oldPassword: [
          this.$rules.required('旧密码'),
          ...this.$rules.password()
        ],
        password: [
          this.$rules.required('密码'),
          ...this.$rules.password()
        ],
        confirmpassword: [
          this.$rules.required('确认密码'),
          ...this.$rules.repassword(this.form, 'password')
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.appForm.validate((valida) => {
        if (valida) {
          this.$api.updatePassword(this.form)
            .then(res => {
              this.$message.success('密码修改成功')
              // setTimeout(() => {
              //   this.$store.dispatch('user/logout')
              //     .then(() => {
              //       location.reload()
              //     })
              // }, 2000)
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .edit_box {
        padding: 50px;
    }
</style>
