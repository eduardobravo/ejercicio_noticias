import React, {Component} from 'react'

export default class CategoryList extends Component{
  render(){
    const {categories}=this.props
    return(
      <ul>
        {categories.map(x => <li key={x.id}>(x.name)</li>)}
      </ul>
    )
  }
}