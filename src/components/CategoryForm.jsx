import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

class CategoryForm extends Component{
  render(){
    const {handleSubmit}=this.props
    return(
      <form onSubmit={handleSubmit}>
        <Field name="name" component="imput" placeholder="Nombre de categoría" />
      </form>
    )
  }
}

export default reduxForm({
  form: 'catogory',
})(CategoryForm)