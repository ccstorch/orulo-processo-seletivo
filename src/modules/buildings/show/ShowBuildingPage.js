import React from 'react'

import BuildingMainContent from './BuildingMainContent'
import BuildingSideBar from './BuildingSideBar'
import Col from '../../../components/grid/Col'
import Container from '../../../components/sctructure/Container'
import FullPageTemplate from '../../../components/templates/FullPageTemplate'
import Grid from '../../../components/grid/Grid'
import ShowBuildingPageHeader from './ShowBuildingPageHeader'

const ShowBuildingPage = ({match: {params}}) => (
  <FullPageTemplate>
    <ShowBuildingPageHeader />
    <Container>
      <Grid largeGutter>
        <Col flex={0} largeGutter>
          <BuildingSideBar />
        </Col>

        <Col largeGutter>
          <BuildingMainContent />
        </Col>
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default ShowBuildingPage
