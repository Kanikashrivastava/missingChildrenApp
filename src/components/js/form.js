import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import Button from "@material-ui/core/Button";
import axios from "axios";

const styles = theme => ({
  paper: {
    position: "static",
    width: theme.spacing.unit * 60,
    backgroundColor: "#efca94",
    boxShadow: theme.shadows[5],
    padding: "15px 15px 15px 15px",
    margin: "10% 10% 5% 25%" ,
    textAlign: "center"
  },
  card: {
    height: theme.spacing.unit * 20,
    width: theme.spacing.unit * 30,
    cursor: "pointer"
  },

  avatar: {
    backgroundColor: blue[500],
    height: theme.spacing.unit * 15,
    width: theme.spacing.unit * 15,
    marginLeft: "35px"
  },
  title: {
    color: "red",
    fontWeight: "bold"
  },
  inputName: {
    borderRadius: "2%",
    height: "5vh"
  },
  childDescription: {
    borderRadius: "2%",
    height: "7vh"
  },
  avatar1: {
    marginLeft: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10
  }
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
          className={classes.modal}
        >
          <div className={classes.paper}>
            <Typography variant="h4" id="modal-title" className={classes.title}>
              Missing child
            </Typography>
            <input type="file" className={classes.avatar1} onChange={this.fileSelectedHandler} />
            <br />

            <Typography>Name</Typography>
            <input
              type="text"
              name="missingChildName"
              placeholder="Name"
              className={classes.inputName}
              value={this.state.missingChildName}
              onChange={this.fileSelectedHandler}
            />
            <Typography>Description</Typography>
            <textarea
              name="Description"
              className={classes.childDescription}
              value={this.state.Description}
              onChange={this.fileSelectedHandler}
            /><br/>
            <Button
              variant="contained"
              className={classes.button}
              onClick={this.fileUploadHandler}
            >
              Submit
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

MissingChildForm.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(MissingChildForm);

export default SimpleModalWrapped;
