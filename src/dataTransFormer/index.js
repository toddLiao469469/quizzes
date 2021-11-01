

const dataTransFormer = ({
  userIds,
  orderIds,
  userOrders,
  userData,
  orderData
}) => {
  const userEntities = userIds.map((userId) => {
    return { id: userId, name: userData[userId] }
  })
  const orderEntities = orderIds.map((orderId) => {
    let thisOrderData = orderData[orderId]
    return {
      id: orderId,
      name: thisOrderData.name,
      price: thisOrderData.price
    }
  })

  return userEntities.map((userEntity) => {
    const targetUserOrderIds = userOrders
      .filter(
        (info) => info.userId === userEntity.id
      )
      .map(info => info.orderIds)
      .flat()

    let targetUserOrders = []
    if (targetUserOrderIds.length > 0) {
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