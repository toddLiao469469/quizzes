const debounce = (fn, wait) => {
    const callback = fn
    let timerId = null

    const debounced = (...rest) => {

        const context = this

        const args = rest

        clearTimeout(timerId)
        timerId = setTimeout(function () {
            callback.apply(context, args)
        }, wait)
    }


    return debounced
}


export default debounce