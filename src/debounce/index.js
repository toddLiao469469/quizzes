const debounce = (fn, timeout) => {
  const callback = fn
  let timerId = null

  const debounced = (...rest) => {

    const context = this

    const args = rest

    clearTimeout(timerId)
    timerId = setTimeout(function () {
      callback.apply(context, args)
    }, timeout)
  }


  return debounced
}


export default debounce