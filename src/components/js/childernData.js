import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import data from "./card.json";
import Popup from "reactjs-popup";
import ReplyComment from "./replycomment";
import { CardContent } from "@material-ui/core";
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    // marginLeft: theme.spacing.unit * 4
  },
  card: {
    height: theme.spacing.unit * 50,
    width: theme.spacing.unit * 40,
    float: "Left",
    marginLeft: theme.spacing.unit * 7,
    marginTop: theme.spacing.unit * 5,
    backgroundColor: "#d9ddf5",
    boxShadow: "2px 2px 4px 4px #414167"
  },
  avatar: {
    height: theme.spacing.unit * 20,
    width: theme.spacing.unit * 20
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class ChildDetailCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      child: null
    };
  }

  openModal = child => {
    this.setState({ open: true, child: child });
  };
  closeModal = () => {
    this.setState({ open: false, child: null });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {data.map((child, index) => {
          return (
            <div
              className={classes.root}
              key={index}
              onClick={() => this.openModal(child)}
            >
              <Card className={classes.card}>
                <CardContent>
                  <img src={child.img} alt="child" className={classes.avatar} />
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Missing Child
                  </Button>
                  <Typography>{child.childName}</Typography>
                  <Typography>{child.details}</Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
        <div>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="popup">
              <a onClick={this.closeModal}>&times;</a>
              <CardWithDetail child={this.state.child} />
            </div>
          </Popup>
        </div>
      </div>
    );
  }
}

class CardWithDetail extends React.Component {
  state = {
    comments: [],
    commentInput: "",
    replyNestedComment: "none"
  };

  commentField = e => {
    this.setState({ commentInput: e.target.value });
  };

  addComment = () => {
    this.state.comments.push(this.state.commentInput);
    this.forceUpdate();
  };

  nestedReply = () => {
    this.setState({ replyNestedComment: "block" });
  };

  render() {
    return (
      <div className="fullcards">
        <div className="col-md-12">
          <div className="card">
            <div className="box">
              <div className="img">
                <img src={this.props.child.img} alt="child" />
              </div>
              <h2>{this.props.child.childName}</h2>
              <p>{this.props.child.details}</p>
            </div>
            <div className="position-fixed">
              <ul>
                {this.state.comments.map((comment, i) => (
                  <li key={i} className="comment">
                    {comment}
                    <br />
                    <h6 onClick={this.nestedReply}>
                      <mark>reply</mark>
                      <ReplyComment
                        replyNestedComment={this.state.replyNestedComment}
                      />
                    </h6>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="write text here"
                value={this.state.commentInput}
                onChange={this.commentField}
              />
              <button onClick={this.addComment}>send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChildDetailCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const SimpleModalWrapped = withStyles(styles)(ChildDetailCard);

export default SimpleModalWrapped;
