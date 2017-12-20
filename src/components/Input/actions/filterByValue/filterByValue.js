export default (name, value) => {
    return {
        type: 'FILTER_BY_VALUE',
        name,
        value
    }
}