import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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
    sauce: "",
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
        <Button className={classes.button} onClick={this.handleOpen}>
          Open the select
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Size</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.sauce}
            onChange={this.handleChange}
            inputProps={{
              name: "sauce",
              id: "demo-controlled-open-select"
            }}
          >
            <MenuItem value={null}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"White"}>White sauce € 0,00  </MenuItem>
            <MenuItem value={"Red"}>  Red sauce € 1,00 </MenuItem>
            <MenuItem value={"Mix"}>  Mix it up € 1,50 </MenuItem>
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
