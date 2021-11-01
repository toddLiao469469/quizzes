import Stack from "../stack";
import fibonacci from "../fibonacci";
import dataTransFormer from "../dataTransFormer";
import {
  userIds,
  orderIds,
  userOrders,
  userData,
  orderData,
} from "../dataTransFormer/data"
const result = () => {
  console.log("fibonacci:")
  const fibonacciTestData = [0, 1, 2, 3, 4]
  fibonacciTestData.forEach((x) => {
    console.log(fibonacci(x))
  })
  console.log("------------\n\n")

  console.log("Stack:")
  const myStack = new Stack()
  myStack.push(1)
  myStack.push(2)
  myStack.push(3)
  const popResult = myStack.pop()
  const size = myStack.size()
  console.log(popResult, size)

  console.log("------------\n\n")

  console.log("dataTransFormer:")

  const result = dataTransFormer({
    userIds,
    userData,
    orderIds,
    orderData,
    userOrders,
  })
  console.log(result)
};

export default result
