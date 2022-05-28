<template>
  <div class="app-container" style="width: 100%;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>关键信息</span>
        <el-button style="float: right; padding: 3px 0" type="text">保存</el-button>
      </div>
      <div class="text item">
        <el-form label-width="120px">
          <el-form-item label="authors">
            <el-input v-model="work.authors" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="awardName">
            <el-input v-model="work.awardName" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="firstApplicant">
            <el-input v-model="work.firstApplicant" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="firstAuthor">
            <el-input v-model="work.firstAuthor" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="isbnnumbers">
            <el-input v-model="work.isbnnumbers" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="researchTeam">
            <el-input v-model="work.researchTeam" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="rewardScore">
            <el-input v-model="work.rewardScore" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="worksId">
            <el-input v-model="work.worksId" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="worksName">
            <el-input v-model="work.worksName" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="gmtCreate">
            <el-input v-model="work.gmtCreate" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="gmtModified">
            <el-input v-model="work.gmtModified" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="publicationTime">
            <el-input v-model="work.publicationTime" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="isDeleted">
            <el-input v-model="work.isDeleted" placeholder="请输入内容" />
          </el-form-item>

          <el-form-item>
            <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
          </el-form-item>
        </el-form>
      </div>

    </el-card>
    <router-view />
  </div>
</template>

<script>
import research from '@/api/work'

export default {
  data() {
    return {
      work: {
        authors: 'new',
        awardName: 'new',
        firstApplicant: 'new',
        firstAuthor: 'new',
        isbnnumbers: 'new',
        researchTeam: 'new',
        rewardScore: 0,
        worksId: 'new',
        gmtCreate: '2022-04-22T04:32:37.699Z',
        gmtModified: '2022-04-22T04:32:37.699Z',
        publicationTime: '2022-04-22T04:32:37.699Z',
        isDeleted: 0,
        worksName: 'new'
      },
      saveBtnDisabled: false // 保存按钮是否禁用, }
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
    getInfo(id) {
      research.getData(id)
        .then(response => {
          this.work = response.data.worksProject
          console.log(response.data.worksProject)
        })
    },
    // 提交
    saveOrUpdate() {
      this.saveBtnDisabled = true
      if (!this.work.worksId) {
        this.saveData()
      } else {
        this.updateData()
      }
    },
    // 修改
    updateData() {
      research.updateData(this.work)
        .then(response => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })

          this.$router.push({ path: '/research/work/list' })
        })
    },
    // 添加
    saveData() {
      research.addData(this.work)
        .then(response => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })

          this.$router.push({ path: '/research/work/list' })
        })
    }
  }
}
</script>
