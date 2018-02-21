import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

//compnents
import Login from './components/Login'
// import Main from './components/Main'
// import Offers from './components/ui/Offers'
import BrazilianFood from './components/items_navigation/BrazilianFood'
import LightLunch from './components/items_navigation/LightLunch'
import Lunch from './components/items_navigation/Lunch'
import Snack from './components/items_navigation/Snack'

import App from './App'

export default props => (
  <Router>
    <Scene key='login' component={ Login } title="Sia Park Executive Hotel"/>
    <Scene key='main' component={ App } title="Sia Park Executive Hotel"/>
    <Scene key='brasilian_food' component={ BrazilianFood }  title="Almoço Brasileiro"/>
    <Scene key='light_lunch' component={ LightLunch }  title="Almoço levinho"/>
    <Scene key='lunch' component={ Lunch }  title="Almoço"/>
    <Scene key='snack' component={ Snack }  title="Lanches"/>
  </Router>
)
