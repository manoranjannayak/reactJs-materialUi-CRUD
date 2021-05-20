import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom"
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import API from '../api/index';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignUp() {
  
  const classes = useStyles();
  const initialFormData = {
    userName:'',
    email:'',
    password:''
  } 

  let history = useHistory()

  const [values,setValues] = useState(initialFormData)
  const [errors,setErrors] = useState({})
  const [open, setOpen] = useState(false)

  const validate = () => {
    if(!values.userName){
      setErrors({userName: 'UserName required'})
      return false
    }
    if(!values.email){
      setErrors({email: 'email required'})
      return false
    }
    if(!values.password){
      setErrors({password: 'password required'})
      return false
    }
    return true
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      })
      setErrors({})
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    const isValid = validate()
    console.log('isValid', isValid);
    if(isValid === true){
    console.log('isValidaaaaa', isValid);

      const requestOptions = {
        // method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({
          username: values.userName,
          email: values.email,
          password: values.password
        // })
    };
      e.target.reset();
      const response = await API.post('users/create',requestOptions)
      console.log('response', response);
      if(response.status){
        setOpen(true);
        setTimeout(()=>{
          history.push('/signIn')
        },1000)
      }
    }

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up 
        </Typography>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Your user registration was successful!
            You may now log-in.
          </Alert>
        </Snackbar>
        <form className={classes.form} onSubmit={handleSubmit} noValidate >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors.userName)}
                helperText={errors.userName}
                autoComplete="username"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors.email)}
                helperText={errors.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors.password)}
                helperText={errors.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={()=>{history.push("/signIn")}}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}