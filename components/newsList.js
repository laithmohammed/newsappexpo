import React from 'react';
import {View, Image } from 'react-native';

export default class NewsList extends React.Component {
  render() {
    return (
      <View  style={{flex:1}}>
        <View style={{height:100,width:"98%",margin:"1%",padding:"1%",borderRadius:12,backgroundColor:"#efefef",display:"flex"}}>
          <View>
            <Image source={require("../assets/newspaper.png")}  style={{height:92,width:92,borderRadius:10}}/>
          </View>
        </View>
      </View> 
    );
  }
}

//flex or height for see content of this tag