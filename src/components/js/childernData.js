import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import Button from "@material-ui/core/Button";
import axios from "axios";



const styles = theme => ({
  card: {
    height: theme.spacing.unit * 20,
    width: theme.spacing.unit * 30
  },

  avatar: {
    backgroundColor: red[500],
    height: theme.spacing.unit * 15,
    width: theme.spacing.unit * 15,
    marginLeft: '35px',
  },

});

class ChildDetailCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  Find your Child here
                </Avatar>
              }
            />
          </Card>
      </div>
    );
  }
}

ChildDetailCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(ChildDetailCard);

export default SimpleModalWrapped;