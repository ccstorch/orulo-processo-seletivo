import {FaBed, FaShower, FaCarAlt} from 'react-icons/fa'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import React from 'react'

import {SET_BUILDING_SINGLE} from '../show/building.reducer'
import {formatShortNumber} from '../../../helpers/number'
import {formatShortRegion} from '../../../helpers/address'
import {sd} from '../../../helpers/redux'
import BuildingFavoriteToggler from './BuildingFavoriteToggler'
import Card from '../../../components/presentation/Card'
import Col from '../../../components/grid/Col'
import Grid from '../../../components/grid/Grid'
import IconCounter from '../../../components/presentation/IconCounter'
import Text from '../../../components/presentation/Text'

const BuildingCard = ({building, goTo}) => (
  <Card
    image={building.default_image && building.default_image['520x280']}
    actionLabel="Ver Detalhes"
    action={() => goTo(building)}
    title={building.name}
    subtitle={formatShortRegion(building.address)}
    imageSubContent={
      <Grid plain>
        <IconCounter Icon={FaBed} value={building.min_bedrooms} />
        <IconCounter Icon={FaShower} value={building.min_bathrooms} />
        <IconCounter Icon={FaCarAlt} value={building.min_parking} />
      </Grid>
    }
    content={
      <Grid>
        <Col flex={1}>
          <Text size="small">
            R${formatShortNumber(building.min_price)} | {building.min_area}m2
          </Text>
        </Col>

        <Col flex={0}>
          <BuildingFavoriteToggler building={building} />
        </Col>
      </Grid>
    }
  />
)

const mapActions = d => ({
  goTo(building) {
    sd(d, SET_BUILDING_SINGLE, building)
    d(push('imoveis/' + building.id))
  },
})

export default connect(null, mapActions)(BuildingCard)
