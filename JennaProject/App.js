
import React, { Component } from 'react';
import {
  StyleSheet, 
  Text,
  View
} from 'react-native';
import Login from "./app/screens/Login"
import List from "./app/screens/Lists"

export default class App extends Component {
  render() {
    //return <Login />;
    return <List />;
  }
}
