const callbackF = (callback) => {
    setTimeout(() => {
        callback(undefined, [1, 4, 7])
    }, 2000)
}

callbackF((err, res) => {
    return err ?
        console.log(err)
        :
        console.log(res)
})