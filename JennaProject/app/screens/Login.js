
import React, { Component } from 'react';
import {
  StyleSheet, 
  Text,
  View,
  Button,
  TextInput,
  Alert,
  FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      firstname: ''
    }
  };

  onChangeText = (key, value) => {
    this.setState({
        [key]: value
    })
  }

  render() {

    const { params } = this.props.navigation.state;
    const userN = params ? params.user : null;
    const pass = params ? params.password : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>User Name: {JSON.stringify(userN)}</Text>
        <Text>Password: {JSON.stringify(pass)}</Text>
        <TextInput
          style={{height: 40, width:300, borderColor: 'gray', borderBottomWidth: 1}}
          placeholder="Enter your First Name"
          value={this.state.firstname}
          onChangeText = {(value) => this.setState({firstname: value})}          
        >
        </TextInput>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything goes here' ,
              firstname: this.state.firstname,
            });
          }}
        />
      </View>
    );
  }
}

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  };

  onChangeText = (key, value) => {
    this.setState({
        [key]: value
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.topSpacer} />
          <Text>User Name:</Text>
          <TextInput
            style={{height: 40, width:300, borderColor: 'gray', borderBottomWidth: 1}}
            placeholder="Enter User Name"
            value={this.state.username}
            onChangeText = {(value) => this.setState({username: value})}
          />
          <Text style={{marginTop:20}}>Password:</Text>
          <TextInput 
            style={{height: 40, width:300, borderColor: 'gray', borderBottomWidth: 1}}
            placeholder="Enter Password"
            value={this.state.password}
            onChangeText = {(value) => this.setState({password: value})}
          />
          <View style={styles.buttonSpacer} />
          <Button
              title="Login"
              onPress={() => {
                this.props.navigation.navigate('Home', {
                  user: this.state.username,
                  password: this.state.password,
                });
              }}
        />
      </View>
    );
  }
}


class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  updateFirstName() {
    //change FirstName
  }

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam: null;
    const firstName = params ? params.firstname: null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text id="firstNameText">First Name: {JSON.stringify(firstName)}</Text>
        <Button
          title="Go to Details...again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Change First Name"
          onPress={this.updateFirstName}
        />
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }

}


const RootStack = StackNavigator (
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  }, 
  {
    initialRouteName: 'Login',
  }
);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#BBDEFB"
  },

  topSpacer: {
    flex: 0.3
  },

  buttonSpacer: {
    flex: 0.2
  }
});

export default class App extends React.Component{
  render() {
    return <RootStack />;
  }
}