import request from '@/utils/request'

export default{
    getPatentList(current,limit,searchobj){
        return request ({
            url:'/',
            method:'post',
            data: searchobj  //使用json
        })
    },
    //添加专利
    addPatent(patentList){
        return request({
            url:'',
            method:'post',
            data: patentList
        })
    }
}