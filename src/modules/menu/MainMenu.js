import {IoIosPerson} from 'react-icons/io'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import React from 'react'

import Counter from '../../components/presentation/Counter'
import Logo from '../../components/shapes/Logo'
import Menu, {MenuLink} from '../../components/sctructure/Menu'

const MainMenu = ({goTo, favoritesCount}) => (
  <Menu
    leftContent={<Logo onClick={() => goTo('/')} />}
    rightContent={[
      <MenuLink onClick={() => goTo('/')}>Home</MenuLink>,
      <MenuLink onClick={() => goTo('/imoveis')}>Imóveis</MenuLink>,
      <Counter value={favoritesCount}>
        <MenuLink onClick={() => goTo('/favoritos')}>Favoritos</MenuLink>
      </Counter>,
      <IoIosPerson />,
    ]}
  />
)

const mapState = state => ({
  favoritesCount: state.favoriteBuildings.list.length,
})

const mapActions = d => ({
  goTo(path) {
    d(push(path))
  },
})

export default connect(mapState, mapActions)(MainMenu)
