import React from 'react';
import { ScrollView } from 'react-native';
import NewsItem  from './newsItem'

export default class NewsList extends React.Component {
  render() {
    const { ArticleData } = this.props;
    console.log(ArticleData)
    let Articles = ArticleData.map((data, i)=>{
      return <NewsItem item={data} key={i}/>
    })
    return (
      <ScrollView>
        {Articles}
      </ScrollView>
    );
  }
}