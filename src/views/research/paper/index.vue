<template>
  <div style="padding:30px;">
    
    <router-view />
  </div>
</template>

<script>

// import paper from '@/api/paper'

// export default{
//   //定义变量和初始值
//   data() {
//     return{
//       current:1, //当前页
//       limit:3, //每页显示期刊数
//       rows:{}, //条件封装对象
//       list:[], //每页数据集合
//       total:5 //总期刊数

//     }
//   },
//   //在页面渲染之前调用created()，一般调用methods定义的方法，得到数据
//   created() {
//     this.getlist()
//   },
//   //定义方法，进行请求接口调用
//   methods: {
//     //期刊列表
//     getlist(){ //当前页参数
//       // this.current = page
//       paper.getPaperAll()
//       //paper.getPaperList(this.current,this.limit,this.rows)
//       .then(response => { //请求成功,response是接口返回数据
//         //返回response赋值给list
//         this.list = response.data.items
//         //总专利数
//         // this.total = response.data.total
//         console.log(response)
//       }) 
//       .catch(error => { //请求失败调用
//         consloe.log(error)
//       }) 
//     }
//   }

// }

// export default {
//   methods: {
//       handleClick(row) {
//         console.log(row);
//       }
//   },
//   data() {
//     return {
//       tableData: [{
//         // patent_id:'1',
//         patent_app_time:'2019-11-19',
//         patent_pub_time:'2020-05-08',
//         patent_aut_time:'2020-05-08',
//         patent_type:'发明公开',
//         patent_name: '基于区域曲率二进制描述符的点云初始配准方法',
//         patent_grant_number:'CN201911133616.5',
//         patent_author_name: '恒一陟; 耿国华; 张雨禾; 陆正杰',
//         patent_author_sort: '2',
//         patent_prove_materials:'',
//         patent_status:'1'  //审核状态： '1':通过, '-1':未通过, '0':正在审核
//       }, {
//         // patent_id:'2',
//         patent_app_time:'2019-01-15',
//         patent_pub_time:'2019-05-28',
//         patent_aut_time:'2019-05-28',
//         patent_type:'发明公开',
//         patent_name: '一种基于三维卷积神经网络的点云物体类型识别方法',
//         patent_grant_number:'CN201910034966.X',
//         patent_author_name: '刘小通; 耿国华; 王毅; 徐嘉晨; 王瑶瑶',
//         patent_author_sort: '2',
//         patent_prove_materials:'',
//         patent_status:'0'
//       }, {
//         // patent_id:'3',
//         patent_app_time:'2018-11-30',
//         patent_pub_time:'2019-05-28',
//         patent_aut_time:'2019-05-28',
//         patent_type:'发明公开',
//         patent_name: '一种结合特征点拓扑和几何约束的文物碎片自动重组方法',
//         patent_grant_number:'CN201811451796.7',
//         patent_author_name: '耿国华; 胡佳贝; 田丰源; 褚彤; 张军; 丁飞; 张雨禾',
//         patent_author_sort: '1',
//         patent_prove_materials:'',
//         patent_status:'1'
//       }, {
//         // patent_id:'4',
//         patent_app_time:'2021-12-10',
//         patent_pub_time:'2022-03-15',
//         patent_aut_time:'2022-03-15',
//         patent_type:'发明公开',
//         patent_name: '一种高分辨率戏曲服饰的线图提取方法',
//         patent_grant_number:'CN202111506856.2',
//         patent_author_name: '耿国华; 冯龙; 周蓬博; 武浩东; 杨滢; 许阳; 李康; 刘阳洋',
//         patent_author_sort: '1',
//         patent_prove_materials:'',
//         patent_status:'-1'
//       }]
//     }
//   },
// }
  
</script>