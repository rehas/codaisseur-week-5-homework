import React, {PureComponent} from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {connect} from 'react-redux'
import {expressDelivery} from '../actions/expressdelivery'
import {updatePrice} from '../actions/price'

class ExpressDeliveryContainer extends PureComponent{
  handleExpressFormChange = (selection)=>{
    this.props.expressDelivery(selection)
    this.props.updatePrice()
  }
  render(){
    return (
      <div>
         <h4> Express Delivery</h4>
         <h6> Super Fast Drone Delivery for extra %10 </h6>
        <ExpressDeliverySwitch handleExpress={this.handleExpressFormChange}/>
      </div>
    )
  }
}

export default connect(null, {expressDelivery, updatePrice})(ExpressDeliveryContainer)

class ExpressDeliverySwitch extends React.Component {
  state = {
    fast: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.handleExpress({[name]: event.target.checked})
  };

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
      </div>
    );
  }
}
