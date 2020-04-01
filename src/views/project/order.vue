<template>
  <div class="app-order">
    <AppTableModel title="保函查询">
      <template slot="head">
        <el-form
          :inline="true"
          :model="formQuery"
          class="demo-form-inline"
        >

          <el-form-item label="保函状态">
            <el-select
              v-model="formQuery.status"
              placeholder="请选择保函"
            >
              <el-option
                v-for="i in options"
                :key="i.value"
                :label="i.label"
                :value="i.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
            >
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </template>
      <template slot="content">
        <el-table
          ref="listOrder"
          :data="list"
          border
          height="500px"
          style="width: 100%"
        >
          <el-table-column
            prop="pName"
            label="项目名称"
          />
          <el-table-column
            prop="letterMoney"
            label="保费"
          />
          <el-table-column
            prop="updateTimes"
            label="提交时间"
          />
          <el-table-column
            prop="status"
            label="状态"
          />
          <el-table-column
            label="操作"
            fixed="right"
          >
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="small"
              >
                查看详情
              </el-button>
              <el-button
                type="danger"
                size="small"
                @click="deleteOrder(scope.row)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <Pagination
          v-if="listQuery.total>0"
          :total="listQuery.total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.limit"
          @pagination="changePage"
        />

      </template>
    </AppTableModel>
  </div>
</template>

<script>
import AppTableModel from '@/components/AppTableModel'
import Pagination from '@/components/Pagination'
export default {
  name: 'Order',
  components: {
    AppTableModel,
    Pagination
  },
  data() {
    return {
      formQuery: {
        status: null
      },
      options: [
        {
          label: '全部',
          value: null
        },
        {
          label: '未支付',
          value: 0
        },
        {
          label: '已支付',
          value: 1
        },
        {
          label: '已完成',
          value: 2
        }
      ],
      list: [],
      listQuery: {
        limit: 10,
        page: 1,
        total: 0
      }
    }
  },
  created() {
    this.$store.commit('app/setPageLoading', true)
    this.init()
  },
  methods: {
    onSubmit() {
      this.listQuery.page = 1
      this.$store.commit('app/setPageLoading', true)
      this.init()
    },
    changePage() {

    },
    deleteOrder(val) {
      this.$confirm('此操作将永久删除保函, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.projectOrderDelete({
          id: val.id
        }).then(res => {
          this.init()
          this.$message.success('删除成功')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    init() {
      this.$api.projectLetter({
        status: this.formQuery.status
      }).then(res => {
        this.$store.commit('app/setPageLoading', false)
        this.listQuery.total = res.result.total
        this.list = res.result.records
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .app-order {
        padding: 50px;
         & .el-form-item {
            margin-bottom: 0px;
        }
    }
    .serach-name {
        width: 250px;
    }
</style>
