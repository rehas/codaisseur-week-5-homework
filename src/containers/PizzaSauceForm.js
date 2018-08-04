import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class ControlledOpenSelect extends React.Component {
  state = {
    sauce: 'no',
    open: false
  };

  handleChange = event => {
    this.props.handleChange(event.target.value) 
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="pizza-sauce-form">Size</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.sauce}
            onChange={this.handleChange}
            inputProps={{
              name: "sauce",
              id: "pizza-sauce-form"
            }}
          >
            <MenuItem value={'no'}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"white"}>White sauce € 0,00  </MenuItem>
            <MenuItem value={"red"}>  Red sauce € 1,00 </MenuItem>
            <MenuItem value={"mix"}>  Mix it up € 1,50 </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledOpenSelect);
