import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image } from 'react-native'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import Toaster, { ToastStyles } from 'react-native-toaster'

//componets

import Offers from './ui/Offers'
//import Styles
import css from '../styles/login-styles'

const logo = require('../../assets/img/logo.png');
export default class Main extends Component{

  render(){

    return(
      <Offers />
    )
  }
}
