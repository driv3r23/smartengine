const initialState = {
    filter: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_BY_ARTICLE':
        return { ...state, filter: action.value }
      default:
        return state
    }
}