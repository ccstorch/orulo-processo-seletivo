const defaultState = {states: [], cities: []}

export const SET_ADDRESSES_STATES = 'SET_ADDRESSES_STATES'
export const SET_ADDRESSES_CITIES = 'SET_ADDRESSES_CITIES'

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ADDRESSES_STATES:
      return {...state, states: action.payload}

    case SET_ADDRESSES_CITIES:
      return {...state, cities: action.payload}

    default:
      return state
  }
}

export default reducer
