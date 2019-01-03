import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { DarkRawTheme } from "material-ui/styles";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    color: "white",
    fontSize: "3vh"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" className={classes.grow}>
          <a href="/" className={classes.grow}>
            Home
          </a>
          </Button>
          <Button color="inherit" >
            <a href="/login" className={classes.grow}>Login</a>
          </Button>
          <Button color="inherit">
            <a href="/signup" className={classes.grow}>Register</a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
