const initialState = {
    filterByValue: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_BY_VALUE':
        return { ...state, filterByValue: { name: action.name, value: action.value } }
      default:
        return state
    }
}