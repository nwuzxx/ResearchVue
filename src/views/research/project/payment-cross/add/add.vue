<template>
  <div class="app-container" style="width:800px; padding: 10px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>信息录入</span>
      </div>
      <div class="text item">
        <el-form :model="paymentCross" label-width="120px">
          <!-- <el-form-item label="ID">
            <el-input v-model="paymentCross.projectId" placeholder="请输入内容"/>
          </el-form-item> -->
          <el-form-item label="项目名称">
            <el-input v-model="paymentCross.projectName" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="项目来源">
            <el-input v-model="paymentCross.projectSource" placeholder="请输入内容" />
          </el-form-item>
          <!-- <el-form-item label="项目等级">
            <el-input v-model="paymentCross.projectLevel" placeholder="请输入内容"/>
          </el-form-item> -->
          <el-form-item label="项目编号">
            <el-input v-model="paymentCross.projectNumber" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="主持人">
            <el-input v-model="paymentCross.host" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="到款金额(元）">
            <el-input v-model="paymentCross.receivePayment" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="奖励率">
            <el-input v-model="paymentCross.rewardRate" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="科研奖励分值">
            <el-input v-model="paymentCross.rewardScore" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="报奖名称">
            <el-input v-model="paymentCross.awardName" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="奖励第一申请人">
            <el-input v-model="paymentCross.firstApplicant" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="所在科研团队">
            <el-input v-model="paymentCross.researchTeam" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="学科">
            <el-input v-model="paymentCross.subject" placeholder="请输入内容" />
          </el-form-item>
          <el-form-item label="到款日期">
            <el-date-picker
              v-model="paymentCross.receivePaymentTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择日期"
            />
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="paymentCross.contractAmount" placeholder="请输入内容" />
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
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import paymentCross from '@/api/paymentCross'
export default {
  data() {
    return {
      paymentCross: {
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
      paymentCross.getData(id)
        .then((response) => {
          this.paymentCross = response.data.payCrossId
          console.log(response.data.payCrossId)
        })
    },
    // 提交
    saveOrUpdate() {
      this.saveBtnDisabled = true
      if (!this.paymentCross.projectId) {
        this.saveData()
      } else {
        this.updateData()
      }
    },
    // 修改
    updateData() {
      paymentCross.updateData(this.paymentCross)
        .then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.$router.push({ path: '/research/project/payment-cross/list' })
        })
    },
    // 添加
    saveData() {
      paymentCross.addData(this.paymentCross)
        .then(response => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          this.$router.push({ path: '/research/project/payment-cross/list' })
        })
    }
  }
}
</script>
