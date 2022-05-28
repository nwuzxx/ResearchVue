import request from '@/utils/request'

export default {
// 条件查询
  getList(current, limit, paymentLengthwaysQuery) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentLengthways/getInfo/pageConditionFind/${current}/${limit}`,
      method: 'post',
      data: paymentLengthwaysQuery
    })
  },
  // 删除
  removeDataById(id) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentLengthways/getInfo/deletePaymentCross/${id}`,
      method: 'delete'
    })
  },
  // 添加
  addData(paymentLengthways) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentLengthways/getInfo/addPaymentCross`,
      method: 'post',
      data: paymentLengthways
    })
  },
  // 回显
  getData(id) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentLengthways/getInfo/GetPaymentLengthways/${id}`,
      method: 'get'
    })
  },
  // 修改更新
  updateData(paymentLengthways) {
    return request({
      url: `/ResearchProjectCollectionSpringBootProjectPaymentLengthways/getInfo/updatePaymentCross`,
      method: 'post',
      data: paymentLengthways

    })
  }
}

