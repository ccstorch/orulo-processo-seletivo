import {connect} from 'react-redux'
import React from 'react'

import {formatFullAddress} from '../../../helpers/address'
import Gallery from '../../../components/presentation/Gallery'
import GoogleMap from '../../../components/presentation/GoogleMap'
import Text from '../../../components/presentation/Text'
import TitleContent from '../../../components/presentation/TitleContent'

const BuildingMainContent = ({building}) => {
  if (!building.id) return false
  const hasImage = !!building.default_image
  const thumb = hasImage && building.default_image['520x280']

  return (
    <div>
      <TitleContent title="Descrição">
        <Text size="p">{building.description}</Text>
      </TitleContent>

      <TitleContent title="Endereço">
        <Text size="p">{formatFullAddress(building.address)}</Text>
        <GoogleMap address={building.address} />
      </TitleContent>

      {hasImage && (
        <TitleContent title="Galeria de imagens">
          <Gallery images={[thumb, thumb, thumb, thumb, thumb, thumb]} />
        </TitleContent>
      )}
    </div>
  )
}

const mapState = state => ({
  building: state.building.single,
})

export default connect(mapState)(BuildingMainContent)
