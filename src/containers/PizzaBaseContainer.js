import React, {PureComponent} from 'react'
import {chooseBase} from '../actions/pizzabase'
import {connect} from 'react-redux'
import PizzaBaseForm from './PizzaBaseForm'


class PizzaBaseContainer extends PureComponent{
  handleBaseFormChange = (selection)=>{
    this.props.chooseBase(selection)
  }

  render(){
    return (
      <div>
        <PizzaBaseForm handleChange = {this.handleBaseFormChange}/>
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  return {
    sauce: state.pizzasauce
  }
}

export default connect(mapStateToProps, {chooseBase})(PizzaBaseContainer)