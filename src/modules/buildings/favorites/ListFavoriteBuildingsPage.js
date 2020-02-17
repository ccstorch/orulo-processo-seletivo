import React from 'react'

import Container from '../../../components/sctructure/Container'
import FullPageTemplate from '../../../components/templates/FullPageTemplate'
import ListFavoriteBuildings from './ListFavoriteBuildings'
import ListFavoriteBuildingsPageHeader from './ListFavoriteBuildingsPageHeader'

const ListBuildingsPage = () => (
  <FullPageTemplate>
    <ListFavoriteBuildingsPageHeader />
    <Container>
      <ListFavoriteBuildings />
    </Container>
  </FullPageTemplate>
)

export default ListBuildingsPage
