import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io'
import {connect} from 'react-redux'
import React from 'react'

import {TOGGLE_FAVORITE_BUILDING} from '../favorites/favoriteBuildings.reducer'
import {hasObjectWithID} from '../../../helpers/collection'
import {sd} from '../../../helpers/redux'
import IconLink from '../../../components/actions/IconLink'

const BuildingFavoriteToggler = ({building, favorites, toggle}) => {
  const props = {
    Icon: IoIosHeartEmpty,
    iconColor: '#E23D3D',
    children: 'Add Favorito',
    onClick: () => toggle(building),
  }

  if (building && hasObjectWithID(favorites, building.id)) {
    props.Icon = IoIosHeart
    props.color = props.iconColor
    props.children = 'Remover Favorito'
  }

  return <IconLink {...props} />
}

const mapState = state => ({favorites: state.favoriteBuildings.list})

const mapAction = d => ({
  toggle(building) {
    sd(d, TOGGLE_FAVORITE_BUILDING, building)
  },
})

export default connect(mapState, mapAction)(BuildingFavoriteToggler)
