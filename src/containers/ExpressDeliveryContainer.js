import React, {PureComponent} from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {connect} from 'react-redux'
import {expressDelivery} from '../actions/expressdelivery'
import {updatePrice} from '../actions/price'
import Button from '@material-ui/core/Button';


class ExpressDeliveryContainer extends PureComponent{
  state = {
    showOrder :false
  }

  handleExpressFormChange = (selection)=>{
    this.props.expressDelivery(selection)
    this.props.updatePrice()
  }
  handleOrder = () =>{
    this.setState({
      showOrder: true
    })
    
  } 

  render(){
    return (
      <div>
        <h4 className="selection-header"> Express Delivery</h4>
        <h6> Super Fast Drone Delivery for extra %10 </h6>
        <ExpressDeliverySwitch handleExpress={this.handleExpressFormChange} 
          handleOrder={this.handleOrder} isDisabled={this.props.finalStatus.base ===null}/>
        
        {this.state.showOrder && 
          <div>
            <hr/>
            <p> <b> Order Summary </b> </p>
            <p>Size : {this.props.finalStatus.base}</p>
            <p>Sauce: {this.props.finalStatus.sauce}</p>
            <p>Toppings: {this.props.finalStatus.top.map(t=> <span key={t}> <b>{t}</b>  </span>)}</p>
            <p>Enjoy !!</p>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    finalStatus : state.status
  }
}

export default connect(mapStateToProps, {expressDelivery, updatePrice})(ExpressDeliveryContainer)

class ExpressDeliverySwitch extends React.Component {
  state = {
    fast: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.handleExpress({[name]: event.target.checked})
  };

  handleClick = () =>{
    this.props.handleOrder()
  }

  render() {
    return (
      <div>
      <FormGroup style={{display: 'block'}}>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.fast}
              onChange={this.handleChange('fast')}
              value="fast"
            />
          }
          label="Express"
        />
      </FormGroup>
      <Button disabled={this.props.isDisabled} color="primary" onClick={this.handleClick}>ORDER</Button>
      </div>
    );
  }
}
