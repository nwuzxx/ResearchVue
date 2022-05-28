<template>
  <div style="padding:10px;">
    <!-- <el-alert :closable="false" title="menu 1">
      <router-view />
    </el-alert> -->
    <!-- 查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="sciResearchQuery.project_name" placeholder="项目名称" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="sciResearchQuery.project_number" placeholder="项目编号" />
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
      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
      <!-- <router-link :to="'/research/project/project-cross/add/'">
        <el-button type="success" plain @click="getList()" style="float: right;margin-right: 55px;">新增表单</el-button>
      </router-link> -->
      <el-button type="success" plain icon="el-icon-circle-plus-outline" style="float: right;margin-right: 55px;" @click="addProject">新增</el-button>
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
      <el-table-column prop="projectId" label="ID" width="60" align="center" />
      <el-table-column sortable prop="projectName" label="项目名称" width="150" align="center" />
      <el-table-column prop="projectSource" label="项目来源" width="150" align="center" />
      <el-table-column prop="projectNumber" label="项目编号" width="100" align="center" />
      <el-table-column prop="host" label="主持人" width="100" align="center" />
      <el-table-column prop="researchTeam" label="所在研究团队" width="150" align="center" />
      <el-table-column prop="status" label="审核状态" width="140px" align="center">
        <!-- <el-tag type="success" v-if="scope.row.status > '0'">
            通过
          </el-tag>
          <el-tag type="danger" v-else-if="scope.row.status < '0'">
            未通过
          </el-tag>
          <el-tag type="primary" v-else>
            正在审核
          </el-tag>
        </template>  -->
      </el-table-column>

      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button type="success" size="mini" class="el-icon-view" @click="handleClick(scope.row)">审核</el-button>
          <router-link :to="'/research/project/project-cross/edit/'+scope.row.projectId">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.projectId)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
    <!-- //<router-view :key="Math.random()"></router-view> -->
  </div>
</template>

<script>
import project from '@/api/project'

export default {

  data() {
    return {
      list: null,
      page: 1,
      limit: 10,
      total: 0,
      sciResearchQuery: {}
    }
  },
  created() {
    // 调用
    this.getList()
  },
  methods: {

    getList(page = 1) {
      this.page = page
      project.getList(this.page, this.limit, this.sciResearchQuery)
        .then(response => {
          console.log(response)
          this.list = response.data.rows
          this.total = response.data.total
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 新增项目
    addProject() {
      this.$router.push('add')
      console.log(this.$router)
    },
    // 清空
    resetData() {
      this.sciResearchQuery = {}
      this.getList()
    },
    // 删除
    removeDataById(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        project.removeDataById(id)
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
