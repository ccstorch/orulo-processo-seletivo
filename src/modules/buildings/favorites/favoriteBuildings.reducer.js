import {hasObjectWithID} from '../../../helpers/collection'

const defaultState = {list: []}

export const TOGGLE_FAVORITE_BUILDING = 'TOGGLE_FAVOTIRE_BUILDING'

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE_BUILDING:
      let list = state.list
      const isNew = !hasObjectWithID(state.list, action.payload.id)
      if (isNew) {
        list = [...list, action.payload]
      } else {
        list = list.filter(item => item.id !== action.payload.id)
      }
      return {...state, list}

    default:
      return state
  }
}

export default reducer
