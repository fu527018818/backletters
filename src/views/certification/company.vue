<template>
  <div class="app-company">
    <div class="apply-title_box">
      <div class="apply-title">
        企业认证
      </div>
    </div>
    <div class="apply-form_box">
      <el-row :gutter="20">
        <el-col :xl="24" :md="16">
          <div class="apply-lf_box">

            <AppForm
              ref="loginForm"
              :model="companyFrom"
              label-position="top"
              @submit-form="submit"
            >
              <el-form-item label="企业名称：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业名称"
                />
              </el-form-item>
              <el-form-item label="统一社会信用编码：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入信用编码"
                />
              </el-form-item>
              <el-form-item label="企业税号：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业税号"
                />
              </el-form-item>
              <el-form-item label="企业组织机构代码：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业组织机构代码"
                />
              </el-form-item>
              <el-form-item label="企业营业期限(营业止期)：">
                <el-date-picker
                  v-model="companyFrom.name"
                  type="date"
                  placeholder="选择日期"
                />
              </el-form-item>
              <el-form-item label="企业注册地址：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业注册地址"
                />
              </el-form-item>
              <el-form-item label="法人姓名：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入法人姓名"
                />
              </el-form-item>
              <el-form-item label="法人手机号码：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入法人手机号码"
                />
              </el-form-item>
              <el-form-item label="法人身份证号码：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入法人身份证号码"
                />
              </el-form-item>
              <el-form-item label="企业邮箱：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业邮箱"
                />
              </el-form-item>
              <el-form-item label="企业邮箱：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业邮箱"
                />
              </el-form-item>
              <el-form-item label="企业电话：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业电话"
                />
              </el-form-item>
              <el-form-item label="企业银行名称：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业银行名称"
                />
              </el-form-item>
              <el-form-item label="开户银行账号：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入企业银行名称"
                />
              </el-form-item>
              <el-form-item label="邮政编码：">
                <el-input
                  v-model.number="companyFrom.name"
                  placeholder="请输入邮政编码"
                />
              </el-form-item>
              <el-form-item label="法人身份证人像面照片：">
                <el-upload
                  class="avatar-uploader"
                  action="/"
                  :show-file-list="false"
                >
                  <img v-if="companyFrom.name" :src="companyFrom.name" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="法人身份证国徽面照片：">
                <el-upload
                  class="avatar-uploader"
                  action="/"
                  :show-file-list="false"
                >
                  <img v-if="companyFrom.name" :src="companyFrom.name" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="营业执照：">
                <el-upload
                  class="avatar-uploader"
                  action="/"
                  :show-file-list="false"
                >
                  <img v-if="companyFrom.name" :src="companyFrom.name" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="">
                <el-checkbox v-model="checked">已阅读《用户服务协议》</el-checkbox>
              </el-form-item>
            </AppForm>
          </div>
        </el-col>
        <el-col :xl="24" :md="8">
          <div class="apply-rg_box">
            <div>认证须知</div>
            <p>1.同一个企业只能被一个用户认证；</p>
            <p>2.企业信息请仔细核实，错误填写会导致企业认证失败，如有疑问，通过QQ群：721880993联系技术员或者客服；</p>
            <p>3.认证完成后如需更改企业信息或认证信息，通过QQ群：721880993联系技术员或者客服；</p>
            <p>4.企业审核会在申请成功后的2-3分钟内完成，请注意自己的审核状态，未审核通过的企业不可以开函</p>
            <p>5.填写参考网址：<a href="http://220.160.52.164:96/ConstructionInfoPublish/Pages/CompanyQuery.aspx" /></p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import AppForm from '@/components/AppForm'
export default {
  name: 'Company',
  components: {
    AppForm
  },
  data() {
    return {
      companyFrom: {
        name: null
      },
      checked: true
    }
  },
  methods: {
    submit() {

    }
  }
}
</script>

<style lang="scss">
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
    .app-company {
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
     .apply-form_box {
        margin-top: 50px;
        & .apply-rg_box {
            padding: 15px;
            border: 1px solid #eee;
            font-size: 16px;
            color: #595959;
        }
    }
    .apply-lf_box {
        padding-right:8%;
    }
    }

</style>
