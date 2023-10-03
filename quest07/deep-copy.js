const deepCopy = (obj) => {
    if (Array.isArray(obj)) {
        let copied = []
        copied.push(...deepCopy(obj))
        return copied
    } else if (typeof obj === 'object') {
        let copied = {}
        copied = {...deepCopy(obj)}
        return copied
    } else {
        return obj
    }
}
