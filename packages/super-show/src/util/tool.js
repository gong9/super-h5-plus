/**  解析 location.search */
export const getParams = (string) => {
    const res = {}
    if (string && string.slice(1)) {
        string.slice(1).split("&").forEach(item => {
            const itemArr = item.split('=')
            res[itemArr[0]] = itemArr[1]
        })
    }
    if ('compInfo' in res) res.compInfo = JSON.parse(res.compInfo)

    return res
}

/** 防抖 */
export const debounce = (fn, wait = 200) => {
    let timeout = null;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(args);
        }, wait);
    };
};