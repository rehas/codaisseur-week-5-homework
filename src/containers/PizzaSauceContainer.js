import React, {PureComponent} from 'react'
import {chooseSauce} from '../actions/pizzasauce'
import {connect} from 'react-redux'
import PizzaSauceForm from './PizzaSauceForm'


class PizzaSauceContainer extends PureComponent{
  handleBaseFormChange = (selection)=>{
    this.props.chooseSauce(selection)
  }
  render(){
    return (
      <div>
        PizzaSauceContainer
        <PizzaSauceForm handleChange = {this.handleBaseFormChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    sauce: state.pizzasauce
  }
}


export default connect(mapStateToProps, {chooseSauce})(PizzaSauceContainer)