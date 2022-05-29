<template>
  <div class="app-container" style="width: 100%; padding: 30px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>关键信息录入</span>
      </div>
      <div class="text item">
        <el-form :model="projectLengthways" label-width="110px">
          <!-- <el-form-item label="ID">
            <el-input v-model="projectLengthways.projectId" placeholder="请输入内容"/>
          </el-form-item> -->
          <el-form-item label="项目名称">
            <el-input style="width: 95%" v-model="projectLengthways.projectName" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="项目类型">
            <el-input style="width: 95%" v-model="projectLengthways.projectType" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="项目级别">
            <el-input style="width: 95%" v-model="projectLengthways.projectLevel" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="项目编号">
            <el-input style="width: 95%" v-model="projectLengthways.projectNumber" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="主持人">
            <el-input style="width: 95%" v-model="projectLengthways.host" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="项目来源">
            <el-input style="width: 95%" v-model="projectLengthways.projectSource" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="合同额(万)">
            <el-input style="width: 95%" v-model="projectLengthways.contractAmount" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="科研奖励分值">
            <el-input style="width: 95%" v-model="projectLengthways.rewardScore" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="报奖名称">
            <el-input style="width: 95%" v-model="projectLengthways.awardName" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="奖励第一申请人">
            <el-input style="width: 95%" v-model="projectLengthways.firstApplicant" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="所在科研团队">
            <el-input style="width: 95%" v-model="projectLengthways.researchTeam" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="学科">
            <el-input style="width: 95%" v-model="projectLengthways.subject" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="grid-content bg-purple" label="起止日期">
            <el-date-picker
              v-model="projectLengthways.startEndDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择日期"
            />
          </el-form-item>
          <el-form-item class="grid-content bg-purple" label="立项时间">
            <el-date-picker
              v-model="projectLengthways.projectTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择日期"
            />
          </el-form-item>
          <!-- <el-form-item label="创始日期">
        <el-input v-model="projectLengthways.initiationDate" placeholder="请输入内容"/>
      </el-form-item> -->
          <!-- <el-form-item label="gmtCreate">
            <el-input v-model="projectLengthways.gmtCreate" placeholder="请输入内容"/>
          </el-form-item>
          <el-form-item label="gmtModified">
            <el-input v-model="projectLengthways.gmtModified" placeholder="请输入内容"/>
          </el-form-item>
          <el-form-item label="isDeleted">
            <el-input v-model="projectLengthways.isDeleted" placeholder="请输入内容"/>
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
import projectLen from '@/api/projectLen'
export default {
  data() {
    return {
      projectLengthways: {
        // projectId: '',
        projectName: '',
        projectType: '',
        projectLevel: '',
        projectNumber: '',
        host: '',
        projectSource: '',
        // contractAmount: '',
        // rewardScore: '',
        awardName: '',
        firstApplicant: '',
        researchTeam: '',
        subject: '',
        // startEndDate: '2022-04-22T04:32:37.699Z',
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
      projectLen.getData(id)
        .then((response) => {
          this.projectLengthways = response.data.sciProject
          console.log(response.data.sciProject)
        })
    },
    // 提交
    saveOrUpdate() {
      this.saveBtnDisabled = true
      if (!this.projectLengthways.projectId) {
        this.saveData()
      } else {
        this.updateData()
      }
    },
    // 修改
    updateData() {
      projectLen.updateData(this.projectLengthways)
        .then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.$router.push({ path: '/research/project/project-length/list' })
        })
    },
    // 添加
    saveData() {
      projectLen.addData(this.projectLengthways)
        .then(response => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          this.$router.push({ path: '/research/project/project-length/list' })
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
            this.$router.push({path:'/research/project/project-length/list'})
          })
      }
  }
}
</script>
