import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/index'
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer"
import registerServiceWorker from './registerServiceWorker';
import Title from "./components/SinglePage/Title";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <NotFound />
        <Footer />
      </div>

    );
  }
}

class SingleEpisodePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <Footer />
      </div>
    )
  }
}
const Site = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/sep" component={SingleEpisodePage} />
      <Route  component={ErrorPage} />
    </Switch>
  </Router>
  );
}

ReactDOM.render(<Site />, document.getElementById('root'));

registerServiceWorker();
