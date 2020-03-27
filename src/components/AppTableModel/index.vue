<template>
  <div class="task-list_box">
    <div class="task-head_box">
      <div class="task-head_tit">
        {{ title }}
      </div>
      <div class="task-head">
        <slot name="head" />
      </div>
    </div>
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'AppTableModel',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.task-list_box {
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  margin-bottom: 20px;
}
.task-head_box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  & .task-head_tit {
    font-size: 24px;
    position: relative;
    &:before {
      content: '';
      width: 4px;
      height: 100%;
      position: absolute;
      left: -7px;
      background-color: #409EFF;
    }
  }
  & .task-head {
    flex: 1;
    text-align: right;
  }
}
</style>
