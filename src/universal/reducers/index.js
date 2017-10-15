export function requiredPackages(state = [], action) {
  switch (action.type) {
    case 'ADD_REQUIRED_PACKAGE':
      return state.concat([{ text: action.text, url: action.url }])
    default:
      return state
  }
}
