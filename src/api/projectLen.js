import request from '@/utils/request'

export default {
// 条件查询
  getList(current, limit, projectLengthwaysQuery) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectLengthways/getInfo/pageConditionFind/${current}/${limit}`,
      method: 'post',
      data: projectLengthwaysQuery
    })
  },
  // 删除
  removeDataById(id) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectLengthways/getInfo/deleteSciDate/${id}`,
      method: 'delete'
    })
  },
  // 添加
  addData(projectLengthways) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectLengthways/getInfo/addSciManagement`,
      method: 'post',
      data: projectLengthways
    })
  },
  // 回显
  getData(id) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectLengthways/getInfo/GetSciProject/${id}`,
      method: 'get'
    })
  },
  // 修改更新
  updateData(projectLengthways) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectLengthways/getInfo/updateSciProject`,
      method: 'post',
      data: projectLengthways

    })
  }
}

