import request from '@/utils/request'

export default {
// 条件查询
  getList(current, limit, sciResearchQuery) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectCross/getInfo/pageConditionFind/${current}/${limit}`,
      method: 'post',
      data: sciResearchQuery
    })
  },
  // 删除
  removeDataById(id) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectCross/getInfo/deleteSciDate/${id}`,
      method: 'delete'
    })
  },
  // 添加
  addData(projectCross) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectCross/getInfo/addSciManagement`,
      method: 'post',
      data: projectCross
    })
  },
  // 回显
  getData(id) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectCross/getInfo/GetSciProject/${id}`,
      method: 'get'
    })
  },
  // 修改更新
  updateData(projectCross) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectCross/getInfo/updateSciProject`,
      method: 'post',
      data: projectCross

    })
  }
}

