import React from 'react';
import {View, TextInput, Text} from 'react-native';

export default class SearchBox extends React.Component {
  render() {
    return (
      <View  style={{}}>
        <TextInput style={{height: 40,borderColor:"black",borderStyle:"solid",borderWidth:2,padding:"1%",paddingLeft:20,paddingRight:20,margin:"1%",backgroundColor:"white",borderRadius:30}} placeholder="search a topic"/>
      </View>
    );
  }
}

//stylesheet
