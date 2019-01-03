
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';


const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});



class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      mobile: "",
      emailid: "",
      password: "",
      address: "",
      state: "",
      city: "",
      pincode: "",
      gender: "",
      redirect: ""

    }
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  onSubmit = (e) => {
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      mobile: parseInt(this.state.mobile),
      emailid: this.state.emailid,
      address: this.state.address,
      state: this.state.state,
      city: this.state.city,
      pincode: parseInt(this.state.pincode),
      gender: this.state.gender,
      password: this.state.password
    }

    console.log(user)
    axios.post('https://missingchild.herokuapp.com/signup', user)
        .then((res) => {
            console.log( res );
            console.log( res.data );
            console.log('its done!')
            this.renderRedirect();
        })
        .catch((err) => {
            console.log(err);
        });
        
    }

  renderRedirect = () => {
    return <Redirect to={{
      pathname: '/',
      state: this.state
    }}
    />
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
          </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="text">FirstName</InputLabel>
                <Input name="firstname" autoComplete="firstname" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="text">Lastname</InputLabel>
                <Input name="lastname" autoComplete="lastname" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="number">Mobile</InputLabel>
                <Input name="mobile" autoComplete="mobile" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input name="emailid" autoComplete="emailid" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={this.firstname}
                  onChange={this.inputHandler}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="text">address</InputLabel>
                <Input name="address" autoComplete="address" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="text">state</InputLabel>
                <Input name="state" autoComplete="state" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="text">city</InputLabel>
                <Input name="city" autoComplete="city" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="number">Pincode</InputLabel>
                <Input name="pincode" autoComplete="pincode" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="text">Gender</InputLabel>
                <Input name="gender" autoComplete="gender" autoFocus
                  value={this.firstname}
                  onChange={this.inputHandler}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.onSubmit}
              >
                Sign in
            </Button>
            {/* {this.renderRedirect()} */}
            <Typography>Already SignUp! <a href="/login">Sign In</a></Typography>
            </form>
          </Paper>
          
        </main>
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
