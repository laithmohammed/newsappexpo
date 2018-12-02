import React from 'react';
import {View, Image, Text } from 'react-native';

export default class NewsItem extends React.Component {
  render() {
    let { item } = this.props;
    let { urlToImage, title, description, publishedAt } = item;
    if(description){if (description.length > 150){ description = description.substring(0,150) + " ..." }}
    return (
      <View>
        <View style={{height:100,width:"98%",margin:"1%",padding:"1%",borderRadius:12,backgroundColor:"#efefef",display:"flex"}}>
          <View style={{flexDirection:"row"}}>
            <Image source={{uri : urlToImage}}  style={{height:92,width:92,borderRadius:10}}/>
            <View style={{flexDirection:"column",paddingLeft:"2%",justifyContent:"space-between",height:92,flex:1}}>
            <View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontWeight:"bold",textTransform:"capitalize",flex:1}}>{title}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{flex:1,paddingLeft:8}}>{description}</Text>
                </View>
              </View>
              <View>
                <Text style={{color:"blue"}}>{publishedAt}</Text>
              </View>
            </View>
          </View>
        </View>
      </View> 
    );
  }
}