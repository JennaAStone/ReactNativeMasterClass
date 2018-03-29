
import React, { Component } from 'react';
import {
  StyleSheet, 
  Text,
  View,
  Button,
  FlatList,
  AppRegistry,
  SectionList,
  TouchableOpacity,
  ScrollView,
  Modal
} from 'react-native';

export default class ListExampleComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleList: [],
            listRefreshing: false
        };
    }

    state = {
        modalVisible: false,
      };

      openModal() {
        this.setState({modalVisible:true});
      }
    
      closeModal() {
        this.setState({modalVisible:false});
      }

   render() {
       var flatData = [
            {key: "Names"},
            {key: "Places"},
            {key: "Objects"} 
       ]

       var sectionData = [
            {title: "A", data: [{key: "Jennifer"}, {key:"Jennifer Stone"}], key:"A"},
            {title: "B", data: [{key: "Annette"}, {key:"Annette Alten"}], key:"B"},
            {title: "C", data: [{key: "James"}, {key: "James Smith"}], key: "C"},
            {title: "D", data: [{key: "Sara"}, {key: "Sara Lowry"}], key: "D"},
            {title: "E", data: [{key: "Robin"}, {key: "Robin Jam"}], key: "E"},
            {title: "F", data: [{key: "Kevin"}, {key: "Kevin Hart"}], key: "F"},
            {title: "G", data: [{key: "George"}, {key: "George Curious"}], key: "G"}
       ];
       return (
            <View style={styles.container}>        
                <View style={{flex:1, paddingTop: 30}}> 
                    <TouchableOpacity onPress={() => this.openModal()}>
                        <FlatList
                            data={flatData}
                            renderItem={
                                ({item}) => <Text style={{padding:10, color:"green"}}>{item.key}</Text>
                            }
                        >
                        </FlatList>
                    </TouchableOpacity>
                </View>

                <Modal
                        visible={this.state.modalVisible}
                        animationType={'slide'}
                        onRequestClose={() => this.closeModal()}
                        >
                        <ScrollView>
                        <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                                <SectionList
                                    sections={sectionData}
                                    renderItem={
                                        ({item}) => <Text style={{padding:10, color:"red"}}>{item.key}</Text>
                                    }
                                    renderSectionHeader={
                                        ({section}) => <Text>{section.title}</Text>
                                    }
                                >
                                </SectionList>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Close modal"
                            >
                            </Button>
                        </View>
                        </View>
                        </ScrollView>
                    </Modal>
            </View>
        );
   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      paddingTop: 150,
      justifyContent: 'center',
      backgroundColor: '#D3D3D3',
    },
    innerContainer: {
      alignItems: 'center',
    },
  });

AppRegistry.registerComponent('List Components', () => ListExampleComponent);
