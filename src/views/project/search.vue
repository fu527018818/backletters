<template>
  <div class="app-search">
    <AppTableModel title="项目查询">
      <template slot="head">
        <el-form
          :inline="true"
          :model="formQuery"
          class="demo-form-inline"
        >
          <el-form-item
            label=""
          >
            <el-date-picker
              v-model="formQuery.pStartDate"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            />
          </el-form-item>
          <el-form-item
            label=""
          >
            <el-input
              v-model="formQuery.keyword"
              class="serach-name"
              placeholder="请输入项目名称或立项号检索项目"
            />
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
            prop="pname"
            label="项目名称"
          />
          <el-table-column
            prop="companyName"
            label="招标单位"
          />
          <el-table-column
            prop="pcode"
            label="招标编号"
          />
          <el-table-column
            prop="pamount"
            label="保证金额(元)"
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
                <router-link
                  :to="{path:'/project/detail',
                        query:{
                          id: scope.row.id
                        }}"
                >
                  查看详情
                </router-link>
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
import Pagination from '@/components/Pagination'
import AppTableModel from '@/components/AppTableModel'
export default {
  name: 'Search',
  components: {
    AppTableModel,
    Pagination
  },
  data() {
    return {
      formQuery: {
        keyword: null,
        pStartDate: null
      },
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
      this.$store.commit('app/setPageLoading', true)
      this.init()
    },
    init() {
      this.$api.getProjectList({
        ...this.formQuery,
        pageNo: this.listQuery.page,
        pageSize: this.listQuery.limit
      }).then(res => {
        this.listQuery.total = res.result.total
        this.$store.commit('app/setPageLoading', false)
        this.list = res.result.records
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .app-search {
        padding: 50px;
         & .el-form-item {
            margin-bottom: 0px;
        }
    }
    .serach-name {
        width: 250px;
    }
</style>
