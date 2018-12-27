import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import Button from "@material-ui/core/Button";
import axios from "axios";



const styles = theme => ({
  paper: {
    position: 'fixed',
    top: "30%",
    left: "20%",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  card: {
    height: theme.spacing.unit * 20,
    width: theme.spacing.unit * 30
  },

  avatar: {
    backgroundColor: blue[500],
    height: theme.spacing.unit * 15,
    width: theme.spacing.unit * 15,
    marginLeft: '35px',
  },

});

class MissingChildForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      file: null,
      missingChildName: "",
      Description: ""
    };
  }

  fileSelectedHandler = event => {
    this.setState({
      file: event.target.file,
      [event.target.name]: event.target.value
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("file", this.state.file);
    fd.append("missingChildName", this.state.missingChildName);
    fd.append("Description", this.state.Description);

    axios
      .post(
        "https://missingchild.herokuapp.com/create/missingChildren/details",
        fd
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.request);
      });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  My child is missing
                </Avatar>
              }
              onClick={this.handleOpen}
            />
          </Card>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Missing child
            </Typography>
            <input type="file" onChange={this.fileSelectedHandler} /><br/>
            <input
                  type="text"
                  name="missingChildName"
                  placeholder="Name"
                  className="form-control"
                  value={this.state.missingChildName}
                  onChange={this.fileSelectedHandler}
                />
                <Typography>Description</Typography>
                <textarea
                  name="Description"
                  className="form-control custom-contol"
                  value={this.state.Description}
                  onChange={this.fileSelectedHandler}
                />
                <Button onClick={this.fileUploadHandler}>Submit</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

MissingChildForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(MissingChildForm);

export default SimpleModalWrapped;