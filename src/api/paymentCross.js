import request from '@/utils/request'

export default {
// 条件查询
  getList(current, limit, paymentCrossQuery) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentCross/getInfo/pageConditionFind/${current}/${limit}`,
      method: 'post',
      data: paymentCrossQuery
    })
  },
  // 删除
  removeDataById(id) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentCross/getInfo/deletePaymentCross/${id}`,
      method: 'delete'
    })
  },
  // 添加
  addData(paymentCross) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentCross/getInfo/addPaymentCross`,
      method: 'post',
      data: paymentCross
    })
  },
  // 回显
  getData(id) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentCross/getInfo/GetPaymentCross/${id}`,
      method: 'get'
    })
  },
  // 修改更新
  updateData(paymentCross) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentCross/getInfo/updatePaymentCross`,
      method: 'post',
      data: paymentCross

    })
  }
}

