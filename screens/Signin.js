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
import md5 from "react-native-md5";
import firebase from 'firebase';
import styles from '../constants/Styles.js';
import User from '../constants/User.js';

export default class SigninScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)
    this.state = {
      mail: '',
      password: '',
    }
  }


  linkRegs = () => {
    this.props.navigation.navigate('Reg');
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  submitForm = async () => {
      let hash = md5.hex_md5(this.state.password+this.state.mail);
      const { navigate } = this.props.navigation;
      User.mail = this.state.mail;
      let users = firebase.database().ref("users").orderByChild("mail").equalTo(this.state.mail).once("value", function(resp) {
        if (resp.val() === null) {
					alert("Данные не введены")
				} else {
          let val = resp.val();
          val = val.filter(function(x) {
              return x !== undefined;
          });
          let passhash = val[0].password;
          if (passhash != hash) {
            alert("Неправильный логин или пароль")
          } else {
            User.id = val[0].id;
            AsyncStorage.setItem('userPhone',User.mail);
            navigate('App');
          }
        }
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Почта...'
          style={styles.input}
          value={this.state.mail}
          onChangeText={this.handleChange('mail')}
        />
        <TextInput
          placeholder='Пароль...'
          style={styles.input}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={this.handleChange('password')}
        />
        <TouchableOpacity style={styles.btn} onPress={this.submitForm}>
          <Text style={{color: '#fff', fontSize: 21, padding: 40, fontWeight: '500'}}>Авторизироваться</Text>
        </TouchableOpacity>
        <Text style={{paddingTop: 10}}>Ещё не зарегистрировны?</Text>
        <TouchableOpacity onPress={this.linkRegs}>
          <Text style={{color: '#F0626B'}}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
