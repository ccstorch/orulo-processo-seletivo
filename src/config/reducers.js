import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import building from '../modules/buildings/show/building.reducer.js'
import buildingTypes from '../modules/buildingTypes/list/buildingTypes.reducer.js'
import buildings from '../modules/buildings/list/buildings.reducer.js'
import favoriteBuildings from '../modules/buildings/favorites/favoriteBuildings.reducer.js'
import addresses from '../modules/addresses/_common/addresses.reducer.js'

export default history =>
  combineReducers({
    buildings,
    favoriteBuildings,
    building,
    buildingTypes,
    addresses,
    router: connectRouter(history),
  })
