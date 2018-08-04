import React, {PureComponent} from 'react'
import {chooseBase} from '../actions/pizzabase'
import {updatePrice} from '../actions/price'
import {connect} from 'react-redux'
import PizzaBaseForm from './PizzaBaseForm'


class PizzaBaseContainer extends PureComponent{
  handleBaseFormChange = (selection)=>{
    this.props.chooseBase(selection)
    this.props.updatePrice({
      base: selection,
      sauce: this.props.sauce,
    })
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
    base: state.pizzabase,
    sauce: state.pizzasauce
  }
}

export default connect(mapStateToProps, {chooseBase, updatePrice})(PizzaBaseContainer)