import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAm98DcTR79CWa2DuFb9oCSnTx6pBegJ48',
      authDomain: 'authentication-3c78a.firebaseapp.com',
      databaseURL: 'https://authentication-3c78a.firebaseio.com',
      projectId: 'authentication-3c78a',
      storageBucket: 'authentication-3c78a.appspot.com',
      messagingSenderId: '198351235556'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;