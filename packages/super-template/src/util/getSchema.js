const getSchma = (comp) => {
    if (comp.schema) return comp.schema
    new Error('每个组件必须有一个对应的scheme')

}

export default getSchma