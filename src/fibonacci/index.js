const fibonacci = (n) => {
  if (!fibonacci.cache) {
    fibonacci.cache = {
      0: 0,
      1: 1,
    };
  }
  //使用cache讓已經算過的值不用再重新跑遞迴
  if (fibonacci.cache[n] !== undefined) {
    return fibonacci.cache[n]
  }
  fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return fibonacci.cache[n]
}

export default fibonacci
