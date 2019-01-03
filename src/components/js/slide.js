import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import MissingChildForm from "./form.js";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

var image_links = [
  {
    imageLink: "http://i.ytimg.com/vi/p0Es9mCMsRQ/hqdefault.jpg"
  },
  {
    imageLink:
      "https://www.thehindu.com/migration_catalog/article15023758.ece/alternates/FREE_660/2008021758170201"
  },
  {
    imageLink: "https://wrcb.images.worldnow.com/images/17653533_G.jpeg"
  },
  {
    imageLink: "https://i.ytimg.com/vi/GRjpnzReT40/maxresdefault.jpg"
  }
];

const styles = theme => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 395,
    display: "block",
    width: "100%"
  },
  card: {
    height: theme.spacing.unit * 20,
    width: theme.spacing.unit * 30,
    textDecoration: 'none',
  },

  avatar: {
    backgroundColor: blue[500],
    height: theme.spacing.unit * 15,
    width: theme.spacing.unit * 15,
    marginLeft: "35px"
  },

  avatar1: {
    backgroundColor: red[500],
    height: theme.spacing.unit * 15,
    width: theme.spacing.unit * 15,
    marginLeft: "35px"
  },

  div: {
    display: "flex",
    justifyContent: "space-around"
  }
});

class Slider extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };
  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = image_links.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{image_links[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {image_links.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imageLink}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.MobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <div className={classes.div}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  My child is missing
                </Avatar>
              }
            />
          </Card>
          <a href="/child_detail">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar1}>
                    Find your child here
                  </Avatar>
                }
              />
            </Card>
          </a>
          <MissingChildForm />
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Slider);
