import React, {PureComponent} from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {connect} from 'react-redux'
import {expressDelivery} from '../actions/expressdelivery'
import {updatePrice} from '../actions/price'

class ExpressDeliveryContainer extends PureComponent{
  handleExpressFormChange = (selection)=>{
    console.log(selection)
    this.props.expressDelivery(selection)
    this.props.updatePrice()
  }
  render(){
    return (
      <div>
        Express Delivery
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
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.fast}
              onChange={this.handleChange('fast')}
              value="fast"
            />
          }
          label="Express Delivery With Drone Adds %10 to the price"
        />
      </FormGroup>
    );
  }
}
