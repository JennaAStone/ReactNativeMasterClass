import React, { Component } from 'react';
import { 
    FlatList, 
    ActivityIndicator, 
    Text, 
    View,
    Button,
    AppRegistry,
    AsyncStorage  
    } from 'react-native';
  
export default class GetMovieData extends React.Component {
  
    constructor(props){
      super(props);
      this.state ={ 
          isLoading: true,
          saveMovie: false,
          showMovie: false,
          favMovie: null
        }
    }
  
    SaveFavMovie() {
        //_SaveFav = async () => {
        try {
            AsyncStorage.setItem('@FavMovie:key', 'Beaches');
            } catch (error) {
                // Error saving data
                alert(error);
            }
        //};
    }

    ShowFavMovie() {
        //_RetrieveFavMovie = async () => {
            try {
                const value = AsyncStorage.getItem('@FavMovie:key');
                if (value !== null){
                  //this.setState({
                  //  favMovie: value,
                 //})
                 //alert(value);
                }
              } catch (error) {
                // Error retrieving data
                alert(error);
              }
        //};
    }

    componentDidMount(){
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
          }, function(){
  
          });
        })
        .catch((error) =>{
          console.error(error);
        }); 

    }
  
    render(){
  
     /*  if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }  */
  
      return(
        <View style={{flex: 1, paddingTop:30}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
            keyExtractor={(item, index) => index}
          /> 
          <Button
            title="Store Favorite Movie in Async Storage"
            
            onPress={this.SaveFavMovie} 
          >
          </Button>
          <Button
            title="Show Favorite Movie from Async Storage"
            onPress={this.ShowFavMovie}
          > 
          </Button>
          <Text>Favorite Movie: {this.favMovie}</Text>
        </View>
      );
    }
  }
  

AppRegistry.registerComponent('Data Components', () => GetMovieData);
