import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import User from '../constants/User.js';
import firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyDCqEaGyOikDZEihTCzTVPZS2c5IvIE5aU",
      authDomain: "register-6454b.firebaseapp.com",
      databaseURL: "https://register-6454b.firebaseio.com",
      projectId: "register-6454b",
      storageBucket: "register-6454b.appspot.com",
      messagingSenderId: "911585335407",
      appId: "1:911585335407:web:cfa0a85cc97f5b0329159a"

    };
    firebase.initializeApp(firebaseConfig);
  }

  _bootstrapAsync = async() => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Reg');
  };

  render() {
    return(
      <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
        <StatusBar barstyle='default' />
      </View>
    );
  }
}
