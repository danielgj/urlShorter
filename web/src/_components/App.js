import React, { Component } from 'react';
import { Header, Footer, AddUrlForm } from './';

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <AddUrlForm />        
      </div>
    );
  }
}
