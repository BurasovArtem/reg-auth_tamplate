import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
input: {
  padding: 10,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: '#ccc',
  width: '90%',
  marginBottom: 30,
},
profileView: {
  width: '90%',
  height: 100,
  borderRadius: 10,
  flexDirection:'row',
  justifyContent: 'center',
  backgroundColor: '#e2dcdc',
},
progressBlock: {
  margin: 15
},
profileDesc: {
  height: 40,
  justifyContent: 'center',
  borderBottomWidth: 1,
  paddingTop: 10,
  paddingLeft: 10,
  fontSize: 15
},
inputChat: {
  padding: 10,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#1a1c1a',
  borderRadius: 40,
  width: '80%',
  marginBottom: 10
},
btn: {
  marginTop: 50,
  marginHorizontal: 30,
  backgroundColor: '#50B9A0',
  borderRadius: 30,
  height: 60,
  alignItems: 'center',
  justifyContent: 'center',
},
bottomBar: {
  backgroundColor: '#eee',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 5,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 2,
  height: 60
},
btnSend: {
  alignItems: 'center',
  marginBottom: 10,
  marginLeft: 15,
  height: 40,
  width: 40,
  paddingTop: 10,
  paddingLeft: 5,
  backgroundColor: '#e9446a',
  borderRadius: 20
},
myLocation: {
 position: 'absolute',
 width: 40,
 height: 40,
 backgroundColor: '#fff',
 shadowColor: '#000000',
 elevation: 7,
 shadowRadius: 5,
 shadowOpacity: 1.0,
 justifyContent: 'space-around',
 alignItems: 'center',
 right: 0,
 top: 0,
 margin: 10
},
avatar: {
  marginTop: 20,
  height: 120,
  width: 120,
  borderRadius: 60,
  backgroundColor: '#50B9A0',
},
name: {
  margin: 20,
  fontSize: 20,
  fontWeight: 'bold'
},
modal: {
  backgroundColor: 'white',
  width: '80%',
  marginLeft: '10%',
  height: '80%',
  marginTop: '10%',
  shadowColor: "#000",
  shadowOffset: {
  	width: 0,
  	height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
  textAlign: 'center',
},
modalBtn: {
  width: '70%',
  justifyContent: 'center',
  height: 50,
  borderRadius: 25,
  marginLeft: '15%'
},
eventText: {
  paddingLeft: 20,
  paddingTop: 35,
  paddingRight: 10
},
eventButton: {
  backgroundColor: '#50B9A0',
  width: '80%',
  height: 60,
  borderRadius: 30,
  justifyContent: 'center',
  textAlign: 'center',
  bottom: 60,
  left: '10%',
  position: 'absolute'
},
modalText: {
  paddingLeft: 20,
  paddingTop: 20,
  paddingRight: 10
},
textBtn: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 20
},
circle: {
 width: 50,
 height: 50,
 borderRadius: 25,
 backgroundColor: '#50B9A0',
 justifyContent: 'center'
},
textCircle: {
 textAlign: 'center',
 color: 'black'
},
progressNumber: {
 color: 'white',
 textAlign: 'center',
 fontSize: 20,
 fontWeight: 'bold'
},
wrapper: {

},
vertricalScroll: {
  width: '100%',
  flex: 1,
},
touchable: {
  width: '100%',
  height: 60,
  justifyContent: 'center',
  padding: 10,
  borderBottomColor: '#ccc',
  borderBottomWidth: 1
},
touchableText: {
  fontSize: 25
},
});

export default styles;
