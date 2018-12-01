import React from 'react';
import {View } from 'react-native';
import {Constants} from "expo";

import Header from "../components/header";
import NewsList from "../components/newsList";
import SearchBar from "../components/searchBar";

export default class Main extends React.Component {
  render() {
    return (
      <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
          <Header />
          <SearchBar />
          <NewsList />
      </View>
    );
  }
}
