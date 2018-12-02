import React from 'react';
import { View ,Image, Text, StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  headerView : {height:48,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},
  headerLogo : {height:40,width:100},
  headerText : {fontSize:22,marginLeft:22}
})

export default class Header extends React.Component {
  render() {
    return (
      <View style={Style.headerView}>
        <Image source={require("../assets/logo.png")} resizeMode="contain" style={Style.headerLogo} />
        <Text style={Style.headerText}>App News</Text>
      </View>
    );
  }
}
