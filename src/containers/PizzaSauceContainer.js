import React, {PureComponent} from 'react'
import {chooseSauce} from '../actions/pizzasauce'
import {updatePrice} from '../actions/price'
import {connect} from 'react-redux'
import PizzaSauceForm from './PizzaSauceForm'

class PizzaSauceContainer extends PureComponent{
  handleSauceFormChange = (selection)=>{
    this.props.chooseSauce(selection)
    this.props.updatePrice()
  }
  render(){
    return (
      <div>
        <h4> Select Pizza Sauce  </h4>
        <PizzaSauceForm handleChange = {this.handleSauceFormChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    sauce: state.pizzasauce
  }
}

export default connect(mapStateToProps, {chooseSauce, updatePrice})(PizzaSauceContainer)