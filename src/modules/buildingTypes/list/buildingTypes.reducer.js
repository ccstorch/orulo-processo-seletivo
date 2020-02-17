const defaultState = {list: {}}

export const SET_BUILDING_TYPES_LIST = 'SET_BUILDING_TYPES_LIST'

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_BUILDING_TYPES_LIST:
      return {...state, list: action.payload}

    default:
      return state
  }
}

export default reducer
