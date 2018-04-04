export default (initialState, handlers) => {
  return (state = initialState, action) => {
    if (typeof handlers[action.type] === 'function') {
      return handlers[action.type](state, action);
    }
    return state
  }
}
