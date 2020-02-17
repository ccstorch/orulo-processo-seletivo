import React from 'react'

import Col from '../../../components/grid/Col'
import Container from '../../../components/sctructure/Container'
import FullPageTemplate from '../../../components/templates/FullPageTemplate'
import Grid from '../../../components/grid/Grid'
import ListBuildings from './ListBuildings'
import ListBuildingsLoader from './ListBuildingsLoader'
import ListBuildingsPageHeader from './ListBuildingsPageHeader'
import Panel from '../../../components/sctructure/Panel'
import SearchBuildingsForm from './SearchBuildingsForm'
import Text from '../../../components/presentation/Text'

const ListBuildingsPage = () => (
  <FullPageTemplate>
    <ListBuildingsPageHeader />
    <Container>
      <Grid largeGutter>
        <Col flex={0} largeGutter>
          <Panel width="21rem" overflowToTop>
            <Text size="h3">Encontre o apartamento dos seus sonhos</Text>
            <SearchBuildingsForm />
          </Panel>
        </Col>

        <Col largeGutter>
          <ListBuildingsLoader>
            <ListBuildings />
          </ListBuildingsLoader>
        </Col>
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default ListBuildingsPage
