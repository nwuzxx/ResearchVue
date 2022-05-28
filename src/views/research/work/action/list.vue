<template>
  <div>
    <!--    查询栏-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="isbn_numbers">
        <el-input v-model="worksManagementQuery.isbn_numbers" placeholder="isbn_numbers" />
      </el-form-item>
      <el-form-item label="works_name">
        <el-input v-model="worksManagementQuery.works_name" placeholder="works_name" />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      </el-form-item>
      <el-form-item label="">
        <el-button type="warning" @click="resetData()">清空</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="success" icon="el-icon-circle-plus-outline" style="float: right;margin-right: 55px;" @click="addPaper">新增表单</el-button>
      </el-form-item>
    </el-form>

    <!--    表格-->
    <el-table :data="list" stripe border fit highlight-current-row style="width: 100%">
      <el-table-column prop="worksId" label="worksId" width="100" />
      <el-table-column prop="firstAuthor" label="firstAuthor" width="100" />
      <el-table-column prop="worksName" label="worksName" />
      <el-table-column prop="authors" label="authors" />
      <el-table-column prop="isbnnumbers" label="isbnnumbers" width="100" />
      <el-table-column prop="awardName" label="awardName" width="100" />
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="warning" size="mini" icon="el-icon-edit" @click="editWork(scope.row.worksId)">修改</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.worksId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--    翻页-->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
  </div>
</template>

<script>
import research from '@/api/work'

export default {
  data() {
    return {
      list: null,
      page: 1,
      limit: 10,
      total: 0,
      worksManagementQuery: {}
    }
  },
  created() {
    // 调用
    this.getList()
  },
  methods: {
    // 获取列表
    getList(page = 1) {
      this.page = page
      research.getList(this.page, this.limit, this.worksManagementQuery)
        .then(response => {
          console.log(response)
          this.list = response.data.rows
          this.total = response.data.total
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 清空
    resetData() {
      this.worksManagementQuery = {}
      this.getList()
    },
    // 新增期刊
    addPaper() {
      this.$router.push('create')
      console.log(this.$router)
    },
    // 编辑
    editWork(id) {
      this.$router.push('edit/' + id)
    },

    // 删除
    removeDataById(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        research.removeDataById(id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.getList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
