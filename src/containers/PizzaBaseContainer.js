import React, {PureComponent} from 'react'
import {chooseBase} from '../actions/pizzabase'
import {updatePrice} from '../actions/price'
import {connect} from 'react-redux'
import PizzaBaseForm from './PizzaBaseForm'

class PizzaBaseContainer extends PureComponent{
  handleBaseFormChange = (selection)=>{
    this.props.chooseBase(selection)
    this.props.updatePrice()
  }

  render(){
    return (
      <div>
        <h4>Select Pizza Size</h4>
        <PizzaBaseForm handleChange = {this.handleBaseFormChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    base: state.pizzabase,
    status: state.status
  }
}

export default connect(mapStateToProps, {chooseBase, updatePrice})(PizzaBaseContainer)