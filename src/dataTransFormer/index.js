

const dataTransFormer = ({
  userIds,
  orderIds,
  userOrders,
  userData,
  orderData
}) => {
  //先將user相關的資料整理完
  const userEntities = userIds.map((userId) => {
    return { id: userId, name: userData[userId] }
  })

  //先將order相關的資料整理完
  const orderEntities = orderIds.map((orderId) => {
    let thisOrderData = orderData[orderId]
    return {
      id: orderId,
      name: thisOrderData.name,
      price: thisOrderData.price
    }
  })

  return userEntities.map((userEntity) => {
    // 把與這個user有關的OrderIds找出來
    const targetUserOrderIds = userOrders
      .filter(
        (info) => info.userId === userEntity.id
      )
      .map(info => info.orderIds)
      .flat()

    let targetUserOrders = []
    
    // 使用者沒訂單就直接跳過處理
    if (targetUserOrderIds.length > 0) {
      //利用前面的變數直接去存取已經整理好的order資料
      targetUserOrders = targetUserOrderIds.map((orderId) =>
        orderEntities.find(ele => ele.id === orderId)
      )
    }

    return {
      user: userEntity,
      order: [...targetUserOrders]
    }
  })

}


export default dataTransFormer