import {Route, Switch} from 'react-router'
import React from 'react'

import HomePage from '../modules/home/HomePage'
import ListBuildingsPage from '../modules/buildings/list/ListBuildingsPage'
import ListFavoriteBuildingsPage from '../modules/buildings/favorites/ListFavoriteBuildingsPage'
import ShowBuildingPage from '../modules/buildings/show/ShowBuildingPage'

const Routes = () => (
  <div className="page-wrapper">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/imoveis" component={ListBuildingsPage} />
      <Route exact path="/imoveis/:id" component={ShowBuildingPage} />
      <Route exact path="/favoritos" component={ListFavoriteBuildingsPage} />
    </Switch>
  </div>
)

export default Routes
