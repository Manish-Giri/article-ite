import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './containers/ArticlesList';
import Header from "./components/Header";
import Form from "./containers/ArticleForm";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
          <Header/>
          </div>
        </div>  
        <div className="row">
          <div className="col-sm-6">
              <List/>
          </div>
          <div className="col-sm-6">
              <Form/>
          </div>   
       </div>
       
      </div>
    );
  }
}

export default App;
