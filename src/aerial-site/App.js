import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';

const styleSheet = {
  appContainer: {}
};

const HomeRoute = props => {
  return (
    <div className="App">
      <p className="App-intro">
        <img src='assets/img/logo.svg' className="App-logo" alt="logo" />
        this is home page  
      </p>
    </div>
  );
}

const AboutRoute = props => {
  return (
    <div className="App">
    <p className="App-intro">
    this is about page
    </p>
    </div>
  );
}

const WorkRoute = props => {
  return (
    <div className="App">
      <p className="App-intro">
        this is work page {props.routeParams.workType }
      </p>
    </div>
  );
}

const App = (props) => {
  return ( 
    <div className={props.classes.appContainer}> 
    <Route exact path="/" render={props => <HomeRoute/>} />
    <Route exact path="/about" render={props => <AboutRoute />} />
    <Route path="/:workType" render={props => <WorkRoute routeParams={props.match.params} />} />
    </div>
  )
}

// export default App;
export default compose(
  withRouter,
  injectSheet(styleSheet),
)(App);