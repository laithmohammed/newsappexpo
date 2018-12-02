import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  textInput : {height: 40,borderColor:"black",borderStyle:"solid",borderWidth:2,padding:"1%",paddingLeft:20,paddingRight:20,margin:"1%",backgroundColor:"white",borderRadius:30}
})

export default class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      SearchValue   : ""
    }
  }

  setSearchVal(event){
    let value = event.nativeEvent.text
    if(!value){
      value = "iraq"
    }
    this.setState({ SearchValue : value });
    this.props.getArticlesDataFun(value)
  }

  render() {
    return (
      <View>
        <TextInput style={Style.textInput} placeholder="search a topic" onSubmitEditing={this.setSearchVal.bind(this)} defaultValue={this.state.SearchValue} />
      </View>
    );
  }
}
