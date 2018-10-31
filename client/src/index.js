<<<<<<< HEAD
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/header'
import NotFound from "./components/NotFound/NotFound";
import registerServiceWorker from './registerServiceWorker';
//import Header from "client/src/components/Header";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <NotFound />
      </div>
=======
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <Header />
>>>>>>> 80dd7f0ba2fcd040c57d099a2a576e685bc76d4f
    );
  }
}

<<<<<<< HEAD
const Site = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route  component={ErrorPage} />
    </Switch>
  </Router>
  );
}

ReactDOM.render(<Site />, document.getElementById('root'));
=======
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 80dd7f0ba2fcd040c57d099a2a576e685bc76d4f
registerServiceWorker();
