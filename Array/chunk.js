
function chunk(array, size = 1) {
    let len = array === null ? 0 : array.length
    if (!len || size < 1) return []

    let index = 0,
        resIndex = 0,
        result = Array(Math.floor(len / size))

    while (index < len) {
        let end=index+size;
        result[resIndex++] = array.slice(index, end)
        index+=size;
    }
    return result
}

console.log(chunk(['a', 'b', 'c', 'd'], 1))
