import React, { Component } from 'react';
import { 
    AppRegistry,
    View
} from 'react-native';
import PushNotificationAndroid from 'react-native-push-notification';

var PushNotification = require('react-native-push-notification');
 
PushNotification.configure({
 
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },
 
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
 
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
 
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },
 
    popInitialNotification: true,

    requestPermissions: true,
});