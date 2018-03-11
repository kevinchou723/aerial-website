import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import compose from 'recompose/compose';
import { Header } from './header';
import { Footer } from './footer';
import { About } from './about';
import { Work } from './work';
import { Home } from './home';
import { MobileMenu } from './mobileMenu';

const WorkRoute = props => {
  return (
    <Work workType={props.routeParams.workType}/>
  );
}

const App = (props) => {
  return ( 
    <div className='app-container'>
      <Header/>
      <MobileMenu/>
      <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/:workType" render={props => <WorkRoute routeParams={props.match.params} />} />
      <Footer/>
    </div>
  )
}

export default compose(
  withRouter,
)(App);