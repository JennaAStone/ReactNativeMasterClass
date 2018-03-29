import React, { Component } from 'react';
import { 
    AppRegistry,
    View
} from 'react-native';
import { RNCamera } from 'react-native-camera';


export default class CameraEx extends React.Component {

    render(){
  
        return(
            <View>
            <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
            />
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
            <TouchableOpacity
                onPress={this.takePicture.bind(this)}
            >
                <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
            </View>
          </View>
        );
    }

  
}
  

AppRegistry.registerComponent('Week 5 Misc', () => CameraEx);
