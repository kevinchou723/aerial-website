import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { Header } from './header';
import { Footer } from './footer';
import { About } from './about';
import { Work } from './work';
import { Home } from './home';
import { MobileMenu } from './mobileMenu';


const styleSheet = theme => ({
  appContainer: {}
});

const HomeRoute = props => {
  return (
    <Home {...props}/>
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
      <MobileMenu/>
      <Route exact path="/" render={props => <HomeRoute/>} />
      <Route exact path="/about" render={props => <AboutRoute />} />
      <Route path="/:workType" render={props => <WorkRoute routeParams={props.match.params} />} />
      <Footer/>
    </div>
  )
}

// export default App;
export default compose(
  withRouter,
  injectSheet(styleSheet),
)(App);