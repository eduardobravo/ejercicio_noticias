import React, { Component } from 'react'
import NewsForm from './NewsForm'
import NewsList from './NewsList'

export default class News extends Component{
  handleSubmit = payload => {
    const { addNews, selectCategory } = this.props
    addNews({ ...payload, categoryId: selectCategory })
  }
  render(){
    const { news } = this.props
    return (
      <div>
      <NewsForm onSubmit={this.handleSubmit} />
      <NewsList categories={news} />
      </div>
    );
  }
}