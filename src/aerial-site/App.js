import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { Header } from './header';
import { Footer } from './footer';
import { About } from './about';
import { Work } from './work';


const styleSheet = theme => ({
  appContainer: {}
});

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
    <About {...props}/>
  );
}

const WorkRoute = props => {
  return (
    <Work workType={props.routeParams.workType}/>
  );
}

const App = (props) => {
  return ( 
    <div className={props.classes.appContainer}>
      <Header/> 
      <Route exact path="/" render={props => <HomeRoute/>} />
      <Route exact path="/about" render={props => <AboutRoute />} />
      <Route path="/work/:workType" render={props => <WorkRoute routeParams={props.match.params} />} />
      <Footer/>
    </div>
  )
}

// export default App;
export default compose(
  withRouter,
  injectSheet(styleSheet),
)(App);