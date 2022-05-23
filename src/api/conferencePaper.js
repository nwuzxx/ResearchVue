import request from '@/utils/request'

export default{

    // 会议论文
    getConferencePaperList(current,limit,rows){
        return request ({
            url:`/ResearchProjectCollectionSpringBoot/getConferencePaperInfo/pageConditionFind/${current}/${limit}`,
            method:'post',
            data: rows  //使用json
        })
    },
    //添加会议论文
    addConferencePaper(paperList){
        return request({
            url:'/ResearchProjectCollectionSpringBoot/getConferencePaperInfo/addConferencePaperManagement',
            method:'post',
            data: paperList
        })
    },
    //删除会议论文
    deleteConferencePaper(id){
        return request({
            url:`/ResearchProjectCollectionSpringBoot/getConferencePaperInfo/${id}`,
            method:'delete'
        })

    },
    //修改
    updateConferencePaper(paperList){
        return request({
            url:`/ResearchProjectCollectionSpringBoot/getConferencePaperInfo/updateConferencePaper`,
            method:'post',
            data: paperList
        })
    },
    //id查询
    getConferencePaperId(paper_id){
        return request({
            url:`/ResearchProjectCollectionSpringBoot/getConferencePaperInfo/GetConferencePaper/${paper_id}`,
            method:'get',
        })
    },
    
}