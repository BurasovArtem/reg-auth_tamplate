import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';
import styles from '../constants/Styles.js';
import User from '../constants/User.js';


export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static navigationOptions = {
    header: null
  }

  _logOut = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20}} onPress={this._logOut}>
          <MaterialCommunityIcons
                name='logout'
                color='black'
                size={30}
            />
        </TouchableOpacity>
        <Text>Home</Text>
      </View>
    )
  }
}
