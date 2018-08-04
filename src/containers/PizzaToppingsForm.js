import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
    marginLeft: 100 +'px'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class CheckboxesGroup extends React.Component {
  state = {
    pineapple : false,
    corn: false,
    olives : false,
    onion: false,
    spinach: false,
    tomatoes : false
  };

  handleChange = name => event => {
    this.props.handleSelection({[name] : event.target.checked})
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { pineapple, corn, olives, onion, spinach, tomatoes } = this.state;
    const error = Object.values(this.state).filter(v => v).length >= 3;

    return (
      <div className={classes.root}>
        <FormControl required error={error} component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Please pick upto 3 toppings for your pizza</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox disabled={error && !pineapple}  checked={pineapple} onChange={this.handleChange('pineapple')} value="pineapple" />
              }
              label="Pineapple"
            />
            <FormControlLabel
              control={
                <Checkbox disabled={error && !corn} checked={corn} onChange={this.handleChange('corn')} value="corn" />
              }
              label="Corn"
            />
            <FormControlLabel
              control={
                <Checkbox disabled={error && !olives}
                  checked={olives}
                  onChange={this.handleChange('olives')}
                  value="olives"
                />
              }
              label="Olives (green)"
            />
            <FormControlLabel
              control={
                <Checkbox disabled={error && !onion}
                  checked={onion}
                  onChange={this.handleChange('onion')}
                  value="onion"
                />
              }
              label="Red Onion"
            />
            <FormControlLabel
              control={
                <Checkbox disabled={error && !spinach}
                  checked={spinach}
                  onChange={this.handleChange('spinach')}
                  value="spinach"
                />
              }
              label="Spinach"
            />
            <FormControlLabel
              control={
                <Checkbox disabled={error && !tomatoes}
                  checked={tomatoes}
                  onChange={this.handleChange('tomatoes')}
                  value="tomatoes"
                />
              }
              label="Tomatoes"
            />            
          </FormGroup>
          <FormHelperText hidden={!error} >Max limit of toppings reached</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);