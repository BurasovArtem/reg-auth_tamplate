import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as Google from 'expo-google-app-auth';
import * as AuthSession from 'expo-auth-session';
import VKLogin from 'react-native-vkontakte-login';
import md5 from "react-native-md5";
import firebase from 'firebase';
import styles from '../constants/Styles.js';
import User from '../constants/User.js';

const ANDROID_CLIENT_ID = "364976252069-dl2mgujngpf49s03ra4t551alh95sk7f.apps.googleusercontent.com";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      name: '',
      mail: '',
      password: '',
      birth: '',
      signedIn: false,
      photoUrl: ""
    }
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  linkAuth = () => {
    this.props.navigation.navigate('Auth');
  }

  submitForm = async () => {
    if (this.state.phone.length < 10) {
      alert('Заполните все поля')
    }
    else if (this.state.name.length < 3) {
      alert('Заполните все поля')
    }
    else {
      let getLast = firebase.database().ref('users').limitToLast(1);
      getLast.once("value", function(resp){
        let lastID = (resp.val() === null) ? -1 : +Object.keys(resp.val())[0];
        pushItem(lastID + 1)
      })

      await AsyncStorage.setItem('userPhone',this.state.mail);
      User.phone = this.state.mail;

      var MAIL = this.state.mail;
      var PASSHASH = md5.hex_md5(this.state.password+this.state.mail);
      var NAME = this.state.name;
      var NUMBER = this.state.phone;
      var BIRTH = this.state.birth;

      function pushItem(ID) {
       firebase.database().ref('users/').child(ID).set({
         id: ID,
         mail: MAIL,
         name: NAME,
         phone: NUMBER,
         birth: BIRTH,
         password: PASSHASH,
         image: '',
         points: 0,
         steps: 0
       });
       User.id = ID;
     }
     this.props.navigation.navigate('App');
    }
  }

  google = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      })
      console.log(result);
      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }

    } catch (e) {
      console.log("error", e)
    }
  }

  vk = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
        authUrl: 'https://oauth.vk.com/authorize?client_id=471609274&display=mobile&redirect_uri=' +
        encodeURIComponent(redirectUrl) + '&response_type=token&v=5.92',
    });
    console.log(result)
    if (result.type === 'success') {
      console.log(result)
        // обрабатываете полученный токен, получаете информацию о пользователе, etc
    } else {
      console.log("cancelled")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Имя...'
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TextInput
          placeholder='Номер...'
          keyboardType='phone-pad'
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
        />
        <TextInput
          placeholder='Почта...'
          style={styles.input}
          value={this.state.mail}
          onChangeText={this.handleChange('mail')}
        />
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          placeholder='Дата рождения...'
          style={styles.input}
          value={this.state.birth}
          onChangeText={this.handleChange('birth')}
        />
        <TextInput
          placeholder='Пароль...'
          style={styles.input}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={this.handleChange('password')}
        />
        <TouchableOpacity onPress={this.google}>
          <Text>google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.vk} style={{paddingTop: 20}}>
          <Text>vk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.submitForm}>
          <Text style={{color: '#fff', fontSize: 21, padding: 40, fontWeight: '500'}}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={{paddingTop: 10}}>Уже зарегистрированы?</Text>
        <TouchableOpacity onPress={this.linkAuth}>
          <Text style={{color: '#F0626B'}}>Авторизация</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
