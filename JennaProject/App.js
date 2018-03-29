
import React, { Component } from 'react';
import {
  StyleSheet, 
  Text,
  View
} from 'react-native';
import Login from "./app/screens/Login"
import List from "./app/screens/Lists"
import Data from "./app/screens/Data"
//import CameraEx from "./app/screens/Week5"
//import NotificationEx from "./app/screens/Notification"
import SwiperEx from "./app/screens/Swiper"

export default class App extends Component {
  render() {
    //return <Login />;
    //return <List />;
    //return <Data />;
    //return <CameraEx />;
    //return <NotificationEx />;
    return <SwiperEx />;
  }
}
