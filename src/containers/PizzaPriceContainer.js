import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class PizzaPriceContainer extends PureComponent{
  render(){
    return (
      <div>
        {(this.props.status.base !==null && this.props.status.base !== 0) &&  this.props.price}
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

export default connect(mapStateToProps)(PizzaPriceContainer)