<template>
  <div class="app-container" style="width: 100%; padding: 30px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>关键信息录入</span>
        <el-button style="float: right; padding: 3px 0" type="text">保存草稿</el-button>
      </div>
      <div class="text item">
        <el-form  :model="paperList" :label-position='left' label-width="80px">
          
           <el-form-item label="文章类型">
              <el-select v-model="paperList.paper_type" >
                <el-option label="期刊" value="1"></el-option>
                <el-option label="会议" value="2"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="文章标题">
                <el-input  style="width: 95%" v-model="paperList.paperName" placeholder="请输入文章标题"></el-input>
            </el-form-item>

            <el-form-item class="grid-content bg-purple" label="发表时间">
              <el-date-picker
                v-model="paperDate"
                type="date"
                placeholder="请选择日期">
              </el-date-picker>
            </el-form-item> 
            <el-form-item label="期刊名称">
                <el-input style="width: 95%" v-model="paperList.periodicalName" placeholder="请输入期刊名称"></el-input>
            </el-form-item>
            <el-form-item label="期刊级别">
              <el-input style="width: 95%" v-model="paperList.periodicalLevel" placeholder="请输入期刊级别"></el-input>
            </el-form-item>

            <el-form-item label="期刊语言">
              <el-radio-group v-model="paperList.periodicalLanguage">
                <el-radio label="1">中文</el-radio>
                <el-radio label="2">英文</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="通讯单位">
              <el-select v-model="paperList.paperUnitName" placeholder="请选择通讯单位">
                <el-option label="西北大学" value="1"></el-option>
                <el-option label="其他" value="2"></el-option>
              </el-select>
            </el-form-item>

           

            <el-form-item label="单位名称">
              <el-input style="width: 95%" v-if="paperList.paperUnitName == 2" placeholder="请输入文章所属单位名称"></el-input>
              <el-input style="width: 95%" v-else placeholder="西北大学" :disabled="true"></el-input>
            </el-form-item>

            <!-- <el-form-item label="单位名称">
              <el-input v-if="patentList.patent_unit == 2" placeholder="请输入专利所属单位名称"></el-input>
              <el-input v-if="patentList.patent_unit == 1" :disabled="true"></el-input>
            </el-form-item> -->

             <el-form-item label="作者总数">
              <el-input style="width: 95%" v-model="paperList.paperAuthorNum" placeholder="请输入作者总数"></el-input>
            </el-form-item>
            
            <el-form-item label="第一作者">
              <el-input style="width: 95%" v-model="paperList.firstAuthorName" placeholder="请输入第一作者"></el-input>
            </el-form-item>

            <el-form-item label="本人排序">
              <el-input style="width: 95%" v-model="paperList.authorSort" placeholder="请输入本人排序"></el-input>
              
            </el-form-item>
           
            <el-form-item >
                <el-button type="primary">提交</el-button>
                <el-button type="warning">取消</el-button>
            </el-form-item> 

        </el-form>
      </div> 


    </el-card> 
    <!-- <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>作者信息</span>
      </div>
       <div class="text item">
         
       </div>

    </el-card>-->
    <router-view />
  </div>
</template>
<script>
  // import paper from '@/api/paper'
  export default{
    data(){
      return{
        paperList:{}
      }
    },
    created(){

    },
    methods:{

    }
  }
  
  
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin: auto;
    width: 98%;
  }
</style>