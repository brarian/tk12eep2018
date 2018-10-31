import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header/header'
import Footer from "./components/Footer";
// import NotFound from "./components/NotFound/NotFound";
import registerServiceWorker from './registerServiceWorker';
//import Header from "client/src/components/Header";

// class ErrorPage extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <NotFound />
//       </div>
//     );
//   }
// }

const Site = () => {
  return (
  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={Header} />
  //     <Route  component={ErrorPage} />
  //   </Switch>
  // </Router>
  <div>
  <Footer />

  </div>
  );
}

ReactDOM.render(<Site />, document.getElementById('root'));
registerServiceWorker();
