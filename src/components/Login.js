import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image } from 'react-native'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import Toaster, { ToastStyles } from 'react-native-toaster'

//import Styles
import css from '../styles/login-styles'

const logo = require('../../assets/img/trecho/logo-header-alt.png');
export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = { username: '', password: '', loaded: true, message: null }
    this.auth = this.auth.bind(this)
  }

  componentWillMount(){
      firebase.initializeApp({
          apiKey: "AIzaSyDI8ROzBz9ebNmBXkeCNuqZgRGaCcngGs4",
          authDomain: "projeto-teste-4ed06.firebaseapp.com",
          databaseURL: "https://projeto-teste-4ed06.firebaseio.com",
          projectId: "projeto-teste-4ed06",
          storageBucket: "projeto-teste-4ed06.appspot.com",
          messagingSenderId: "869549393928"
        });
  }

  auth(){
    let email = "guaracyaraujolima@gmail.com"
      let senha = "123456"
      const usuario = firebase.auth()
      usuario.signInWithEmailAndPassword(email, senha)
              .then( ( res ) => {
                // console.log( Actions );
                Actions.main()
                alert('Bem vindo ao Sia Park Executive Hotel')
              })
              .catch( ( error ) => {
                let code = error.code
                let message = error.message
                alert(`Houve um erro ao logar-se ${message}`)
              })
  }

  render(){

    return(
      <View style={ css.container }>
        <View style={ css.loginCotainer }>

          <View style={ css.logo }>
            <Image source={ logo } style={ css.logoImage }/>
          </View>

          <TextInput
                    style={ css.input }
                    value={ this.state.username }
                    onChangeText={ ( username ) => this.setState({ username: username })}
                    placeholder={ 'Usuario' }
                    multiline={ false }/>

          <TextInput
                    style={ css.input }
                    value={ this.state.password }
                    onChangeText={ ( password ) => this.setState({ password: password })}
                    placeholder={ 'Senha' }
                    secureTextEntry={ true }
                    maxLength={ 12 }
                    multiline={ false }/>



          <Toaster message={this.state.message} />
          <TouchableHighlight style={ css.button } underlayColor={ '#328fe6' } onPress={ this.auth }>
            <Text style={ css.label }>Entrar</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => Actions.signup() }>
            <Text style={ css.signup }> Ainda não possui cadastro? registre-se</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
