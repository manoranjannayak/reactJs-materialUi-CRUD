import React from 'react';
import './App.css';
import SignUp from './../src/components/signUp';
import SignIn from './../src/components/signIn';
import Welcome from './../src/components/welcome';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Route exact path="/" component={SignUp} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/welcome" component={Welcome} />
    </Router>
  );
}

export default App;
