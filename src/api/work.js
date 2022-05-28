import request from '@/utils/request'

export default {

  getList(current, limit, worksManagementQuery) {
    return request({
      url: `/WorksManagementSpringBoot/getInfo/pageConditionFind/${current}/${limit}`,
      method: 'post',
      data: worksManagementQuery
    })
  },
  removeDataById(id) {
    return request({
      url: `/WorksManagementSpringBoot/getInfo/deleteWorksDate/${id}`,
      method: 'delete'
    })
  },
  addData(work) {
    return request({
      url: `/WorksManagementSpringBoot/getInfo/addWorksManagement`,
      method: 'post',
      data: work
    })
  },
  // 修改
  getData(id) {
    return request({
      url: `/WorksManagementSpringBoot/getInfo/GetWorksManagement/${id}`,
      method: 'get'
    })
  },
  // 修改
  updateData(data) {
    return request({
      url: `/WorksManagementSpringBoot/getInfo/updateWorksInfo`,
      method: 'post',
      data: data
    })
  }
}

