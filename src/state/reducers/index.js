const initialState = {
  config: undefined,
  responsive: 'multiple',
  result: undefined,
  selection: undefined,
  // filter
  // query
  // sort
}

const handlers = {}

export default function indexReducer(state = initialState, action) {
  let handler = handlers[action.type]
  if (!handler) return state
  return { ...state, ...handler(state, action) }
}
