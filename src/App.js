import React, { Component } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import './css/style.css'
import { initializeApp } from "./redux/appReducer";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render () {
    if(!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <HashRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <HeaderContainer />
            <Main />
          </div>
        </HashRouter >
      );
    }
    
  }
  
}

const mapStateToPropse = (state) => ({
  initialized: state.appReducer.initialized
})

let mapDispathcToPropse = {
  initializeApp
}

export default compose(
  connect(mapStateToPropse, mapDispathcToPropse)
)(App);

