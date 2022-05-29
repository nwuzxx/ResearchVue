<template>
  <div style="padding:30px;">
    <!-- <el-alert :closable="false" title="menu 1">
      <router-view />
    </el-alert> -->
    <!-- 查询表单-->
    <el-form ref="projectLengthwaysQuery" :inline="true" :model="projectLengthwaysQuery" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="projectLengthwaysQuery.project_name" placeholder="项目名称" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="projectLengthwaysQuery.project_number" placeholder="项目编号" />
      </el-form-item>
      <!--      <el-form-item label="添加时间">-->
      <!--        <el-date-picker-->
      <!--          v-model="worksManagementQuery.begin"-->
      <!--          type="datetime"-->
      <!--          placeholder="选择开始时间"-->
      <!--          value-format="yyyy-MM-dd HH:mm:ss"-->
      <!--          default-time="00:00:00"-->
      <!--        />-->
      <!--      </el-form-item>-->
      <!--      <el-form-item>-->
      <!--        <el-date-picker-->
      <!--          v-model="worksManagementQuery.end"-->
      <!--          type="datetime"-->
      <!--          placeholder="选择截止时间"-->
      <!--          value-format="yyyy-MM-dd HH:mm:ss"-->
      <!--          default-time="00:00:00"-->
      <!--        />-->
      <!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
        <el-button type="warning" @click="resetData()">清空</el-button>
      <!-- <router-link :to="'/research/project/project-cross/add/'">
        <el-button type="success" plain @click="getList()" style="float: right;margin-right: 55px;">新增表单</el-button>
      </router-link> -->
      </el-form-item>
      <el-form-item>
        <el-button type="success" icon="el-icon-circle-plus-outline" @click="addProject">新增</el-button>
      </el-form-item>   
    </el-form>

    <!--表单-->
    <el-table
      :data="list"
      stripe
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        label="序号"
        type="index"
        width="50"
        align="center"
      >
        <template scope="scope">
          <!-- （当前页-1）* 每页条数 + 当前行数据的索引 -->
          <span>{{ (current - 1) * limit + scope.$index + 1 }}</span>
        </template>
      </el-table-column>  
      <!-- <el-table-column prop="projectId" label="ID" width="60" align="center" /> -->
      <el-table-column sortable prop="projectName" label="项目名称" show-overflow-tooltip align="center" />
      <el-table-column prop="projectType" label="项目类型" show-overflow-tooltip align="center" />
      <el-table-column prop="projectNumber" label="项目编号" width="100" align="center" />
      <el-table-column prop="host" label="主持人" width="100" align="center" />
      <el-table-column prop="researchTeam" label="所在研究团队" show-overflow-tooltip align="center" />
      <el-table-column prop="status" label="审核状态" width="140px" align="center" />

      <el-table-column fixed="right" label="操作" width="250" align="center">
        <template slot-scope="scope">
          <!-- <el-button type="success" size="mini" class="el-icon-view" @click="handleClick(scope.row)">审核</el-button> -->
          <router-link :to="'/research/project/project-length/edit/'+scope.row.projectId">
            <el-button type="success" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.projectId)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      :current-page="current"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: right;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
    <!-- //<router-view :key="Math.random()"></router-view> -->
  </div>
</template>

<script>
import projectLen from '@/api/projectLen'

export default {

  data() {
    return {
      current: 1,
      list: [],
      //page: 1,
      limit: 10,
      total: 0,
      projectLengthwaysQuery: {}
    }
  },
  created() {
    // 调用
    this.getList()
  },
  methods: {

    getList(page = 1) {
      this.current = page
      projectLen.getList(this.current, this.limit, this.projectLengthwaysQuery)
        .then(response => {
          console.log(response)
          this.list = response.data.rows
          this.total = response.data.total
        })
        .catch(error => {
          console.log(error)
        })
    },
    addProject() {
      this.$router.push('add')
      console.log(this.$router)
    },
    // 清空
    resetData() {
      this.projectLengthwaysQuery = {}
      this.getList()
    },
    // 删除
    removeDataById(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        projectLen.removeDataById(id)
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
