import React from 'react';
import { View ,Image, Text } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={{height:84,flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Image source={require("../assets/logo.png")}  style={{height:60,width:140}}/>
      </View>
    );
  }
}
