import React from 'react'

import FullPageTemplate from '../../components/templates/FullPageTemplate'
import Header from '../../components/sctructure/Header'
import Panel from '../../components/sctructure/Panel'
import SearchBuildingsForm from '../buildings/list/SearchBuildingsForm'
import Text from '../../components/presentation/Text'

const HomePage = () => (
  <FullPageTemplate>
    <Header fullScreen overlay>
      <Panel width="26rem">
        <Text size="h2">A casa dos seus sonhos está a apenas alguns cliques</Text>
        <SearchBuildingsForm shortForm />
      </Panel>
    </Header>
  </FullPageTemplate>
)

export default HomePage
