const defaultState = {
  list: [],
  filter: {},
  total: 0,
  page: 1,
  isLoading: true,
  refresh: false,
  isLoadingMore: false,
  canLoadMore: false,
}

export const SET_BUILDINGS_LIST = 'SET_BUILDINGS_LIST'
export const MERGE_BUILDINGS_LIST = 'MERGE_BUILDINGS_LIST'
export const SET_BUILDINGS_LOADING = 'SET_BUILDINGS_LOADING'
export const ADD_BUILDINGS_PAGE = 'ADD_BUILDINGS_PAGE'

export const SET_BUILDINGS_FILTER_ITEM = 'SET_BUILDINGS_FILTER_ITEM'
export const TOGGLE_BUILDINGS_REFRESH = 'TOGGLE_BUILDINGS_REFRESH'

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_BUILDINGS_LIST:
      var {buildings, total, total_pages, page} = action.payload
      return {...state, list: buildings, total, page: 1, isLoading: false, canLoadMore: total_pages > page}

    case MERGE_BUILDINGS_LIST:
      var {buildings, page, total, total_pages} = action.payload
      return {...state, list: [...state.list, ...buildings], isLoadingMore: false, canLoadMore: total_pages > page}

    case SET_BUILDINGS_LOADING:
      return {...state, isLoading: action.payload}

    case ADD_BUILDINGS_PAGE:
      return {...state, page: state.page + 1, isLoadingMore: true}

    case SET_BUILDINGS_FILTER_ITEM:
      const {field, value} = action.payload
      return {...state, filter: {...state.filter, [field]: value}}

    case TOGGLE_BUILDINGS_REFRESH:
      return {...state, refresh: !state.refresh}

    default:
      return state
  }
}

export default reducer
