import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import './App.css';
import Modal from "./components/modal";

class App extends Component {

  render() {

    return (
      <div className="App">
          <Header/>
          <Content/>
          <Footer/>
          <Modal/>
      </div>
    );
  }
}

export default App;

{/*<header className="App-header">*/}
    {/*<img src={logo} className="App-logo" alt="logo" />*/}
    {/*<p>*/}
        {/*Edit <code>src/App.js</code> and save to reload.*/}
    {/*</p>*/}
    {/*<a*/}
        {/*className="App-link"*/}
        {/*href="https://reactjs.org"*/}
        {/*target="_blank"*/}
        {/*rel="noopener noreferrer"*/}
    {/*>*/}
        {/*Learn React*/}
    {/*</a>*/}
{/*</header>*/}