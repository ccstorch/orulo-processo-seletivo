import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import React from 'react'

import {NUMBER_SELECT_OPTIONS} from '../../../config/const'
import {SET_BUILDINGS_FILTER_ITEM, TOGGLE_BUILDINGS_REFRESH} from './buildings.reducer'
import {sd} from '../../../helpers/redux'
import Button from '../../../components/actions/Button'
import Col from '../../../components/grid/Col'
import Grid from '../../../components/grid/Grid'
import InputText from '../../../components/form/InputText'
import ListBuildingTypesLoader from '../../buildingTypes/list/ListBuildingTypesLoader'
import Select from '../../../components/form/Select'
import SelectBuildingTypes from '../../buildingTypes/list/SelectBuildingTypes'

const OtherInputs = ({filter, onChange}) => (
  <div>
    <Grid noMarginTopBottom>
      <Col>
        <Select
          label="Suites"
          onChange={e => onChange('min_suites', e.target.value)}
          options={NUMBER_SELECT_OPTIONS}
          value={filter.suites}
        />
      </Col>

      <Col>
        <Select
          label="Vagas"
          onChange={e => onChange('parking', e.target.value)}
          options={NUMBER_SELECT_OPTIONS}
          value={filter.parking}
        />
      </Col>
    </Grid>
  </div>
)

class SearchBuildingsForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.refreshBuildingsList()
  }

  render() {
    const {shortForm, filter, onChange} = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <InputText label="Localização" value={filter.locale} onChange={e => onChange('locale', e.target.value)} />

        <ListBuildingTypesLoader>
          <SelectBuildingTypes
            label="Tipo de imóvel"
            onChange={e => onChange('type', [e.target.value])}
            value={filter.type}
          />
        </ListBuildingTypesLoader>

        <Grid noMarginTopBottom>
          <Col>
            <Select
              label="Quartos"
              onChange={e => onChange('bedrooms', e.target.value)}
              options={NUMBER_SELECT_OPTIONS}
              value={filter.bedrooms}
            />
          </Col>

          <Col>
            <Select
              label="Banheiros"
              onChange={e => onChange('bathrooms', e.target.value)}
              options={NUMBER_SELECT_OPTIONS}
              value={filter.bathrooms}
            />
          </Col>
        </Grid>

        {!shortForm && <OtherInputs filter={filter} onChange={onChange} />}

        <Button>Buscar</Button>
      </form>
    )
  }
}

const mapState = state => ({
  filter: state.buildings.filter,
})

const mapActions = d => ({
  onChange(field, value) {
    sd(d, SET_BUILDINGS_FILTER_ITEM, {field, value})
  },

  refreshBuildingsList() {
    alert(
      '**O filtro não está funcionando, toda vez que uso query params acaba retornando erro 400. Então, por enquanto, está somente encaminhando para a lista de todos os imoveis sem filtros. Os filtros estão sendo computados e formatados no código, somente não está sendo enviado para a api para não causar erro**',
    )
    d(push('/imoveis'))
    sd(d, TOGGLE_BUILDINGS_REFRESH)
  },
})

export default connect(mapState, mapActions)(SearchBuildingsForm)
