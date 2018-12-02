import React from 'react';
import {View } from 'react-native';
import {Constants} from "expo";

import Header from "../components/header";
import NewsList from "../components/newsList";
import SearchBar from "../components/searchBar";

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ArticleData     : []
    }
    this.getArticlesData();
  }

  getArticlesData(target="iraq"){
    let date = new Date()
    fetch(`https://newsapi.org/v2/everything?q=${target}&from=${date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay}&sortBy=publishedAt&apiKey=b60f15202abc40cf895fd1162f96752b&pageSize=20`)
    .then( response => response.json() )
    .then( data => { this.setState({ArticleData : data.articles}); } ) 
    
  }

  render() {
    return (
      <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
          <Header />
          <SearchBar getArticlesDataFun={this.getArticlesData.bind(this)}/>
          <NewsList ArticleData={this.state.ArticleData}/>
      </View>
    );
  }
}
