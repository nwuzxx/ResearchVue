<template>
  <div class="app-container" style="width: 100%; padding: 30px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>关键信息录入</span>
      </div>
      <div class="text item">
        <el-form :model="projectCross" label-width="110px">
          <!-- <el-form-item label="ID">
            <el-input v-model="projectCross.projectId" placeholder="请输入内容"/>
          </el-form-item> -->
          <el-form-item label="项目名称">
            <el-input style="width: 95%" v-model="projectCross.projectName" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="项目来源">
            <el-input style="width: 95%" v-model="projectCross.projectSource" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="项目编号">
            <el-input style="width: 95%" v-model="projectCross.projectNumber" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="主持人">
            <el-input style="width: 95%" v-model="projectCross.host" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="合同额(万)">
            <el-input style="width: 95%" v-model="projectCross.contractAmount" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="科研奖励分值">
            <el-input style="width: 95%" v-model="projectCross.rewardScore" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="报奖名称">
            <el-input style="width: 95%" v-model="projectCross.awardName" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="奖励第一申请人">
            <el-input style="width: 95%" v-model="projectCross.firstApplicant" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="所在科研团队">
            <el-input style="width: 95%" v-model="projectCross.researchTeam" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="学科">
            <el-input style="width: 95%" v-model="projectCross.subject" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="起止日期">
            <el-date-picker
              v-model="projectCross.startEndDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择日期"
            />
          </el-form-item>
          <el-form-item label="立项日期">
            <el-date-picker
              v-model="projectCross.initiationDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择日期"
            />
          </el-form-item>
          <!-- <el-form-item label="创建时间">
            <el-input v-model="projectCross.gmtCreate" placeholder="请输入内容"/>
          </el-form-item>
          <el-form-item label="更新时间">
            <el-input v-model="projectCross.gmtModified" placeholder="请输入内容"/>
          </el-form-item>
          <el-form-item label="isDeleted">
           <el-input v-model="projectCross.isDeleted" placeholder="请输入内容"/>
          </el-form-item> -->

          <el-form-item>
            <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
            <el-button type="warning" @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import project from '@/api/project'
export default {
  data() {
    return {
      projectCross: {
        // projectId: '',
        projectName: '',
        projectSource: '',
        projectNumber: '',
        host: '',
        // contractAmount: '',
        // rewardScore: '',
        awardName: '',
        firstApplicant: '',
        researchTeam: '',
        subject: '',
        // startEndDate: '2022-04-22T04:32:37.699Z',
        // initiationDate: '2022-04-22T04:32:37.699Z',
        // gmtCreate: '2022-04-22T04:32:37.699Z',
        // gmtModified: '2022-04-22T04:32:37.699Z',
        isDeleted: 0
      },
      saveBtnDisabled: false // 保存按钮是否禁用
    }
  },
  created() {
    console.log('created')
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getInfo(id)
      // console.log(id)
    }
  },
  methods: {
    // 根据id查询记录
    getInfo(id) {
      project.getData(id)
        .then((response) => {
          this.projectCross = response.data.sciProject
          console.log(response.data.sciProject)
        })
    },
    // 提交
    saveOrUpdate() {
      this.saveBtnDisabled = true
      if (!this.projectCross.projectId) {
        this.saveData()
      } else {
        this.updateData()
      }
    },
    // 修改
    updateData() {
      project.updateData(this.projectCross)
        .then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.$router.push({ path: '/research/project/project-cross/list' })
        })
    },
    // 添加
    saveData() {
      project.addData(this.projectCross)
        .then(response => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          this.$router.push({ path: '/research/project/project-cross/list' })
        })
    },
    //取消新增
      cancel(){
        this.$confirm('取消后编辑内容将丢失，确认取消?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            // 刷新页面
            this.$router.push({path:'/research/project/project-cross/list'})
          })
      }
  }
}

// .catch(err =>{
//          console.log(err)
//        })
</script>
