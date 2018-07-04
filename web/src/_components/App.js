import React, { Component } from 'react';
import { Header, Footer } from './';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="jumbotron">
          <header className="App-header">
            <h1 className="App-title">Bienvenido a la web de UrlShorter</h1>
          </header>        
        </div>
        <Footer />
      </div>
    );
  }
}
