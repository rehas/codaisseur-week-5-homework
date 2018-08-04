import React, {PureComponent} from 'react'
import {chooseToppings} from '../actions/pizzatoppings'
import {updatePrice} from '../actions/price'
import {connect} from 'react-redux'
import PizzaToppingsForm from './PizzaToppingsForm'


class PizzaToppingsContainer extends PureComponent{
  handleToppingsSelection = (selections) =>{
    console.log(selections)
    this.props.chooseToppings(selections)
    this.props.updatePrice()
  }

  render(){
    return(
      <div>
        <PizzaToppingsForm handleSelection = {this.handleToppingsSelection}/>
        
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    pizzaStatus:state.status
  }
}

export default connect(mapStateToProps, {updatePrice, chooseToppings})(PizzaToppingsContainer)