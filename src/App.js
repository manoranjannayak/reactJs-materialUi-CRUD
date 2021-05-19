import React from 'react';
import './App.css';
import SignUp from './../src/components/signUp';
import SignIn from './../src/components/signIn';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={SignUp} />
      <Route path="/signIn" component={SignIn} />
    </Router>
  );
}

export default App;
