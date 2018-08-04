import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {resetProcess} from '../actions/price'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class PizzaPriceContainer extends PureComponent{
  handleClick = () =>{
    this.props.resetProcess()
  }
  render(){
    return (
      <div>
        <h2>
        {(this.props.status.base !==null && this.props.status.base !== 0) &&  this.props.price}
        </h2>
        <Button color="secondary" onClick={this.handleClick}>RESET</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    price: state.currentPrice,
    status : state.status
  }
}

export default connect(mapStateToProps, {resetProcess})(PizzaPriceContainer)