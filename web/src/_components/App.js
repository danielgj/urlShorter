import React, { Component } from 'react';
import { Header, Footer, AddUrlForm } from './';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="innerContainer">
          <div className="jumbotron">
            <h1 className="App-title">Bienvenido a la web de UrlShorter</h1>
          </div>
        </div>
        <AddUrlForm />
        <Footer />
      </div>
    );
  }
}
