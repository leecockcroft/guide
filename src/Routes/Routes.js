import React, { Component } from 'react';

import {BrowserRouter,Route} from 'react-router-dom'
class Router extends Component {


  render() {
    return (
      <div>
    <Route exact path="/" render={ () => <Header logo={logo} subheading="Web Development Guide"/>}/>

   









</div>

    );
  }
}

export default Router;
