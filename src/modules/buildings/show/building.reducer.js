export const SET_BUILDING_SINGLE = 'SET_BUILDING_SINGLE'

const defaultState = {single: {}, isLoading: true}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_BUILDING_SINGLE:
      return {...state, single: action.payload, form: action.payload, isLoading: false}

    default:
      return state
  }
}

export default reducer
