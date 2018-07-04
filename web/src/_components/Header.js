import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <a className="navbar-brand" href="/">URLShorter</a>          
        </nav>                                                    
      </header>
    );
  }
}