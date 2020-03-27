<template>
  <div class="app-apply_box">
    <div class="apply-title">
      申请保函
    </div>
    <div class="step_box">
      <el-steps :active="1" simple>
        <el-step title="填写资料" icon="el-icon-edit" />
        <el-step title="核保" icon="el-icon-reading" />
        <el-step title="费用支付" icon="el-icon-s-promotion" />
        <el-step title="完成" icon="el-icon-picture" />
      </el-steps>
    </div>
    <div class="headline">
      项目信息
    </div>
    <div class="project_box">
      <el-row :gutter="50">
        <el-col :xs="24" :sm="12" :md="12">
          <div class="pr-lf">
            <el-button type="primary">
              <router-link to="/project/search">
                选择项目
              </router-link>
            </el-button>
            <div style="margin-top:30px;">点击项目选择按钮,选择可投标项目</div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12">
          <div class="pr-rg">
            <p>保函收费标准：</p>
            <p>保证金10万以内收费50元；</p>
            <p>保证金10万以上按保证金的万分之五进行收费。</p>
            <p>电子保函出函成功后，请0.5-1个小时后到新点系统查看电子保函数据是否递交成功，如没有显示成功，请立即联系客服。</p>
            <p>电子保函办理截止时间为：投标保证金截止时间前一天下午17:30，例如：保证金截止时间8月2日早上9:00，电子保函办理截止时间为：8月1日17:30.投标人须提前到平台进行账户注册认证，请合理安排时间，提前办理。</p>
            <p>如有遇到亟需处理的问题，请立即联系客服，客服诚心您服务，感谢您的理解和支持！</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .app-apply_box {
        max-width: 1000px;
        margin: 0 auto;
        & .apply-title {
            font-size: 26px;
            text-align: center;
            margin: 50px 0 0;
            padding-bottom: 30px;
            border-bottom: 2px solid #0070ee;
        }
    }
    .step_box {
        margin:30px 0px;
    }
    .headline {
    padding-left: 30px;
    color: #FFFFFF;
    height: 35px;
    background: #0070EE;
    line-height: 35px;
    border-radius: 5px 5px 5px 5px;
    }
    .project_box {
        padding: 50px 50px 0;
        & .pr-rg{
        /* border: 1px solid #0070EE; */
        background: #f5f5f5;
        border-radius: 4px;
        box-shadow: 0px 2px 4px #ccc;
        color:#a9a9a9;
        font-size: 14px;
        padding: 22px 10px;
        height: 354px;
        }
        & .pr-lf {
        border-radius: 4px;
        box-shadow: 0px 2px 4px #ccc;
        color:#a9a9a9;
        font-size: 14px;
        padding: 122px 10px;
        height: 354px;
        text-align: center;
        }
    }

</style>
